// Importamos express
const express = require("express");

// Creamos una aplicacion de express
const app = express();

// Definimos la ruta principal
app.get("/", (req, res) => {
    res.send("Hola mundo desde Express.js");
});

app.get("/saludos", (req, res) => {
    res.send("Aca ira el texto plano, JSON o HTML de la ruta /saludos");
})

// Escuchamos en el puerto 3000
const puerto = 3000;
app.listen(puerto, () => {
        console.log(`Servidor Express corriendo en el puerto ${puerto}`);
});


/*====================    
    Explicacion
======================

    1. Importar Express: Primero traemos la libreria express al archivo

    2. Creamos una aplicacion: Llamamos a la funcion express() que devuelve una instancia de una aplicacion

    3. Definimos una ruta: Usamos app.get() para definir que hacer cuando alguien visita la raiz "/" de nuestro servidor. Aca responderemos con un "Hola mundo desde Express.js"

    4. Escuchamos en un puerto: Nuestro servidor Express esta escuchando en el puerto 3000 listo para aceptar conexiones
*/