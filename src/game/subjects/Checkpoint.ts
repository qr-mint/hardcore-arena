interface CheckpointOptions {
  x: number;
  y: number;
  cols?: number;
  rows?: number;
  type?: "start" | "finish" | "save"; // основная роль (или просто для фильтра)
  finish?: boolean; // дополнительный флаг для финиша
  save?: boolean;   // дополнительный флаг для сохранения
}

export class Checkpoint extends Phaser.Physics.Arcade.Sprite {
  public mode?: "start" | "finish" | "save";
  public finish?: boolean;
  constructor(scene: Phaser.Scene, options: CheckpointOptions) {
    super(scene, options.x, options.y, 'checkpoints');
    scene.add.existing(this);
    scene.physics.add.existing(this, true);
    this.setTintFill(0xBBFAAC);
    const width = 32 * (options.cols || 1);
    const height = 32 * (options.rows || 1);
    this.setDisplaySize(width, height);
    this.setOffset(0, 0);
    this.setOrigin(0, 0);
    this.setDepth(0);
    this.setImmovable(true);
    this.mode = options.type;
    this.finish = options.finish;
  }
}
