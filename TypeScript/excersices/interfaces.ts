interface Libro {
    titulo: string;
    autor: string;
    paginas: number;
    leido: boolean;
}

const miLibro : Libro = {
    titulo: "El nombre del viento",
    autor: "Enrique Salta",
    paginas: 305,
    leido: true
}

console.log(miLibro);

interface Estudiante {
    nombre: string;
    edad:  number;
    promedio ?: number;
}

const estudiante1 : Estudiante = {
    nombre: "Tomás",
    edad: 23,
    promedio: 4.3
}

const estudiante2 : Estudiante = {
    nombre: "María",
    edad: 23
}

console.log(estudiante1);
console.log(estudiante2);

interface Pelicula {
    titulo: string;
    year: number;
}

const peliculas : Pelicula[] = [
    {
        titulo: "El Señor de los Anillos",
        year: 2001
    },
    {
        titulo: "Harry Potter",
        year: 2001
    },
    {
        titulo: "Star Wars",
        year: 1977
    }
]

console.log(peliculas);
 
interface Operaciones {
    duplicar(n:number):number;
    saludar(nombre:string): string;
}

const operacion1: Operaciones = {
    duplicar: (n) => n * 2,
    saludar: (nombre) => `Hola ${nombre}`
}

