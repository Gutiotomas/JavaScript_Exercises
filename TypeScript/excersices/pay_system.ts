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

class Usuario1 {
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
const Usuario11 = new Usuario1("Tomás", correo);

Usuario11.notificar("¡Tienes una nueva tarea!");
// ✉️ Enviando correo a Tomás: ¡Tienes una nueva tarea!

const sms = new SMS();
const Usuario12 = new Usuario1("Laura", sms);

Usuario12.notificar("Tu paquete ha sido enviado.");
// 📱 Enviando SMS a Laura: Tu paquete ha sido enviado.
