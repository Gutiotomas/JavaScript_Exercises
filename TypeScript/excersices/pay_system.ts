interface Notificacion {
    enviar(nombre:string, mensaje:string):void;
}

class Correo implements Notificacion {
    enviar(nombre:string, mensaje: string): void {
        console.log(`Enviando correo a ${nombre}: ${mensaje}`);
    }
}   

class SMS implements Notificacion {
    enviar(nombre:string, mensaje:string):void{
        console.log(`Enviando SMS a ${nombre}: ${mensaje}`);
    }
}

class Usuario {
    public nombre: string;
    private notificacion: Notificacion;


    constructor(nombre:string, notificacion: Notificacion){
        this.nombre = nombre;
        this.notificacion = notificacion;
    }

    notificar(mensaje:string):void{
        this.notificacion.enviar(this.nombre, mensaje);
    }
}


const correo = new Correo();
const usuario1 = new Usuario("Tomás", correo);

usuario1.notificar("¡Tienes una nueva tarea!");
// ✉️ Enviando correo a Tomás: ¡Tienes una nueva tarea!

const sms = new SMS();
const usuario2 = new Usuario("Laura", sms);

usuario2.notificar("Tu paquete ha sido enviado.");
// 📱 Enviando SMS a Laura: Tu paquete ha sido enviado.
