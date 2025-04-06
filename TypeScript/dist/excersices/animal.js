"use strict";
class Animal {
    constructor(nombreAnimal) {
        this.nombreAnimal = nombreAnimal;
    }
    hacerSonido() {
        console.log(`El animal ${this.nombreAnimal}hace un sonido`);
    }
}
class Perro extends Animal {
    hacerSonido() {
        console.log(`El perro ${this.nombreAnimal} ladra`);
    }
}
class Gato extends Animal {
    hacerSonido() {
        console.log(`El gato ${this.nombreAnimal} maulla`);
    }
}
const miPerro = new Perro("Firulais");
const miGato = new Gato("Michi");
miPerro.hacerSonido();
miGato.hacerSonido();
