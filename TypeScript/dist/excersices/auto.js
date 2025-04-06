"use strict";
class Auto {
    constructor(colorAuto, numeroSerie) {
        this.colorAuto = colorAuto;
        this.numeroSerie = numeroSerie;
        Auto.totalAutos++;
    }
    mostrarInfo() {
        console.log(`Auto [${this.colorAuto.toUpperCase()}] - Serie: ${this.numeroSerie}`);
    }
}
Auto.totalAutos = 0;
const auto1 = new Auto("Azul", "A001");
auto1.mostrarInfo(); // Auto [AZUL] - Serie: A001
const auto2 = new Auto("Negro", "B732");
auto2.mostrarInfo(); // Auto [NEGRO] - Serie: B732
console.log(Auto.totalAutos); // 2
