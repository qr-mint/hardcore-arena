const ememies = [
  { "x": 208, "y": 288, "pattern": 0, "loop": -1 },
    { "x": 208, "y": 272, "pattern": 1, "loop": -1 },
    { "x": 208, "y": 256, "pattern": 2, "loop": -1 },
    { "x": 208, "y": 240, "pattern": 3, "loop": -1 },
    { "x": 208, "y": 224, "pattern": 4, "loop": -1 },
    { "x": 208, "y": 208, "pattern": 5, "loop": -1 },
    { "x": 208, "y": 192, "pattern": 6, "loop": -1 },
    { "x": 208, "y": 176, "pattern": 7, "loop": -1 },
    { "x": 208, "y": 160, "pattern": 8, "loop": -1 },
    { "x": 208, "y": 144, "pattern": 9, "loop": -1 },
    { "x": 224, "y": 144, "pattern": 10, "loop": -1 },
    { "x": 240, "y": 144, "pattern": 11, "loop": -1 },
    { "x": 256, "y": 144, "pattern": 12, "loop": -1 },
    { "x": 272, "y": 144, "pattern": 13, "loop": -1 },
    { "x": 288, "y": 144, "pattern": 14, "loop": -1 },
    { "x": 304, "y": 144, "pattern": 15, "loop": -1 },
    { "x": 320, "y": 144, "pattern": 16, "loop": -1 },
    { "x": 336, "y": 144, "pattern": 17, "loop": -1 },
    { "x": 352, "y": 144, "pattern": 18, "loop": -1 },

    { "x": 288, "y": 336, "pattern": 19, "loop": -1 },
    { "x": 304, "y": 336, "pattern": 20, "loop": -1 },
    { "x": 320, "y": 336, "pattern": 21, "loop": -1 },
    { "x": 336, "y": 336, "pattern": 22, "loop": -1 },
    { "x": 352, "y": 336, "pattern": 23, "loop": -1 },
    { "x": 368, "y": 336, "pattern": 24, "loop": -1 },
    { "x": 384, "y": 336, "pattern": 25, "loop": -1 },
    { "x": 400, "y": 336, "pattern": 26, "loop": -1 },
    { "x": 416, "y": 336, "pattern": 27, "loop": -1 },
    { "x": 432, "y": 336, "pattern": 28, "loop": -1 },
    { "x": 432, "y": 320, "pattern": 29, "loop": -1 },
    { "x": 432, "y": 304, "pattern": 30, "loop": -1 },
    { "x": 432, "y": 288, "pattern": 31, "loop": -1 },
    { "x": 432, "y": 272, "pattern": 32, "loop": -1 },
    { "x": 432, "y": 256, "pattern": 33, "loop": -1 },
    { "x": 432, "y": 240, "pattern": 34, "loop": -1 },
    { "x": 432, "y": 224, "pattern": 35, "loop": -1 },
    { "x": 432, "y": 208, "pattern": 36, "loop": -1 },
    { "x": 432, "y": 192, "pattern": 37, "loop": -1 }
];

const listOfPattern = [
[
  {"deltaX":0,"deltaY":-4.5,"rotation":0,"duration":1.125,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-1.5,"rotation":0,"duration":0.375,"wait":0}
],
[
  {"deltaX":0,"deltaY":-4,"rotation":0,"duration":1,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-2,"rotation":0,"duration":0.5,"wait":0}
],
[
  {"deltaX":0,"deltaY":-3.5,"rotation":0,"duration":0.875,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-2.5,"rotation":0,"duration":0.625,"wait":0}
],
[
  {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.75,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.75,"wait":0}
],
[
  {"deltaX":0,"deltaY":-2.5,"rotation":0,"duration":0.625,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-3.5,"rotation":0,"duration":0.875,"wait":0}
],
[
  {"deltaX":0,"deltaY":-2,"rotation":0,"duration":0.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-4,"rotation":0,"duration":1,"wait":0}
],
[
  {"deltaX":0,"deltaY":-1.5,"rotation":0,"duration":0.375,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-4.5,"rotation":0,"duration":1.125,"wait":0}
],
[
  {"deltaX":0,"deltaY":-1,"rotation":0,"duration":0.25,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-5,"rotation":0,"duration":1.25,"wait":0}
],
[
  {"deltaX":0,"deltaY":-0.5,"rotation":0,"duration":0.125,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-5.5,"rotation":0,"duration":1.375,"wait":0}
],
[
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0}
],
[
  {"deltaX":6.5,"deltaY":0,"rotation":0,"duration":1.625,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":0.5,"deltaY":0,"rotation":0,"duration":0.125,"wait":0}
],
[
  {"deltaX":6,"deltaY":0,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":1,"deltaY":0,"rotation":0,"duration":0.25,"wait":0}
],
[
  {"deltaX":5.5,"deltaY":0,"rotation":0,"duration":1.375,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":1.5,"deltaY":0,"rotation":0,"duration":0.375,"wait":0}
],
[
  {"deltaX":5,"deltaY":0,"rotation":0,"duration":1.25,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":2,"deltaY":0,"rotation":0,"duration":0.5,"wait":0}
],
[
  {"deltaX":4.5,"deltaY":0,"rotation":0,"duration":1.125,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":2.5,"deltaY":0,"rotation":0,"duration":0.625,"wait":0}
],
[
  {"deltaX":4,"deltaY":0,"rotation":0,"duration":1,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":3,"deltaY":0,"rotation":0,"duration":0.75,"wait":0}
],
[
  {"deltaX":3.5,"deltaY":0,"rotation":0,"duration":0.875,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":3.5,"deltaY":0,"rotation":0,"duration":0.875,"wait":0}
],
[
  {"deltaX":3,"deltaY":0,"rotation":0,"duration":0.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":4,"deltaY":0,"rotation":0,"duration":1,"wait":0}
],
[
  {"deltaX":2.5,"deltaY":0,"rotation":0,"duration":0.625,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":4.5,"deltaY":0,"rotation":0,"duration":1.125,"wait":0}
],

[
  {"deltaX":-2.5,"deltaY":0,"rotation":0,"duration":0.625,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-4.5,"deltaY":0,"rotation":0,"duration":1.125,"wait":0}
],
[
  {"deltaX":-3,"deltaY":0,"rotation":0,"duration":0.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-4,"deltaY":0,"rotation":0,"duration":1,"wait":0}
],
[
  {"deltaX":-3.5,"deltaY":0,"rotation":0,"duration":0.875,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-3.5,"deltaY":0,"rotation":0,"duration":0.875,"wait":0}
],
[
  {"deltaX":-4,"deltaY":0,"rotation":0,"duration":1,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-3,"deltaY":0,"rotation":0,"duration":0.75,"wait":0}
],
[
  {"deltaX":-4.5,"deltaY":0,"rotation":0,"duration":1.125,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-2.5,"deltaY":0,"rotation":0,"duration":0.625,"wait":0}
],
[
  {"deltaX":-5,"deltaY":0,"rotation":0,"duration":1.25,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-2,"deltaY":0,"rotation":0,"duration":0.5,"wait":0}
],
[
  {"deltaX":-5.5,"deltaY":0,"rotation":0,"duration":1.375,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-1.5,"deltaY":0,"rotation":0,"duration":0.375,"wait":0}
],
[
  {"deltaX":-6,"deltaY":0,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-1,"deltaY":0,"rotation":0,"duration":0.25,"wait":0}
],
[
  {"deltaX":-6.5,"deltaY":0,"rotation":0,"duration":1.625,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":-0.5,"deltaY":0,"rotation":0,"duration":0.125,"wait":0}
],
[
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":6,"rotation":0,"duration":1.5,"wait":0}
],
[
  {"deltaX":0,"deltaY":0.5,"rotation":0,"duration":0.125,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":5.5,"rotation":0,"duration":1.375,"wait":0}
],
[
  {"deltaX":0,"deltaY":1,"rotation":0,"duration":0.25,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":5,"rotation":0,"duration":1.25,"wait":0}
],
[
  {"deltaX":0,"deltaY":1.5,"rotation":0,"duration":0.375,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":4.5,"rotation":0,"duration":1.125,"wait":0}
],
[
  {"deltaX":0,"deltaY":2,"rotation":0,"duration":0.5,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":4,"rotation":0,"duration":1,"wait":0}
],
[
  {"deltaX":0,"deltaY":2.5,"rotation":0,"duration":0.625,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":3.5,"rotation":0,"duration":0.875,"wait":0}
],
[
  {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.75,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.75,"wait":0}
],
[
  {"deltaX":0,"deltaY":3.5,"rotation":0,"duration":0.875,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":2.5,"rotation":0,"duration":0.625,"wait":0}
],
[
  {"deltaX":0,"deltaY":4,"rotation":0,"duration":1,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":2,"rotation":0,"duration":0.5,"wait":0}
],
[
  {"deltaX":0,"deltaY":4.5,"rotation":0,"duration":1.125,"wait":0},
  {"deltaX":-7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":-6,"rotation":0,"duration":1.5,"wait":0},
  {"deltaX":7,"deltaY":0,"rotation":0,"duration":1.75,"wait":0},
  {"deltaX":0,"deltaY":1.5,"rotation":0,"duration":0.375,"wait":0}
]
];

const PIXEL_SIZE = 32; // Каждая клетка 32px
const FPS = 40; // 40 кадров в секунду
const FRAME_TIME = 1000 / FPS; // 25ms на кадр

class EnemySimulation {
    constructor(enemiesData, patterns) {
        this.enemies = enemiesData;
        this.patterns = patterns;
        this.totalTime = 0;
        this.frameCount = 0;
        
        // Инициализируем состояние каждого врага
        this.enemyStates = this.enemies.map((enemy, index) => ({
            x: enemy.x,
            y: enemy.y,
            patternIndex: enemy.pattern,
            stepIndex: 0,
            stepTime: 0,
            totalPatternTime: 0,
            isActive: false,
            spawnDelay: this.calculateSpawnDelay(index)
        }));
        
        // Предварительно вычисляем время полного цикла паттерна для каждого врага
        this.patternTotalTimes = this.patterns.map(pattern => 
            pattern.reduce((total, step) => total + step.duration, 0)
        );
    }
    
    // Вычисляем задержку старта для каждого врага
    // Враги стартуют последовательно с интервалом
    calculateSpawnDelay(enemyIndex) {
        // Первая группа (0-18) стартует с задержкой 0.1 сек друг за другом
        // Вторая группа (19-37) тоже стартует с задержкой
        if (enemyIndex < 19) {
            return enemyIndex * 0.1; // 0, 0.1, 0.2, ... 1.8 секунды
        } else {
            return (enemyIndex - 19) * 0.1; // 0, 0.1, 0.2, ... 1.8 секунды для второй группы
        }
    }
    
    // Обновление одного кадра (25ms)
    updateFrame() {
        this.totalTime += FRAME_TIME / 1000; // в секундах
        this.frameCount++;
        
        // Обновляем каждого врага
        this.enemyStates.forEach((state, enemyIndex) => {
            const enemyData = this.enemies[enemyIndex];
            const pattern = this.patterns[state.patternIndex];
            
            // Проверяем, должен ли враг начать движение
            if (this.totalTime < state.spawnDelay) {
                return; // Еще не время начинать
            }
            
            const localTime = this.totalTime - state.spawnDelay;
            
            // Находим, на каком шаге паттерна должен быть враг в данный момент времени
            this.updateEnemyPosition(state, pattern, localTime, enemyData);
        });
        
        // Каждую секунду выводим позиции первых нескольких врагов для проверки
        if (this.frameCount % 40 === 0) {
            this.printDebugInfo();
        }
    }
    
    updateEnemyPosition(state, pattern, localTime, enemyData) {
        // Вычисляем, сколько полных циклов паттерна прошло
        const patternTotalTime = this.patternTotalTimes[state.patternIndex];
        const cyclesCompleted = Math.floor(localTime / patternTotalTime);
        const timeInCurrentCycle = localTime % patternTotalTime;
        
        // Находим текущий шаг паттерна
        let accumulatedTime = 0;
        let currentStep = 0;
        
        for (let i = 0; i < pattern.length; i++) {
            accumulatedTime += pattern[i].duration;
            if (timeInCurrentCycle <= accumulatedTime) {
                currentStep = i;
                break;
            }
        }
        
        // Вычисляем прогресс текущего шага
        const stepStartTime = accumulatedTime - pattern[currentStep].duration;
        const stepProgress = (timeInCurrentCycle - stepStartTime) / pattern[currentStep].duration;
        
        // Сохраняем состояние
        state.stepIndex = currentStep;
        state.stepTime = timeInCurrentCycle;
        state.totalPatternTime = localTime;
        
        // Вычисляем позицию с начала движения (не от изначальной позиции врага!)
        let totalDeltaX = 0;
        let totalDeltaY = 0;
        
        // Суммируем все пройденные дельты за текущий цикл
        for (let i = 0; i <= currentStep; i++) {
            if (i < currentStep) {
                // Полностью пройденные шаги
                totalDeltaX += pattern[i].deltaX;
                totalDeltaY += pattern[i].deltaY;
            } else {
                // Текущий шаг (частично пройденный)
                totalDeltaX += pattern[i].deltaX * stepProgress;
                totalDeltaY += pattern[i].deltaY * stepProgress;
            }
        }
        
        // Учитываем все предыдущие циклы
        totalDeltaX += cyclesCompleted * pattern.reduce((sum, step) => sum + step.deltaX, 0);
        totalDeltaY += cyclesCompleted * pattern.reduce((sum, step) => sum + step.deltaY, 0);
        
        // Вычисляем абсолютную позицию
        state.x = enemyData.x + totalDeltaX * PIXEL_SIZE;
        state.y = enemyData.y + totalDeltaY * PIXEL_SIZE;
    }
    
    printDebugInfo() {
        console.log(`=== Time: ${this.totalTime.toFixed(2)}s ===`);
        console.log("First group (0-4):");
        for (let i = 0; i < 5; i++) {
            const state = this.enemyStates[i];
            console.log(`  Enemy ${i}: (${state.x.toFixed(1)}, ${state.y.toFixed(1)})`);
        }
        console.log("Second group (19-23):");
        for (let i = 19; i < 24; i++) {
            const state = this.enemyStates[i];
            console.log(`  Enemy ${i}: (${state.x.toFixed(1)}, ${state.y.toFixed(1)})`);
        }
        console.log("");
    }
    
    // Получить все позиции врагов для отрисовки
    getEnemyPositions() {
        return this.enemyStates.map(state => ({
            x: state.x,
            y: state.y
        }));
    }
}

// Тест модели
function runSimulation() {
    const simulation = new EnemySimulation(ememies, listOfPattern);
    
    // Запускаем симуляцию на 10 секунд
    const interval = setInterval(() => {
        simulation.updateFrame();
        
        // Останавливаем через 10 секунд
        if (simulation.totalTime >= 10) {
            clearInterval(interval);
            console.log("=== FINAL POSITIONS ===");
            simulation.enemyStates.forEach((state, i) => {
                console.log(`Enemy ${i}: (${state.x.toFixed(1)}, ${state.y.toFixed(1)})`);
            });
        }
    }, FRAME_TIME);
}

// Визуализация в консоли (упрощенная)
function visualizePattern(patternIndex) {
    const pattern = listOfPattern[patternIndex];
    console.log(`\nPattern ${patternIndex}:`);
    
    let totalTime = 0;
    let totalX = 0;
    let totalY = 0;
    
    pattern.forEach((step, i) => {
        totalTime += step.duration;
        totalX += step.deltaX;
        totalY += step.deltaY;
        
        console.log(`  Step ${i}: dx=${step.deltaX}, dy=${step.deltaY}, t=${step.duration}s ` +
                   `-> Total: (${totalX}, ${totalY}) after ${totalTime}s`);
    });
    
    console.log(`  Full cycle: (${totalX}, ${totalY}) in ${totalTime}s`);
    
    // Вычисляем скорость (пикселей в секунду)
    const distance = Math.sqrt(totalX * totalX + totalY * totalY) * PIXEL_SIZE;
    const speed = distance / totalTime;
    console.log(`  Speed: ${speed.toFixed(1)} pixels/sec`);
}

// Анализ всех паттернов
console.log("=== PATTERN ANALYSIS ===");
for (let i = 0; i < 10; i++) {
    visualizePattern(i);
}

// Запускаем симуляцию
console.log("\n=== STARTING SIMULATION ===");
runSimulation();