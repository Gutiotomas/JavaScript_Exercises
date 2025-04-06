"use strict";
const person1 = {
    nombre: "Tomás",
    edad: 22,
    carrera: "Ingeniería",
};
for (const clave in person1) {
    console.log(clave, person1[clave]);
}
