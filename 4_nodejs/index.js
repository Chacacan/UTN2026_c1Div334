console.log("Hola desde Node.js");

// Importo el modulo de saludos.js
const saludar = require("./saludos.js"); // Escribo la ruta especifica

console.log(saludar("Gabi")); // Holis Gabi


/*====================================
    Modulos preinstalados Node.js
====================================*/

// fs (File System): Este moduilo nos permite interactuar con el sistema de archivos. Podremos leer, escribir, actualizar y borrar arhcivos de forma sencilla

// Importamos el modulo fs
const fs = require("fs");

fs.readFile("archivos/texto.txt", "utf8", (err, data) => {
    if (err) { // Si hubiera un error nos diria no such file or directory
        console.log("Ocurrio un error: ", err);
        return; // Todo el codigo abajo de return no se ejecuta
    }

    console.log("Contenido del archivo: ", data); // Contenido del archivo:  Hola, soy un archivo de texto dentro de la carpeta /archivos
});


/* path: El modulo path nos ayuda a manejar y manipular rutas de archivos y directorios de forma mas segura y comoda

    Windows usa: C:\carpeta\archivo.txt
    Unix (linux,macos) usan: /carpeta/archivo.txt

    path resuelve estas diferencias, provee ademas metodos como

        - join()        une rutas
        - basename()    obtiene nombre de archivo
        - extname()     obtiene la extension del archivo
        - dirname()     obtiene la carpeta
*/

// Importamos el modulo nativo path
const path = require("path");

const ruta = path.join(__dirname, "archivos", "texto.txt");

console.log(ruta);


// os (Operative System): Este modulo nos permite obtener informacion del sistema operativo en el que estamos ejecutando Node.js.

const os = require("os");

const memoriaLibre = os.freemem();
const tipoSistema = os.type();

console.log("Memoria libre: ", memoriaLibre); // Memoria libre:  4534571008
console.log("Uso un sistema operativo de tipo: ", tipoSistema); // Uso un sistema operativo de tipo:  Linux