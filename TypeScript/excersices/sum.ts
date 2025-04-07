const val = [5, 10, 15, 20, 15, 10];

const sumatoria = val.reduce((acc, curr) => acc + curr, 0);
console.log(sumatoria); 

const max = Math.max(...val);
console.log(max);

const noDuplicates = [...new Set(val)];
console.log(noDuplicates);

function inverted(arr: number[]): number[] {
    for (let i = 0; i < arr.length / 2; i++) {
        const temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

const invertedArray = inverted(val);
console.log(invertedArray); 

const add = val.unshift(2);
console.log(val);

const remove = val.pop();
console.log(val);

const splice = val.splice(2, 1);
console.log(val);

const splice1 = val.splice(3, 0, 42);
console.log(val);

const splice3 = val.splice(5, 1, 11);
console.log(val);

const slice = val.slice(1,4);
console.log(slice);