function isArraySorted(arr: number[]): boolean {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false
    }
  }
  return true
}

const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [2, 5, 3, 1, 4];
console.log(isArraySorted(sortedArray));
console.log(isArraySorted(unsortedArray));