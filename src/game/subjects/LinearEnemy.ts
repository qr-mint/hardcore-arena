interface PatternStep {
  deltaX: number;
  deltaY: number;
  rotation: number;
  duration: number;
  wait: number;
}

const PIXELS_MULTIPLIER = 32;

export class LinearEnemy extends Phaser.Physics.Arcade.Sprite {
  pattern: PatternStep[];
  currentStep: number = 0;
  elapsed: number = 0;
  startTime: number;

  startX: number;
  startY: number;

  originX: number;
  originY: number;

  private elapsedTime: number = 0;
  
  index: number;
  label: Phaser.GameObjects.Text;

  private lastCycleIndex = -1;
  private cycleStartTimestamp = 0;
  

  constructor(scene: Phaser.Scene, x: number, y: number, pattern: PatternStep[] = [], index: number = 0, startTime: number) {
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

    this.pattern = pattern;
    this.startTime = startTime;

    this.index = index;
    this.startX = x;
    this.startY = y;

    this.originX = x;
    this.originY = y;


    this.setImmovable(true);
    //if (this.move !== 1 && this.pattern.length > 0) {
      //this.startTweenPattern();
    //}
  }
  

  // update(time: number, delta: number) {
  //   if (!this.pattern.length) return;

  //   const step = this.pattern[this.currentStep];

  //   // 1. целевая конечная позиция
  //   const targetX = this.startX + step.deltaX * PIXELS_MULTIPLIER;
  //   const targetY = this.startY + step.deltaY * PIXELS_MULTIPLIER;
  //   let reachX, reachY;
   
  //   if (step.duration !== 0) {
  //   // // 2. скорость (пикс/мс)

  //     const speedX = (step.deltaX * PIXELS_MULTIPLIER) / step.duration * 1000;
  //     const speedY = (step.deltaY * PIXELS_MULTIPLIER) / step.duration * 1000;
  //   //   console.log(delta);
  //   // // 4. движение
  //     this.x += speedX * delta;
  //     this.y += speedY * delta;
  //     this.label.setPosition(this.x, this.y);
      
  //   // // 5. приближаемся ли мы к цели?  
  //     reachX = (speedX >= 0 ? this.x >= targetX : this.x <= targetX);
  //     reachY = (speedY >= 0 ? this.y >= targetY : this.y <= targetY);

  //   } else {
  //     this.x += targetX;
  //     this.y += targetY;
  //     reachX = true;
  //     reachY = true;
  //   }
 
  //   // 6. если достигли нужного — фиксируем и идём дальше
  //   if (reachX && reachY) {
  //       this.x = targetX;
  //       this.y = targetY;

  //       // поворот можно тоже сделать по duration
  //       this.rotation += Phaser.Math.DegToRad(step.rotation);
        
  //     this.currentStep = (this.currentStep + 1) % this.pattern.length;

  //     this.startX = this.x;
  //     this.startY = this.y;
  //     this.startTime = Date.now();   
  //   }
  // }

  update(time: number, delta: number) {
    if (!this.pattern.length) return;
    const patternDuration = this.getPatternDuration();
    const currentCycle = Math.floor(this.elapsedTime / patternDuration);

    // Лог нового цикла
    if (currentCycle !== this.lastCycleIndex) {
        const now = performance.now();

        if (this.lastCycleIndex !== -1) {
            const realDuration = (now - this.cycleStartTimestamp) / 1000;

            console.log(
                `Enemy #${this.index + 1} | Cycle ${this.lastCycleIndex} finished`,
                `Real: ${realDuration.toFixed(3)}s`,
                `Expected: ${patternDuration.toFixed(3)}s`,
                `Drift: ${(realDuration - patternDuration).toFixed(4)}s`
            );
        }

        this.cycleStartTimestamp = now;
        this.lastCycleIndex = currentCycle;
    }
    this.elapsedTime += delta / 1000; // конвертируем в секунды
    this.label.setPosition(this.x, this.y);
        
    // Вычисляем позицию на основе времени
    const pos = this.calculatePosition(this.elapsedTime);
    this.x = pos.x;
    this.y = pos.y;
  }
    
    // Математическое вычисление позиции
  private calculatePosition(elapsedTime: number): { x: number, y: number, teleport: boolean } {
    const patternDuration = this.pattern.reduce((acc, step) => {
        return acc + (step.duration);
    }, 0);

    const fullCycles = Math.floor(elapsedTime / patternDuration);
    const timeInCycle = elapsedTime % patternDuration;

    let accumulatedTime = 0;
    let deltaX = 0;
    let deltaY = 0;

    // Полные циклы
    const totalDeltaPerCycle = this.pattern.reduce((sum, step) => {
        return {
            x: sum.x + step.deltaX,
            y: sum.y + step.deltaY
        };
    }, { x: 0, y: 0 });

    deltaX += totalDeltaPerCycle.x * fullCycles;
    deltaY += totalDeltaPerCycle.y * fullCycles;
    let teleport = false;
    // Текущий цикл
    for (const step of this.pattern) {
        // Телепорт — мгновенно
        if (step.duration === 0) {
            deltaX += step.deltaX;
            deltaY += step.deltaY;
            teleport = true;
            continue;
        }

        // Плавное движение
        if (timeInCycle <= accumulatedTime + step.duration) {
            const progress = (timeInCycle - accumulatedTime) / step.duration;
            deltaX += step.deltaX * Phaser.Math.Clamp(progress, 0, 1);
            deltaY += step.deltaY * Phaser.Math.Clamp(progress, 0, 1);
            break;
        } else {
            deltaX += step.deltaX;
            deltaY += step.deltaY;
            accumulatedTime += step.duration;
        }
    }

    return {
      x: this.startX + deltaX * PIXELS_MULTIPLIER,
      y: this.startY + deltaY * PIXELS_MULTIPLIER,
      teleport
    };
  }

  private getPatternDuration(): number {
    return this.pattern.reduce((acc, step) => {
        return acc + (step.duration === 0 ? 0 : step.duration);
    }, 0);
  }
}