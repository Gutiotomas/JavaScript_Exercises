function buscarElemento(arr: number[], valor: number): number {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      return i;
    }
  }
  return -1;
}

console.log(buscarElemento([1, 2, 3, 4, 5], 3)); // 2
console.log(buscarElemento([1, 2, 3, 4, 5], 6)); // -1
console.log(buscarElemento([1, 2, 3, 4, 5], 1)); // 0
console.log(buscarElemento([1, 2, 3, 4, 5], 5)); // 4
console.log(buscarElemento([1, 5, 5, 4, 5], 5)); // 1 Only brings the first
