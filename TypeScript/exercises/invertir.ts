function invertirArray(arr: number[]): number[] {
    let invertido = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        invertido[invertido.length] = arr[i];
    }
    return invertido;
}

// Ejemplo de uso
let arrayOriginal = [1, 2, 3, 4, 5];
console.log(arrayOriginal,invertirArray(arrayOriginal)); // [5, 4, 3, 2, 1]