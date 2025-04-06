"use strict";
class Figura {
    mostrarNombre() {
        console.log(`Soy una figura`);
    }
}
// No se puede instanciar directamente: new Figura() da error.
// Fuerza a las subclases a implementar métodos importantes.
// Puedes reutilizar lógica común en métodos concretos (como mostrarNombre()).
class Cuadrado extends Figura {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
    mostrarNombre() {
        console.log(`Soy un cuadrado`);
    }
}
class Circulo extends Figura {
    constructor(radio) {
        super();
        this.radio = radio;
    }
    calcularArea() {
        return Math.PI * this.radio * this.radio;
    }
    mostrarNombre() {
        console.log(`Soy un círculo`);
    }
}
const figuras = [
    new Cuadrado(4),
    new Circulo(3)
];
for (const figura of figuras) {
    figura.mostrarNombre();
    console.log("Área:", figura.calcularArea());
}
