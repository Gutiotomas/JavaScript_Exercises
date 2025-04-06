let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

let j = 0;
do {         //Primero ejecuta el bloque, luego evalúa la condición. Se ejecuta al menos una vez.
    console.log(j);
    j++;
} while (j < 5); //También imprime del 0 al 4, pero incluso si la condición fuera falsa desde el inicio, se ejecutaría una vez.
