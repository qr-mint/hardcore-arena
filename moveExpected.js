const level = require("./src/game/map/test.json");

// for (const enemy of level.enemies) {
//   let expectedX = enemy.x;
//   let expectedY = enemy.y;
//   const pattern = level.pattern[enemy.pattern];
//   for (let step of pattern) {
//     expectedX += step.deltaX;
//     expectedY += step.deltaY;
//   }
//   console.log(enemy.x + " = " + expectedX, enemy.y + " = " + expectedY);
// }

const CELL_DURATION = 0.4; // секунда на 1 delta

// for (const enemy of level.enemies) {
// const pattern = level.pattern[enemy.pattern];
//   for (const step of pattern) {
//     const distance = Math.sqrt(step.deltaX ** 2 + step.deltaY ** 2);
//     const expectedDuration = distance * CELL_DURATION;
//     const actualDuration = parseFloat(step.duration);
//     console.log(
//       `Step: Δ(${step.deltaX},${step.deltaY})`,
//       `expectedDuration=${expectedDuration.toFixed(2)}s`,
//       `actualDuration=${actualDuration}s`,
//       `drift=${(actualDuration - expectedDuration).toFixed(2)}s`
//     );
//   }

//   let totalExpected = 0;
//   let totalActual = 0;
//   for (const step of pattern) {
//     const distance = Math.sqrt(step.deltaX ** 2 + step.deltaY ** 2);
//     totalExpected += distance * CELL_DURATION;
//     totalActual += parseFloat(step.duration);
//   }
//   console.log(`Pattern total: expected ${totalExpected.toFixed(2)}s, actual ${totalActual.toFixed(2)}s, diff ${(totalActual - totalExpected).toFixed(2)}s`);
// }


function checkEnemies(level) {
  const enemies = level.enemies;
  const patterns = level.pattern;

  const stepsCount = Math.max(...patterns.map(p => p.length));

  for (let stepIdx = 0; stepIdx < stepsCount; stepIdx++) {
    // Вычисляем позиции всех врагов на этом шаге
    const positions = enemies.map(enemy => {
      const pattern = patterns[enemy.pattern];
      const step = pattern[stepIdx % pattern.length]; // циклически
      if (!enemy._pos) enemy._pos = { x: enemy.x, y: enemy.y };
      enemy._pos.x += step.deltaX;
      enemy._pos.y += step.deltaY;
      return { x: enemy._pos.x, y: enemy._pos.y, id: enemy.id || enemy.pattern };
    });

    // Проверяем расстояния между соседними врагами
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[i].x - positions[j].x;
        const dy = positions[i].y - positions[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 1e-3) { // порог для слипания
          console.warn(`Enemies ${positions[i].id} и ${positions[j].id} слипаются на шаге ${stepIdx}`);
        }
      }
    }
  }

  // Проверка drift после полного паттерна
  enemies.forEach(enemy => {
    const pattern = patterns[enemy.pattern];
    let totalDeltaX = 0;
    let totalDeltaY = 0;
    let totalExpected = 0;
    let totalActual = 0;
    pattern.forEach(step => {
      const distance = Math.sqrt(step.deltaX ** 2 + step.deltaY ** 2);
      totalDeltaX += step.deltaX;
      totalDeltaY += step.deltaY;
      totalExpected += distance * CELL_DURATION;
      totalActual += parseFloat(step.duration);
    });
    const drift = Math.sqrt(totalDeltaX ** 2 + totalDeltaY ** 2);
    console.log(
      `Enemy ${enemy.id || enemy.pattern}: drift=${drift.toFixed(2)}, expectedDuration=${totalExpected.toFixed(2)}s, actualDuration=${totalActual.toFixed(2)}s`
    );
  });
}

// Использование
// checkEnemies(level);

const pattern = [
[
      {"deltaX":12,"deltaY":0,"rotation":0,"duration":0.36,"wait":0},
      {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.09,"wait":0},
      {"deltaX":-12,"deltaY":0,"rotation":0,"duration":0.36,"wait":0},
      {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.09,"wait":0}
    ],
    [
      {"deltaX":-12,"deltaY":0,"rotation":0,"duration":0.36,"wait":0},
      {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.09,"wait":0},
      {"deltaX":12,"deltaY":0,"rotation":0,"duration":0.36,"wait":0},
      {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.09,"wait":0}
    ],
];
let newPattern = [];
for (const move of pattern) {
  const steps = move.map(p => {

    return {
      deltaX: p.deltaX,
      deltaY: p.deltaY,
      rotation: p.rotation,
      duration: p.deltaX !== 0 ? Math.abs(p.deltaX * 0.18) : Math.abs(p.deltaY * 0.18),
      wait: p.wait
    };
  });
  newPattern.push(steps);
}
console.log("pattern");
for (const steps of newPattern) {
  const line = steps.map(s => JSON.stringify(s)).join(",\n  ");
  console.log(`[\n  ${line}\n],`);
}

console.log(newPattern.length);