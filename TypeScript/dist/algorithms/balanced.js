"use strict";
function validarParentesis(cadena) {
    const pila = [];
    for (const char of cadena) {
        if (char === '(') {
            pila.push(char);
        }
        else if (char === ')') {
            if (pila.length === 0) {
                return false;
            }
            pila.pop();
        }
    }
    return pila.length === 0;
}
console.log(validarParentesis("(())")); // true
console.log(validarParentesis("(()")); // false
console.log(validarParentesis("())(")); // false
console.log(validarParentesis("")); // true
console.log(validarParentesis("()()()")); // true
