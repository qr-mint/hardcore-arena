import { EventBus } from "../EventBus";
import { store } from '../store/index.ts';
import { useSettingsStore } from '@/store/settings/settings';

export default class UIScene extends Phaser.Scene {
  private hudText: Phaser.GameObjects.Text;
  private labelText: Phaser.GameObjects.Text;
  private panel: Phaser.GameObjects.Rectangle;
  private menuButton: Phaser.GameObjects.Text;
  private screenWidth: number;
  private screenHeight: number;
  private pauseBtn: Phaser.GameObjects.Image;

  constructor() {
    super('UIScene');
  }
  
  create() {
    const settings = useSettingsStore.getState();
    const isMobile = (this.sys.game.device.input.touch || this.sys.game.device.os.android || this.sys.game.device.os.iOS || this.sys.game.device.os.windowsPhone || window.innerWidth <= 768);
    const panelHeight = isMobile ? 40 : 80;
    this.screenWidth = this.scale.width;
    this.screenHeight = this.scale.height;
    const isHorizontal = this.scale.isLandscape;
    this.pauseBtn = this.add.image(30, panelHeight + 20, store.pause ? "play" : "pause")
      .setInteractive({ useHandCursor: true })
      .setScrollFactor(0)
      .setDisplaySize(48, 48)
      .setAlpha(0.5)
      .setDepth(1000);
    this.pauseBtn.on("pointerdown", () => {
      store.pause = !store.pause;
      if (store.pause) {
        this.pauseBtn.setTexture("play");
        this.scene.pause("Game");
      } else {
        this.pauseBtn.setTexture("pause");
        this.scene.resume("Game");
      }
    });

    if (isMobile) {
      this.panel = this.add.rectangle(
        0, 0,
        this.screenWidth * 2, panelHeight,
        0x000000, 0.7
      ).setScrollFactor(0);

      this.labelText = this.add.text(10, 4, store.level.name, {
        fontSize: '12px',
        color: '#ffffff',
        fontFamily: 'Arial'
      });
      
      this.hudText = this.add.text(150, 4, 'Deaths: 0 | Time: 0:00 | Points: 0', {
        fontSize: '12px',
        color: '#ffffff',
        fontFamily: 'Arial'
      });
      
      this.menuButton = this.add.text(
        this.screenWidth - 50,
        4,
        '← Back',
        {
          fontSize: '12px',
          color: '#ffffff',
          fontFamily: 'Arial'
        }
      )
        .setInteractive({ useHandCursor: true })
        .setScrollFactor(0)
        .setAlpha(0.9);
      if (settings.cameraMode === "player") {
        this.createZoomUI();
      }
    } else {
      this.panel = this.add.rectangle(
        0, 0,
        this.screenWidth * 2, panelHeight,
        0x000000, 0.7
      ).setScrollFactor(0);

      this.labelText = this.add.text(10, 8, store.level.name, {
        fontSize: '18px',
        color: '#ffffff',
        fontFamily: 'Arial'
      });

      this.hudText = this.add.text(150, 8, 'Deaths: 0 | Time: 0:00 | Points: 0', {
        fontSize: '18px',
        color: '#ffffff',
        fontFamily: 'Arial'
      });
      
      this.menuButton = this.add.text(
        this.screenWidth - 80,
        8,
        '← Back',
        {
          fontSize: '18px',
          color: '#ffffff',
          fontFamily: 'Arial'
        }
      )
        .setInteractive({ useHandCursor: true })
        .setScrollFactor(0)
        .setAlpha(0.9);
      if (settings.cameraMode === "player") {
        this.createZoomUI();
      }
    }

      this.menuButton.on('pointerdown', () => {
        EventBus.emit("exit-level");   // можно вызвать меню в React
      });
      this.input.removeAllListeners();

      if (settings.controll === "arrows") {
        const w = this.screenWidth;
        const h = this.screenHeight;
        const btnSize = 60;



        const makeBtn = (x: number, y: number, key: string, controlKey: string) => {
          const btn = this.add.image(x, y, key)
            .setInteractive()
            .setScrollFactor(0)
            .setDisplaySize(btnSize, btnSize)
            .setAlpha(0.5);
          // this.uiContainer.add(btn);
          btn.on('pointerdown', () => {
            store.controls[controlKey] = true;
            console.log(store.controls, controlKey);
          });
          btn.on('pointerup', () => store.controls[controlKey] = false);
          btn.on('pointerout', () => store.controls[controlKey] = false);

          return btn;
        } 
        if (isHorizontal) {
          makeBtn(100, h - 50, 'arrow-left', 'left');
          makeBtn(180, h - 50, 'arrow-right', 'right');

          makeBtn(w - 100, h - 50, 'arrow-up', 'up');
          makeBtn(w - 180, h - 50, 'arrow-down', 'down');
        } else {
          makeBtn(40, h - 50, 'arrow-left', 'left');
          makeBtn(120, h - 50, 'arrow-right', 'right');

          makeBtn(w - 40, h - 50, 'arrow-up', 'up');
          makeBtn(w - 120, h - 50, 'arrow-down', 'down');
        }
      } else if (settings.controll === "joystick") {
        const base = this.add.circle(0, 0, 60, 0x888888, 0.3)
          .setScrollFactor(0)
          .setDisplaySize(100, 100);
        const thumb = this.add.circle(0, 0, 30, 0xffffff, 0.6)
          .setScrollFactor(0)
          .setDisplaySize(50, 50);
       
        store.joystick = (this as any).rexVirtualJoystick.add(this, {
          x: 0, y: 0,
          radius: 60,
          base,
          thumb,
          dir: '8dir',
          fixed: true,
        });
        store.joystick.setVisible(false);
        
        this.input.on('pointerdown', (pointer: Phaser.Input.Pointer) => {
          const x = pointer.x;
          const y = pointer.y;
        
          store.joystick.setVisible(true);
          store.joystick.base.setPosition(x, y);
          store.joystick.thumb.setPosition(x, y);
        });

        this.input.on('pointerup', () => {
          if (store.joystick) {
            store.joystick.setVisible(false);
          }
        });

        // this.events.once("shutdown", () => {
        //   store.joystick = null;
        // });
      }
    }

    createZoomUI () {
      this.add.text(this.screenWidth - 30, 40, '+', { fontSize: '32px', color: '#000' })
      .setAlpha(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        store.currentZoom = Math.min(store.currentZoom + 0.1, 2);
        EventBus.emit("zoom:change");
      });

    this.add.text(this.screenWidth - 80, 40, '-', { fontSize: '32px', color: '#000' })
      .setAlpha(0.5)
      .setInteractive()
      .on('pointerdown', () => {
        console.log(store.currentZoom, 'currentZoom');
        store.currentZoom = Math.max(store.currentZoom - 0.1, 0);
        EventBus.emit("zoom:change");
      });
    }

    update(time: number, delta: number): void {
      const elapsedMs = Date.now() - store.timer;
      const elapsedSec = Math.floor(elapsedMs / 1000);
      const minutes = Math.floor(elapsedSec / 60);
      const seconds = elapsedSec % 60;
      this.hudText.setText(
        `Deaths: ${store.deaths} | Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds} | Points: ${store.score}`
      );
    }
}