interface updateParams {
  joystick?: any;
  controls?: any;
}
export class Player extends Phaser.Physics.Arcade.Sprite {
  private cursors: Phaser.Types.Input.Keyboard.CursorKeys | undefined;
  private pointer: Phaser.Input.Pointer;

  constructor(scene: Phaser.Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    // this.setCollideWorldBounds(true);
    this.setTintFill(0xff0000); // Set player's tint to green
    this.setDisplaySize(24, 24);
    // this.setSize(28, 28);
    this.setOffset(0, 0);
    this.setOrigin(0, 0);
    this.pointer = scene.input.activePointer;
    this.cursors = scene.input.keyboard?.createCursorKeys();
    scene.input.addPointer(2);
  }

  update({ joystick, controls }: updateParams) {
    this.setVelocity(0);
    if (joystick && joystick.force > 0) {
        // Управление джойстиком
        this.setVelocityX(joystick.forceX);
        this.setVelocityY(joystick.forceY);
    } else {
        if (controls.left) this.setVelocityX(-200);
        else if (controls.right) this.setVelocityX(200);
        if (controls.up) this.setVelocityY(-200);
        else if (controls.down) this.setVelocityY(200);
        // Управление клавишами
        if (this.cursors?.left.isDown) this.setVelocityX(-200);
        else if (this.cursors?.right.isDown) this.setVelocityX(200);

        if (this.cursors?.up.isDown) this.setVelocityY(-200);
        else if (this.cursors?.down.isDown) this.setVelocityY(200);
      }
  }
}
