const recorrerMatriz = (matriz: number[][]): void => {
  let valor = 0;
  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      valor = matriz[i][j];
      console.log(i, j);
      console.log(valor);
    }
  }
};

const m1 = [
  [2, 4, 6],
  [1, 3],
  [7, 8, 9, 10],
];
recorrerMatriz(m1);
const m2 = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 0, 1],
];
recorrerMatriz(m2);
