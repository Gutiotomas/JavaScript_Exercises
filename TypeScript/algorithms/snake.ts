type Coordinate = [number, number];

function traceSnake(grid: string[]): Coordinate[] {
  const height = grid.length;
  const width = grid[0].length;

  // Each entry: [symbol, dx, dy]
  const directions: [string, number, number][] = [
    ["<", 1, 0],
    [">", -1, 0],
    ["^", 0, 1],
    ["v", 0, -1],
  ];

  // Find the head
  let x = 0,
    y = 0;
  for (let row = 0; row < height; row++) {
    for (let col = 0; col < width; col++) {
      if (grid[row][col] === "h") {
        x = col;
        y = row;
        break;
      }
    }
    if (grid[y][x] === "h") break;
  }

  const path: Coordinate[] = [[x, y]];

  // Follow the arrows
  while (true) {
    let found = false;

    for (const [symbol, dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      if (grid[ny]?.[nx] === symbol) {
        x = nx;
        y = ny;
        path.push([x, y]);
        found = true;
        break;
      }
    }

    if (!found) break;
  }

  return path;
}

// Example input
const grid = [" >>h   ", " ^   v ", " ^<<<< "];

console.log(traceSnake(grid));
