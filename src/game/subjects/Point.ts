export class Point extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    // 1. Создаём временный Graphics и рисуем круг
    const graphics = scene.add.graphics();
    graphics.fillStyle(0xecc54f, 1); // цвет круга
    graphics.fillCircle(7.5, 7.5, 7.5); // центр (7.5,7.5), радиус 7.5px

    // 2. Генерируем текстуру и удаляем Graphics
    graphics.generateTexture('point-circle', 15, 15);
    graphics.destroy();

    // 3. Создаём спрайт на основе текстуры
    super(scene, x, y, 'point-circle');
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setDepth(10);

    // 4. Делаем тело круга и задаём смещение
    this.body?.setCircle(7.5);
    this.body?.setOffset(0, 0);

    // 5. Опционально: чтобы круг не двигался
    this.setImmovable(true);
  }
}