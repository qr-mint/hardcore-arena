export class ReverseCircularEnemy extends Phaser.Physics.Arcade.Sprite {
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

  endAngle: number;
  startAngle: number;

  label: Phaser.GameObjects.Text;

  constructor(
    scene: Phaser.Scene,
    x: number, y: number,
    centerX: number, centerY: number,
    radius: number, angle: number, speed: number,
    direction: number,
    index: number = 0, startTime: number,
    endAngle: number
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
    this.startAngle = angle;
    this.speed = speed;
    this.direction = direction;
    this.endAngle = endAngle;
    

    this.setImmovable(true);
  }

  update(time: number, delta: number) {
      // увеличиваем угол
    this.angle += this.speed * this.direction * (delta / 1000);
    console.log(this.direction > 0, this.angle, this.endAngle, this.direction < 0 && this.angle <= 0);
    // реверс при достижении endAngle или startAngle
    if (this.direction > 0 && this.angle >= this.endAngle) {
        this.direction *= -1; // смена направления
        this.angle = this.endAngle; // корректировка, чтобы не перепрыгнул
    } else if (this.direction < 0 && this.angle <= this.startAngle) {
        this.direction *= -1;
        this.angle = this.startAngle;
    }

    // пересчет позиции
    this.x = this.centerX + Math.cos(this.angle * (Math.PI / 180)) * this.radius;
    this.y = this.centerY + Math.sin(this.angle * (Math.PI / 180)) * this.radius;

    this.label.setPosition(this.x, this.y);
    
  }
}

