function espiralInvertida(matriz: number[][]): number[] {
  const res: number[] = [];
  const n = matriz.length;
  const m = matriz[0].length;

  let dirs = [
    [0, 1], // → derecha
    [1, 0], // ↓ abajo
    [0, -1], // ← izquierda
    [-1, 0], // ↑ arriba
  ];

  let x = Math.floor(n / 2);
  let y = Math.floor(m / 2);
  if (x % 2 === 0) x--;
  if (y % 2 === 0) y--;
  res.push(matriz[x][y]);

  let pasos = 1;

  while (res.length < n * m) {
    for (let d = 0; d < 4; d++) {
      const [dx, dy] = dirs[d];
      for (let i = 0; i < pasos; i++) {
        x += dx;
        y += dy;
        if (x >= 0 && x < n && y >= 0 && y < m) {
          res.push(matriz[x][y]);
        }
      }
      // Aumentar pasos cada dos direcciones (después de izquierda y arriba)
      if (d % 2 === 1) pasos++;
    }
  }

  return res;
}

const m3 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(espiralInvertida(m3)); // Output: [5, 4, 7, 8, 9, 6, 3, 2, 1]

const m4 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [23, 22, 21, 20],
];
console.log(espiralInvertida(m4)); // Output: [6, 7, 11, 10, 9, 5, 1, 2, 3, 4, 8, 12, 20, 21, 22, 23]

const m5 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25],
];
console.log(espiralInvertida(m5)); // Output: [13, 14, 19, 18, 17, 12, 7, 8, 9, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 1, 2, 3, 4, 5]
