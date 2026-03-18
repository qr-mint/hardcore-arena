export class PauseCircularEnemy extends Phaser.Physics.Arcade.Sprite {
  startTime: number;
  index: number;

  startX: number;
  startY: number;
  
  radius: number;
  angle: number;
  speed: number;
  centerX: number;
  centerY: number;
  direction: number;

  pauseTime: number = 0;
  stepAngle: number;
  targetAngle: number;
  pauseTimer: number;
  rotating: boolean = true;

  label: Phaser.GameObjects.Text;

  constructor(
    scene: Phaser.Scene,
    x: number, y: number,
    centerX: number, centerY: number,
    radius: number, angle: number, speed: number,
    direction: number,
    index: number = 0, startTime: number,
    pauseTime: number, stepAngle: number
  ) {
    const graphics = scene.add.graphics();
    graphics.fillStyle(0x6736CE, 1);
    graphics.fillCircle(7.5, 7.5, 7.5);
    graphics.generateTexture('enemy-circle', 15, 15);
    graphics.destroy();

    super(scene, x, y, 'enemy-circle');
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.body?.setCircle(7.5);
    this.body?.setOffset(0, 0);
    
    this.setDepth(1);

    this.label = scene.add.text(x, y, String(index + 1), {
      fontSize: '12px',
      color: '#ffffff',
      fontStyle: 'bold',
      align: 'center'
    });

    this.label.setOrigin(0.5, 0.5);
    this.label.setDepth(10);

    this.startTime = startTime;

    this.index = index;

    this.startX = x;
    this.startY = y;

    this.centerX = centerX;
    this.centerY = centerY;

    this.radius = radius;

    this.angle = angle;
    this.speed = speed;
    this.direction = direction;
    if (pauseTime) {
      this.targetAngle = angle + stepAngle;
      this.pauseTime = pauseTime;
      this.stepAngle = stepAngle;
    }
    

    this.setImmovable(true);
  }

  update(time: number, delta: number) {
    const dt = delta / 1000;

    if (this.rotating) {
      this.angle += this.speed * this.direction * dt;

      const reached =
        this.direction > 0
          ? this.angle >= this.targetAngle
          : this.angle <= this.targetAngle;

      if (reached) {
        this.angle = this.targetAngle;
        this.rotating = false;     // ⏸ стоп
        this.pauseTimer = 0;
      }
    } else {
      this.pauseTimer += dt;

      if (this.pauseTimer >= this.pauseTime) {
        this.rotating = true;      // 🔄 снова крутимся
        this.targetAngle = this.angle + this.stepAngle * this.direction;
      }
    }

    const rad = Phaser.Math.DegToRad(this.angle);
    this.x = this.centerX + Math.cos(rad) * this.radius;
    this.y = this.centerY + Math.sin(rad) * this.radius;
    this.label.setPosition(this.x, this.y);
  }
}

