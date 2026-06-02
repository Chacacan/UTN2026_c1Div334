// Importamos el modulo http: Este modulo nos permite crear un servidor web sin tener que instalar nada adicional
const http = require("http");

// Creamos un servidor
const servidor = http.createServer((req, res) => {

    // Configuramos la respuesta
    res.statusCode = 200; // 200 OK, peticion exitosa

    res.setHeader("Content-Type", "text/plain"); // Indicamos que responderemos con texto

    res.end("Hola mundo desde Node.js"); // Mensaje que enviamos a cliente
});

// Definimos el puerto y arrancamos el servidor
const puerto = 3000;

servidor.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});


/*====================    
    Explicacion
======================

    1. Importamos el modulo http: Esto nos da acceso a todas las funcionalidades necesarias para crear un servidor

    2. Creamos un servidor: Utilizamos el metodo http.createServer() para definir un servidor que escuche las solicitudes de los clientes y les responda

    3. Respuesta del servidor: El servidor siempre respondera con el mensaje "Hola mundo desde Node.js"

    4. Escuchamos en un puerto: El servidor se ejecuta en el puerto 3000 y muestra un mensaje por consola cuando esta listo
*/