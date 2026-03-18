import { Scene, Physics } from 'phaser';
import { SolidBlock } from '../subjects/SolidBlock.ts'
import { Player } from '../subjects/Player.ts';

import { EventBus } from '../EventBus';
import { Point } from '../subjects/Point.ts';
import { LinearEnemy } from '../subjects/LinearEnemy.ts';
import { Checkpoint } from '../subjects/Checkpoint.ts';

import { startLevel, finishLevel } from '@/api/game/levels.ts';
import { toast } from 'react-toastify';
import { useGameStore } from '@/store/game/index.ts';
import { store } from '../store/index.ts';
import { useSettingsStore } from '@/store/settings/settings.tsx';

import { CircularEnemy } from '../subjects/CircularEnemy.ts';
import { PauseCircularEnemy } from '../subjects/PauseCircularEnemy.ts';
import { ReverseCircularEnemy } from '../subjects/ReverseCircularEnemy';

const TILE_SIZE = 32;

export class Game extends Scene {
    private blocks: Physics.Arcade.StaticGroup;
    private points: Physics.Arcade.StaticGroup;
    private checkpoints: Physics.Arcade.StaticGroup;
    private enemies: Phaser.Physics.Arcade.Group;
    private player: Player;
    private map: any;
    private isDead = false;
    private levelID: number;
    private tournamentID: number;
    private tickets: number = 0;
    private mapWidth: number;
    private mapHeight: number;
    private circularEnemies: Phaser.Physics.Arcade.Group;

    constructor() {
        super('Game');
    }

    async init(data: any) {
      store.reset();
      this.map = data.level.data;
      this.isDead = false;
      if (data.tournament) {
        this.tournamentID = data.tournament.id;
      }
      await startLevel(data.level.id);
      this.levelID = data.level.id;
      const gameState = useGameStore.getState();
      this.tickets = gameState.data.tickets;
      if (this.tickets === 0) {
        EventBus.emit('exit-level'); 
      }
      console.log('init')
      if (!this.scene.isActive('UIScene')) {
        this.scene.launch('UIScene');
      }
    }

    create() {
      const cameraMode = useSettingsStore.getState().cameraMode;
        // Размер карты в пикселях
      this.mapWidth = this.map.grid.length * TILE_SIZE;
      this.mapHeight = this.map.grid[0].length * TILE_SIZE;

      const screenWidth = this.scale.width;
      const screenHeight = this.scale.height;
      if (cameraMode === 'full') {
        const zoomX = screenWidth / this.mapWidth;
        const zoomY = screenHeight / this.mapHeight;

        const zoom = Math.min(zoomX, zoomY);
      
        this.cameras.main.setZoom(zoom);
        this.cameras.main.centerOn(this.mapWidth / 2, this.mapHeight / 2);
      }
      // Блоки
      this.blocks = this.physics.add.staticGroup({ classType: SolidBlock });
      const graphics = this.add.graphics();
      graphics.fillStyle(0xffffff, 1);
      graphics.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
      graphics.generateTexture('tile-white', TILE_SIZE, TILE_SIZE);

      graphics.clear();
      graphics.fillStyle(0xE6DFFA, 1);
      graphics.fillRect(0, 0, TILE_SIZE, TILE_SIZE);
      graphics.generateTexture('tile-purple', TILE_SIZE, TILE_SIZE);

      graphics.destroy();

      for (let row = 0; row < this.map.grid.length; row++) {
        for (let col = 0; col < this.map.grid[row].length; col++) {
          if (this.map.grid[row][col] === 1) {
            this.blocks.add(
              new SolidBlock(
                this,
                (row * TILE_SIZE) + (TILE_SIZE / 2),
                (col * TILE_SIZE) + (TILE_SIZE / 2)
              )
            );
          } else {
            const isWhite = (row + col) % 2 === 0;
            const key = isWhite ? 'tile-white' : 'tile-purple';

            this.add.sprite((row * TILE_SIZE) + (TILE_SIZE / 2), (col * TILE_SIZE) + (TILE_SIZE / 2), key);
          }
        }
      }
      this.points = this.physics.add.staticGroup({ classType: Point });
      for (const point of this.map.points) {
        this.points.add(
          new Point(
            this,
            point.x,
            point.y
          )
        );
      }
      this.enemies = this.physics.add.group({ classType: LinearEnemy, runChildUpdate: false });
      this.circularEnemies = this.physics.add.group({ classType: CircularEnemy, runChildUpdate: false });
      const time = Date.now();


      for (const enemyIndex in this.map.enemies) {
        const enemy = this.map.enemies[enemyIndex];
        if (enemy.type === "formation") {
          for (const itemIndex in enemy.list) {
            const index = parseInt(itemIndex);
            const item = enemy.list[itemIndex];
            if (item.type === "reverse") {
              this.circularEnemies.add(new ReverseCircularEnemy(
                this,
                item.x,
                item.y,
                enemy.x,
                enemy.y,
                item.radius,
                item.angle,
                enemy.speed,
                item.direction,
                index,
                time,
                item.endAngle,
              ));
            } else if (item.type === "pause") {
              this.circularEnemies.add(new PauseCircularEnemy(
                this,
                item.x,
                item.y,
                enemy.x,
                enemy.y,
                item.radius,
                item.angle,
                enemy.speed,
                item.direction,
                index,
                time,
                enemy.wait,
                enemy.stepAngle,
              ));
            } else {
              this.circularEnemies.add(new CircularEnemy(
                this,
                item.x,
                item.y,
                enemy.x,
                enemy.y,
                item.radius,
                item.angle,
                enemy.speed,
                item.direction,
                index,
                time,
              ));
            }
          }
        } else {
          this.add.circle(enemy.x, enemy.y, 2, 0xff0000);
          const index = parseInt(enemyIndex);
          this.enemies.add(
            new LinearEnemy(
              this,
              enemy.x,
              enemy.y,
              enemy.pattern > -1 ? this.map.pattern[enemy.pattern] : [],
              index,
              time
              )
            );
          }
        }
  
        this.checkpoints = this.physics.add.staticGroup({ classType: Checkpoint, runChildUpdate: true });

        for (const checkpoint of this.map.checkpoints) {
            this.checkpoints.add(
              new Checkpoint(this, checkpoint)
            );
            if (store.checkpoint && (store.checkpoint.x === checkpoint.x && checkpoint.y === store.checkpoint.y)) {
              this.player = new Player(this, checkpoint.x, checkpoint.y);
              if (cameraMode === 'player') {
                  this.cameras.main.setZoom(store.currentZoom); // или 1.2 — как нравится
                  this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
              }
            } else if (checkpoint.type === "start") {
                this.player = new Player(this, checkpoint.x, checkpoint.y);
                if (cameraMode === 'player') {
                  this.cameras.main.setZoom(store.currentZoom); // или 1.2 — как нравится
                  this.cameras.main.startFollow(this.player, true, 0.1, 0.1);
                }
            }
        }

        this.physics.add.collider(this.player, this.blocks);
        
        this.physics.add.overlap(this.player, this.checkpoints, (player: any, checkpoint: any) => {
            if ((checkpoint as Checkpoint).type === "save") {
              store.checkpoint = checkpoint;
            } else if (store.score === this.points.getLength() && (checkpoint as Checkpoint).finish) {
              const elapsedMs = Date.now() - store.timer;
              this.scene.stop();
              finishLevel(this.levelID, { success: true, time: elapsedMs })
                .then(() => {
                    if (this.tournamentID) {
                      EventBus.emit('game-state', {
                        status: 'tournament_win',
                        level_id: this.levelID,
                        current_time: elapsedMs,
                        tournament_id: this.tournamentID,
                        next_level_id: store.level.next_level_id,
                        deaths: store.deaths
                      });
                    } else {
                      EventBus.emit('game-state', {
                        status: 'win',
                        level_id: this.levelID,
                        next_level_id: store.level.next_level_id,
                        current_time: elapsedMs,
                        deaths: store.deaths
                      });
                    }
                    
                })
                .catch((err) => toast.error(err.message));
            }
        });

        this.physics.add.collider(this.player, this.circularEnemies, () => {
            if (this.isDead) return;
            const elapsedMs = Date.now() - store.timer;
            finishLevel(this.levelID, { success: false, time: elapsedMs, tournament_id: this.tournamentID })
              .catch((err) => toast.error(err.message));
            this.tickets=-1;
            const gameState = useGameStore.getState();
            gameState.setTickets(this.tickets);
            this.isDead = true;
            store.deaths++;
            this.scene.restart();
            if (this.tickets === 0) {
              EventBus.emit('game-state', {
                status: 'no_tickets',
                level_id: this.levelID,
              });
            }
        });
        
        this.physics.add.collider(this.player, this.enemies, () => {
            if (this.isDead) return;
            const elapsedMs = Date.now() - store.timer;
            finishLevel(this.levelID, { success: false, time: elapsedMs, tournament_id: this.tournamentID })
                .catch((err) => toast.error(err.message));
            this.tickets=-1;
            const gameState = useGameStore.getState();
            gameState.setTickets(this.tickets);
            this.isDead = true;
            store.deaths++;
            this.scene.restart();
            if (this.tournamentID) {
              EventBus.emit('game-state', {
                status: 'tournament_lose',
                level_id: this.levelID,
                current_time: elapsedMs,
                tournament_id: this.tournamentID,
                deaths: store.deaths
              });
            } else {
              EventBus.emit('game-state', {
                status: 'lose',
                level_id: this.levelID,
                current_time: elapsedMs,
                tournament_id: this.tournamentID,
                deaths: store.deaths
              });
              if (this.tickets === 0) {
                EventBus.emit('game-state', {
                  status: 'no_tickets',
                  level_id: this.levelID,
                });
              }
            }
        });


      this.physics.add.collider(this.player, this.points, (player, point) => {
        point.destroy();
        store.score = (store.score || 0) + 1;
      });
      
      if (cameraMode === "player") {
        EventBus.on("zoom:change", () => {
          console.log('zoom: chagnge', store);
          this.cameras.main.setZoom(store.currentZoom);
        }, this);
      }

      EventBus.on("level:replay", () => {
        this.scene.restart();
      });

      EventBus.on("level:next", () => {
        this.scene.start("LoaderScene");
    });
      
    this.scale.on('resize', this.onResize, this);
     
    EventBus.emit('current-scene-ready', this);
  }

  onResize(){
      const width = window.innerWidth;
      const height = window.innerHeight;
      // const zoomX = window.innerWidth / this.mapWidth;
      // const zoomY = window.innerHeight / this.mapHeight;

      // const zoom = Math.min(zoomX, zoomY);
      
      // this.cameras.main.setZoom(zoom);
      // this.cameras.main.centerOn(this.mapWidth / 2, this.mapHeight / 2);
      const dpr = 1;
    
      const widthDPR = width * dpr;
      const heightDPR = height * dpr;
      
      this.game.scale.setGameSize(widthDPR, heightDPR);
      this.game.scale.setParentSize(width, height);
  }

  update(time: number, delta: number) {
    if (this.isDead) return;
    if (this.player) {
      this.player.update({
        joystick: store.joystick,
        controls: store.controls
      });
    }

    this.enemies.children.iterate((enemy) => {
      enemy.update(time, delta);
    });

    this.circularEnemies.children.iterate((enemy) => {
      enemy.update(time, delta);
    });
  }
}
