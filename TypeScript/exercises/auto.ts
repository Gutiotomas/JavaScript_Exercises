class Auto {
    protected colorAuto:string;
    readonly numeroSerie:string;
    static totalAutos: number = 0;

    constructor(colorAuto: string, numeroSerie: string) {
        this.colorAuto = colorAuto;
        this.numeroSerie = numeroSerie;
        Auto.totalAutos++;
    }

    mostrarInfo(): void {
        console.log(`Auto [${this.colorAuto.toUpperCase()}] - Serie: ${this.numeroSerie}`);
    }
}

const auto1 = new Auto("Azul", "A001" );
auto1.mostrarInfo(); // Auto [AZUL] - Serie: A001

const auto2 = new Auto("Negro", "B732" );
auto2.mostrarInfo(); // Auto [NEGRO] - Serie: B732

console.log(Auto.totalAutos); // 2
