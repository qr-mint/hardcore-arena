var walls = [
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1],
        [1,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1],
        [1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1],
        [1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
    ]
];

// Переворот по вертикали (вверх ногами)
// Полный процесс уровня: переворот + зеркалирование
function rotate90(map) {
  const rows = map.length;
  const cols = map[0].length;
  const result = [];

  for (let c = 0; c < cols; c++) {
    const newRow = [];
    for (let r = rows - 1; r >= 0; r--) {
      newRow.push(map[r][c]);
    }
    result.push(newRow);
  }

  return result;
}

function processLevel(matrix) {
  const array = rotate90(matrix);
 
  // Зеркалирование по горизонтали
  const flippedHorizontal = array.map(row => row.slice().reverse());

  return flippedHorizontal;
}

// Вывод в консоль красивым форматом
function printMatrix(label, matrix) {
  console.log(`=== ${label} ===`);
  console.log("[");
  matrix.forEach(row => {
    console.log("  [" + row.join(", ") + "],");
  });
  console.log("]");
  console.log("\n");
}

// Пример использования — ВСТАВЛЯЕШЬ сюда свой уровень
const processed = processLevel(walls[0]);

// Выводим
printMatrix("Processed Level", processed);
// centerX, centerY, radius, startAngle, endAngle, speed, stage, angle, enemyType

const enemies = [
	{ x: 220, y: 140 },
	{ x: 220, y: 260 },
	{ x: 220, y: 380 },
	{ x: 460, y: 140 },
	{ x: 460, y: 220 },
	{ x: 340, y: 180 },
	{ x: 580, y: 460 }
];

console.log("ememies", enemies.map((enemy) => {
  // const x = enemy.radius * Math.cos(enemy.startAngle * (Math.PI / 180)) + enemy.x;
	// const y = enemy.radius * Math.sin(enemy.startAngle * (Math.PI / 180)) + enemy.y;
  // return ({ x: x / 40 * 32,  y: y  / 40 * 32 });
  console.log(`{ x: ${enemy.x / 40 * 32},  y: ${enemy.y  / 40 * 32} },`)
  return ({ x: enemy.x / 40 * 32,  y: enemy.y  / 40 * 32 });
}));

const points = [
		{ x: 8, y: 4 },
		{ x: 11,y:  4 },
		{ x: 11,y:  10 },
		{ x: 8, y: 10 },
		{ x: 5, y: 6 },
		{ x: 5, y: 10 },
		{ x: 14,y:  11 },
		{ x: 14,y:  4 },
		{ x: 13,y:  9 },
		{ x: 10,y:  6 }
  ];

points.forEach(point => {
  console.log(`{ "x": ${point.x * 32 + 32 / 2}, "y": ${point.y * 32 + 32 / 2}  },`)
});

console.log("points", points.map(point => ({ x: point.x * 32 + 32 / 2, y: point.y * 32 + 32 / 2  })))

const pattern = [
		[
			[220, 340, 140, 140, 3, 0],
			[340, 340, 140, 260, 0, 3],
			[340, 220, 260, 260, 3, 0],
			[220, 220, 260, 140, 0, 3]
		],
		[
			[220, 340, 260, 260, 3, 0],
			[340, 340, 260, 380, 0, 3],
			[340, 220, 380, 380, 3, 0],
			[220, 220, 380, 260, 0, 3]
		],
		[
			[220, 340, 380, 380, 3, 0],
			[340, 340, 380, 460, 0, 3],
			[340, 220, 460, 460, 3, 0],
			[220, 220, 460, 380, 0, 3]
		],
		[
			[460, 580, 140, 140, 3, 0],
			[580, 580, 140, 220, 0, 3],
			[580, 460, 220, 220, 3, 0],
			[460, 460, 220, 140, 0, 3]
		],
		[
			[460, 580, 220, 220, 3, 0],
			[580, 580, 220, 460, 0, 3],
			[580, 460, 460, 460, 3, 0],
			[460, 460, 460, 220, 0, 3]
		],
		[
			[340, 460, 180, 180, 3, 0],
			[460, 460, 180, 420, 0, 3],
			[460, 340, 420, 420, 3, 0],
			[340, 340, 420, 180, 0, 3]
		],
		[
			[580, 580, 460, 220, 0, 3],
			[580, 460, 220, 220, 3, 0],
			[460, 460, 220, 460, 0, 3],
			[460, 580, 460, 460, 3, 0]
		]
]

const newPattern = [];

for (const move of pattern) {
  const steps = move.map(p => {
    const deltaX = (p[1] - p[0]) / 40;
    const deltaY = (p[3] - p[2]) / 40;
    const duration = Math.abs((deltaX === 0 ? deltaY : deltaX) * 0.33);

    return {
      deltaX,
      deltaY,
      rotation: 0,
      duration: Number(duration.toFixed(2)),
      wait: 0
    };
  });
  newPattern.push(steps);
}
console.log("pattern");
for (const steps of newPattern) {
  const line = steps.map(s => JSON.stringify(s)).join(",\n  ");
  console.log(`[\n  ${line}\n],`);
}
