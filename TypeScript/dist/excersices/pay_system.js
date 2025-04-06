"use strict";
class Correo {
    enviar(nombre, mensaje) {
        console.log(`Enviando correo a ${nombre}: ${mensaje}`);
    }
}
class SMS {
    enviar(nombre, mensaje) {
        console.log(`Enviando SMS a ${nombre}: ${mensaje}`);
    }
}
class Usuario {
    constructor(nombre, notificacion) {
        this.nombre = nombre;
        this.notificacion = notificacion;
    }
    notificar(mensaje) {
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
