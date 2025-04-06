"use strict";
const tarea1 = {
    titulo: "Aprender TypeScript",
    estado: "pendiente"
};
function sumarPar(numeros) {
    return numeros[0] + numeros[1];
}
console.log(sumarPar([1, 2]));
const usuarios = [
    {
        id: 23452,
        nombre: "Juan",
        activo: true
    },
    {
        id: "ABe12fG",
        nombre: "Pedro",
        activo: false
    },
    {
        id: 44232,
        nombre: "Tomás",
        activo: true
    }
];
console.log(usuarios);
function esAdmin(empleado) {
    if (empleado.rol === "admin") {
        return true;
    }
    else {
        return false;
    }
}
console.log(esAdmin({ nombre: "Juan", rol: "admin" })); // true
console.log(esAdmin({ nombre: "Juan", rol: "user" })); // false
