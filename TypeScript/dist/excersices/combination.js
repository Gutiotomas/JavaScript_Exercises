"use strict";
const personas = [
    { nombre: "Ana", edad: 17 },
    { nombre: "Luis", edad: 20 },
    { nombre: "Tomás", edad: 16 },
    { nombre: "Laura", edad: 22 }
];
const mayor = personas.filter((persona) => persona.edad >= 18);
console.log(mayor);
const name1 = personas.map((persona) => persona.nombre);
console.log(name1);
const new_arr = [...personas]; // Create a shallow copy of personas
const sorted = new_arr.sort((a, b) => a.edad - b.edad);
const first = sorted.find((new_arr) => new_arr.edad < 18);
if (first === undefined) {
    console.log("No hay menores de edad");
}
else {
    const name2 = first.nombre;
    console.log(name2);
}
console.log(personas, sorted);
const masJoven = personas
    .filter(p => p.edad >= 18) // Mayores de edad
    .reduce((joven, actual) => actual.edad < joven.edad ? actual : joven); // Más joven
console.log(masJoven.nombre);
