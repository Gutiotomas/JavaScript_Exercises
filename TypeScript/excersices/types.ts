type Estado = "pendiente" | "en proceso" | "completado";

interface Tarea {
    titulo: string;
    estado: Estado;
}

const tarea1: Tarea = {
    titulo: "Aprender TypeScript",
    estado: "pendiente"
}

type ParNumeros = [number, number];

function sumarPar(numeros: ParNumeros): number {
    return numeros[0] + numeros[1];
}

console.log(sumarPar([1, 2]));

type ID = string | number;

interface Usuario {
    id:ID;
    nombre: string;
    activo: boolean;
}

const usuarios : Usuario[] = [
    {
        id: 23452,
        nombre: "Juan",
        activo: true
    },
    {
        id: "ABe12fG",
        nombre: "Pedro",
        activo: false
    },
    {
        id: 44232,
        nombre: "Tomás",
        activo: true
    }
]

console.log(usuarios);

type Rol = "admin" | "user";

interface Empleado {
    nombre: string;
    rol:Rol;
}

function esAdmin(empleado:Empleado): boolean {
    if (empleado.rol === "admin") {
        return true;
    }
    else {
        return false;
    }
}

console.log(esAdmin({nombre: "Juan", rol: "admin"})); // true
console.log(esAdmin({nombre: "Juan", rol: "user"})); // false