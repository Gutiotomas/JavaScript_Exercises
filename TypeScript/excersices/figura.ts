abstract class Figura {
    abstract calcularArea(): number;

    mostrarNombre(): void {
        console.log(`Soy una figura`);
    }
}

// No se puede instanciar directamente: new Figura() da error.

// Fuerza a las subclases a implementar métodos importantes.

// Puedes reutilizar lógica común en métodos concretos (como mostrarNombre()).

class Cuadrado extends Figura {
    private lado: number;

    constructor(lado: number) {
        super();
        this.lado = lado;
    }

    calcularArea(): number {
        return this.lado * this.lado;
    }

    mostrarNombre(): void {
        console.log(`Soy un cuadrado`);
    }
}

class Circulo extends Figura {
    private radio: number;

    constructor(radio: number) {
        super();
        this.radio = radio;
    }

    calcularArea(): number {
        return Math.PI * this.radio * this.radio;
    }

    mostrarNombre(): void {
        console.log(`Soy un círculo`);
    }
}

const figuras: Figura[] = [
    new Cuadrado(4),
    new Circulo(3)
];

for (const figura of figuras) {
    figura.mostrarNombre();
    console.log("Área:", figura.calcularArea());
}
