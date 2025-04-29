function diagonalSecundaria(matriz: number[][]): number[] {
  let matrizSecundaria = [];
  for (let i = 0; i < matriz.length; i++) {
    matrizSecundaria.push(matriz[i][matriz.length - 1 - i]);
  }
  return matrizSecundaria;
}

console.log(
  diagonalSecundaria([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [3, 5, 7]
console.log(
  diagonalSecundaria([
    [4, 5, 1],
    [6, 3, 8],
    [22, 18, 59],
  ])
); // [1, 3, 22]
console.log(
  diagonalSecundaria([
    [1, 2],
    [3, 4],
  ])
); // [2, 3]
