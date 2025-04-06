"use strict";
class CuentaBancaria {
    constructor(inicial) {
        this._saldo = inicial;
    }
    get saldo() {
        return this._saldo;
    }
    set saldo(nuevoSaldo) {
        if (nuevoSaldo < 0) {
            console.log("No se permite saldo negativo.");
            return;
        }
        this._saldo = nuevoSaldo;
    }
}
const cuenta = new CuentaBancaria(1000);
console.log(cuenta.saldo); // 1000
cuenta.saldo = 1500;
console.log(cuenta.saldo); // 1500
cuenta.saldo = -200; // "No se permite saldo negativo."
console.log(cuenta.saldo); // 1500
