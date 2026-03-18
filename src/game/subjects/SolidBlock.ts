export class SolidBlock extends Phaser.Physics.Arcade.Sprite {
  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'block');
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setTintFill(0xC5B2F3);
    this.setDisplaySize(32, 32);
    this.setDepth(10);
    this.setImmovable(true);
  }
}
