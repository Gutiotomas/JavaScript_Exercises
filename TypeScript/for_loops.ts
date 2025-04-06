let my_numbers:number[] = [1, 2, 3, 4, 5];
for (let i = 0; i in my_numbers; i++) { //for (inicialización; condición; incremento)
    console.log(my_numbers[i]);
}

let frutas: string[] = ["manzana", "banana", "pera"]; // for ..of: Recomendado para recorrer arrays directamente por sus valores:

for (const fruta of frutas) {
    console.log(fruta);
}


const person = {
    nombre: "Tomás",
    edad: 22,
    activo: true
};

for (const clave in person) { //for ..in: Recorre las claves (índices o propiedades) de un objeto o array. Úsalo para objetos.
    console.log(clave, person[clave as keyof typeof person]); 
// typeof persona → toma el tipo del objeto persona.

// keyof typeof persona → obtiene las claves de ese tipo, o sea: "nombre" | "edad" | "activo".

// clave as keyof typeof persona → le decimos a TypeScript:

// “Confía en mí, esta clave sí es una de las del objeto persona”.
}
