const allIndexes = (arr: number[], valor: number): number[] => {
  let indexes = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === valor) {
      indexes.push(i);
    }
  }
  return indexes;
};

console.log(allIndexes([1, 3, 7, 8, 7, 5, 7], 7)); // Output: [2, 4, 6]
console.log(allIndexes([1, 3, 4, 3, 3, 5, 7], 3)); // Output: [1, 3, 4]
console.log(allIndexes([5, 5, 7, 8, 7, 5, 7], 5)); // Output: [0, 1, 5]
console.log(allIndexes([1, 3, 7, 8, 7, 5, 7], 9)); // Output: [2, 4, 6]
