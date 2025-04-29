function indiceMaximo(arr: number[]): number {
    let maxNumber = arr[0];
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNumber) {
            maxIndex = i;
            maxNumber = arr[i];
        }
    }    
    return maxIndex;
}

console.log(indiceMaximo([1, 2, 3, 4, 5])); // 4
console.log(indiceMaximo([51, 14, 23, 42, 10])); // 0
console.log(indiceMaximo([34, 31, 42, 4, 25])); // 2
