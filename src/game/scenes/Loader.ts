import { Scene } from 'phaser';
import { getLevel } from '@/api/game/levels.ts';
import { getTournament, getTournamentBy } from '@/api/game/tournaments.ts';
import { store } from '../store';

export class LoaderScene extends Scene {
    constructor() {
        super('LoaderScene');
    }

    async preload() {
        this.load.image('arrow-up', 'assets/images/arrow-up.svg');
        this.load.image('arrow-down', 'assets/images/arrow-down.svg');
        this.load.image('arrow-left', 'assets/images/arrow-left.svg');
        this.load.image('arrow-right', 'assets/images/arrow-right.svg');
        this.load.image('pause', 'assets/images/pause-circle.svg');
        this.load.image('play', 'assets/images/play-circle.svg');
        this.add.text(
            this.cameras.main.width / 2,
            this.cameras.main.height / 2,
            'Loading level...',
            { fontSize: '24px', color: '#ffffff' }
        ).setOrigin(0.5);

        // Ждём данные уровня
        try {
            const params = new URLSearchParams(window.location.search);
            const levelId = params.get("level_id");
            const tourname_id = params.get("tourname_id");
            const tourname_type = params.get("tourname_type"); 
            const order_id = params.get('order_id');
            
            let tournament;

            if (tourname_type) tournament = await getTournamentBy(tourname_type);
            else if (tourname_id) tournament = await getTournament(tourname_id);

            const level_id = levelId || tournament?.levels[0]?.level_id;
            let data;
            if (level_id) {
                data = await getLevel(level_id);
                store.level = data;
                // data = (await import("../map/test.json"));
                data = data;
            } else {
                data = (await import("../map/test.json"));
                data = { data: data };
            }
            store.tournament - tournament;
            // Передаём данные в GameScene
            this.scene.start('Game', { level: data, tournament, order_id });
        } catch (err) {
          console.error('Error loading level:', err);
          const data = await import("../map/1.json");
          this.scene.start('Game', { level: { data } });
        }
    }

    create() {
        // Тут ничего не нужно — весь код в preload
    }
}
