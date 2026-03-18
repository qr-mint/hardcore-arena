//https://api.dev.qr-mint.net/game/levels?moderationKey=c225d2dca05a4f3a84663c596a498397

import axios from "axios";
// import fs from 'fs';
// import level from "./src/game/map/test.json";

const loadMap = async () => {
  const response = await axios.post('https://api.dev.qr-mint.net/game/levels?moderationKey=0e2a87ea8e404f128997310832e5c801', {
    "author_name": "StephenCritoph",
    "name": "LEVEL 30",
    "difficulty_label": "easy",
    "difficulty": 5,
    company_id: 1,
    data: {
  "grid": [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  "checkpoints": [
		{ "x": 32, "y": 352, "cols": 2, "rows": 2, "type": "start", "finish": true }
  ],
  "points": [
  { "x": 48, "y": 80 }, { "x": 64, "y": 80 }, { "x": 80, "y": 80 },
  { "x": 48, "y": 96 }, { "x": 64, "y": 96 }, { "x": 80, "y": 96 },
  { "x": 48, "y": 112 },  { "x": 64, "y": 112 },  { "x": 80, "y": 112 },
  { "x": 560, "y": 80 },  { "x": 576, "y": 80 },  { "x": 592, "y": 80 },
  { "x": 560, "y": 96 },  { "x": 576, "y": 96 },  { "x": 592, "y": 96 },
  { "x": 560, "y": 112 }, { "x": 576, "y": 112 }, { "x": 592, "y": 112 },
  { "x": 560, "y": 304 }, { "x": 576, "y": 304 }, { "x": 592, "y": 304 },
  { "x": 560, "y": 320 }, { "x": 576, "y": 320 }, { "x": 592, "y": 320 },
  { "x": 560, "y": 336 }, { "x": 576, "y": 336 }, { "x": 592, "y": 336 },
  { "x": 176, "y": 208 }, { "x": 192, "y": 208 }, { "x": 208, "y": 208 },
  { "x": 224, "y": 208 }, { "x": 240, "y": 208 }, { "x": 256, "y": 208 },
  { "x": 272, "y": 208 }, { "x": 288, "y": 208 }, { "x": 304, "y": 208 },
  { "x": 320, "y": 208 }, { "x": 336, "y": 208 }, { "x": 352, "y": 208 },
  { "x": 368, "y": 208 }, { "x": 384, "y": 208 }, { "x": 400, "y": 208 },
  { "x": 416, "y": 208 }, { "x": 432, "y": 208 }, { "x": 448, "y": 208 },
  { "x": 464, "y": 208 }
  ],
  "enemies": [
    { "x": 48,  "y": 72, "pattern": 0, "loop": -1 },
    { "x": 80,  "y": 344, "pattern": 1, "loop": -1 },
    { "x": 112, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 144, "y": 344, "pattern": 1, "loop": -1 },
    { "x": 176, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 208, "y": 344, "pattern": 1, "loop": -1 }, 
    { "x": 240, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 272, "y": 344, "pattern": 1, "loop": -1 }, 
    { "x": 304, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 336, "y": 344, "pattern": 1, "loop": -1 },
    { "x": 368, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 400, "y": 344, "pattern": 1, "loop": -1},
    { "x": 432, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 464, "y": 344, "pattern": 1, "loop": -1 },
    { "x": 496, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 528, "y": 344, "pattern": 1, "loop": -1 },
    { "x": 560, "y": 72, "pattern": 0, "loop": -1 },
    { "x": 592, "y": 344, "pattern": 1, "loop": -1 },
    { "x": 48, "y": 80, "pattern": 2, "loop": -1 },
    { "x": 64, "y": 80, "pattern": 2, "loop": -1 },
    { "x": 80, "y": 80, "pattern": 2, "loop": -1 },
    { "x": 48, "y": 96, "pattern": 2, "loop": -1 },
    { "x": 64, "y": 96, "pattern": 2, "loop": -1 },
    { "x": 80, "y": 96, "pattern": 2, "loop": -1 },
    { "x": 48, "y": 112, "pattern": 2, "loop": -1 },
    { "x": 64, "y": 112, "pattern": 2, "loop": -1 },
    { "x": 80, "y": 112, "pattern": 2, "loop": -1 },
    { "x": 560, "y": 304, "pattern": 3, "loop": -1 },
    { "x": 576, "y": 304, "pattern": 3, "loop": -1 },
    { "x": 592, "y": 304, "pattern": 3, "loop": -1 },
    { "x": 560, "y": 320, "pattern": 3, "loop": -1 },
    { "x": 576, "y": 320, "pattern": 3, "loop": -1 },
    { "x": 592, "y": 320, "pattern": 3, "loop": -1 },
    { "x": 560, "y": 336, "pattern": 3, "loop": -1 },
    { "x": 576, "y": 336, "pattern": 3, "loop": -1 },
    { "x": 592, "y": 336, "pattern": 3, "loop": -1 },
    { "x": 112, "y": 144, "pattern": 4, "loop": -1 },
    { "x": 128, "y": 144, "pattern": 4, "loop": -1 },
    { "x": 144, "y": 144, "pattern": 4, "loop": -1 },
    { "x": 112, "y": 160, "pattern": 4, "loop": -1 },
    { "x": 128, "y": 160, "pattern": 4, "loop": -1 },
    { "x": 144, "y": 160, "pattern": 4, "loop": -1 },
    { "x": 112, "y": 176, "pattern": 4, "loop": -1 }, 
    { "x": 128, "y": 176, "pattern": 4, "loop": -1 },
    { "x": 144, "y": 176, "pattern": 4, "loop": -1 },
    { "x": 496, "y": 240, "pattern": 5, "loop": -1 },
    { "x": 512, "y": 240, "pattern": 5, "loop": -1 },
    { "x": 528, "y": 240, "pattern": 5, "loop": -1 },
    { "x": 496, "y": 256, "pattern": 5, "loop": -1 }, 
    { "x": 512, "y": 256, "pattern": 5, "loop": -1 },
    { "x": 528, "y": 256, "pattern": 5, "loop": -1 },
    { "x": 496, "y": 272, "pattern": 5, "loop": -1 },
    { "x": 512, "y": 272, "pattern": 5, "loop": -1 },
    { "x": 528, "y": 272, "pattern": 5, "loop": -1 },

    { "x": 168, "y": 200, "pattern": 6, "loop": -1 },
    { "x": 184, "y": 200, "pattern": 6, "loop": -1 },
    { "x": 168, "y": 216, "pattern": 6, "loop": -1 },
    { "x": 184, "y": 216, "pattern": 6, "loop": -1 }
  ],
  "pattern": [
    [
      { "deltaX": 0, "deltaY": 6.5, "rotation": 0, "duration": 4.25, "wait": 0 },
      { "deltaX": 0, "deltaY": -6.5, "rotation": 0, "duration": 4.25, "wait": 0 }
    ],
    [
      { "deltaX": 0, "deltaY": -6.5, "rotation": 0, "duration": 4.25, "wait": 0 },
      { "deltaX": 0, "deltaY": 6.5, "rotation": 0, "duration": 4.25, "wait": 0 }
    ],
    [
      {"deltaX":16,"deltaY":0,"rotation":0,"duration":0.48,"wait":0},
      {"deltaX":0,"deltaY":7,"rotation":0,"duration":0.21,"wait":0},
      {"deltaX":-16,"deltaY":0,"rotation":0,"duration":0.48,"wait":0},
      {"deltaX":0,"deltaY":-7,"rotation":0,"duration":0.21,"wait":0}
    ],
    [
      {"deltaX":-16,"deltaY":0,"rotation":0,"duration":0.48,"wait":0},
      {"deltaX":0,"deltaY":-7,"rotation":0,"duration":0.21,"wait":0},
      {"deltaX":16,"deltaY":0,"rotation":0,"duration":0.48,"wait":0},
      {"deltaX":0,"deltaY":7,"rotation":0,"duration":0.21,"wait":0}
    ],
    [
      {"deltaX":12,"deltaY":0,"rotation":0,"duration":2.16,"wait":0},
      {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.54,"wait":0},
      {"deltaX":-12,"deltaY":0,"rotation":0,"duration":2.16,"wait":0},
      {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.54,"wait":0}
    ],
    [
      {"deltaX":-12,"deltaY":0,"rotation":0,"duration":2.16,"wait":0},
      {"deltaX":0,"deltaY":-3,"rotation":0,"duration":0.54,"wait":0},
      {"deltaX":12,"deltaY":0,"rotation":0,"duration":2.16,"wait":0},
      {"deltaX":0,"deltaY":3,"rotation":0,"duration":0.54,"wait":0}
    ], 
    [
      { "deltaX": 9, "deltaY": 0, "rotation":0,"duration":1.64,"wait": 0 },
      { "deltaX": -9, "deltaY": 0, "rotation":0,"duration":1.64,"wait": 0 }
    ]
  ]
}
  });
  console.log(response);
  // console.log(level, 'level');
}

  // console.log(level, 'level');
loadMap();