"use strict";
const ed = [21, 18, 30, 25];
const menorEdad = ed.some(edad => edad < 18);
console.log(menorEdad);
const todosMayores = ed.every(edad => edad >= 18);
console.log(todosMayores);
