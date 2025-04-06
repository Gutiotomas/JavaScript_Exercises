function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
}

const saludo = saludar("Tomás");

function multiplicar(a: number, b?: number): number {
    return b ? a * b : a;
}