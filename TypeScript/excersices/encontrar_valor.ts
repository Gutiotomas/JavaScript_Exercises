function buscarElemento(arr: number[], valor: number): number {
  let value = valor;
  let indexValue = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      indexValue = i;
      break;
    } else {
      indexValue = -1;
    }
  }
  return indexValue;
}

console.log(buscarElemento([1, 2, 3, 4, 5], 3)); // 2
console.log(buscarElemento([1, 2, 3, 4, 5], 6)); // -1
console.log(buscarElemento([1, 2, 3, 4, 5], 1)); // 0
console.log(buscarElemento([1, 2, 3, 4, 5], 5)); // 4
