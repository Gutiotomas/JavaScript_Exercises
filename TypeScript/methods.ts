//Todos estos métodos no modifican el array original (a menos que tú lo hagas), y devuelven un nuevo array o valor.

const numeros = [1, 2, 3, 4];

const alCuadrado = numeros.map(num => num * num);
console.log(alCuadrado); // [1, 4, 9, 16]
// Transforma cada valor, devolviendo un nuevo array.


const edades = [12, 18, 25, 30];

const mayoresDeEdad = edades.filter(edad => edad >= 18);
console.log(mayoresDeEdad); // [18, 25, 30]
//Devuelve solo los elementos que cumplan la condición.


const valores = [1, 2, 3, 4];

const suma = valores.reduce((acum, valor) => acum + valor, 0);
console.log(suma); // 10
//Reduce el array a un solo valor (suma, multiplicación, concatenación, etc.).


const nombres = ["Ana", "Luis", "Tomás", "Laura"];

const encontrado = nombres.find(nombre => nombre.startsWith("T"));
console.log(encontrado); // "Tomás"
//Devuelve el primer valor que cumpla con la condición.


const edad = [14, 17, 20, 30];

const indice = edad.findIndex(edad => edad >= 18);
console.log(indice); // 2
//Devuelve el índice del primer valor que cumpla con la condición.


const numeros1 = [3, 6, 8, 9];

const hayPares = numeros1.some(n => n % 2 === 0);
console.log(hayPares); // true
//Devuelve true si al menos un elemento cumple la condición.


const edades1 = [20, 22, 25];

const todosAdultos = edades1.every(edad => edad >= 18);
console.log(todosAdultos); // true
//Devuelve true si todos los elementos cumplen la condición.


const nums = [3, 1, 4, 2];

const ordenados = nums.sort((a, b) => a - b);//¡Importante! sort() modifica el array original.
console.log(ordenados); // [1, 2, 3, 4]
//Ordena el array. Puedes usar una función de comparación para definir el orden (ascendente o descendente).