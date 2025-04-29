function findIndices(arr: number[], target: number): number[] {
  let index1 = -1;
  let index2 = -1;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        index1 = i;
        index2 = j;
        return [index1, index2];
      }
    }
  }

  return [index1, index2];
}

function twoSumWithoutMap(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

function twoSum(nums: number[], target: number): number[] {
  const mapa = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const complemento = target - nums[i];
    if (mapa.has(complemento)) {
      return [mapa.get(complemento)!, i];
    }
    mapa.set(nums[i], i);
  }

  return [];
}

const arr = [1, 2, 3, 4, 5];
const target = 6;
const result = findIndices(arr, target);
const result2 = twoSum(arr, target);
const result3 = twoSumWithoutMap(arr, target);
