class Animal {
    protected nombreAnimal:string; 
    
    constructor(nombreAnimal:string){
        this.nombreAnimal = nombreAnimal;
    }

    hacerSonido():void{
        console.log(`El animal ${this.nombreAnimal}hace un sonido`);
    }

   
}

class Perro extends Animal {
    hacerSonido():void{
        console.log(`El perro ${this.nombreAnimal} ladra`);
    }
}

class Gato extends Animal {
    hacerSonido():void{
        console.log(`El gato ${this.nombreAnimal} maulla`);
    }
}

const miPerro = new Perro("Firulais");
const miGato = new Gato("Michi");

miPerro.hacerSonido();
miGato.hacerSonido(); 