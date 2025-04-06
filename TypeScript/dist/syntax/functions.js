"use strict";
function saludar(nombre) {
    return `Hola, ${nombre}`;
}
const saludo = saludar("Tomás");
function multiplicar(a, b) {
    return b ? a * b : a; //condición ? valor_si_true : valor_si_false;
    // si b es undefined, se multiplica solo a
    // si b tiene un valor, se multiplica a por b
}
