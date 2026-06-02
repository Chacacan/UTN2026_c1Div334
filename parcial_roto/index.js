// --- Función que obtiene el carrito del LocalStorage, lo parsea a un array y lo retorna ---
function obtenerCarrito() 
{
    let carritoString = localStorage.getItem("carrito");

    //si no existe nada guardado, retorno un array vacio
    if (carritoString === null) 
    {
        return [];
    }

    return JSON.parse(carritoString);
}

// --- Función que guarda el carrito recibido al LocalStorage, previamente transformado a string ---
function guardarCarrito(carrito) 
{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

function sumarAlCarrito(e) 
{
    // Obtengo la referencia al elemento clickeado en base al evento
    let elementoClickeado = e.target;

    //subo en el DOM hasta el <li> del producto
    let liProducto = elementoClickeado.closest("li");

    let nombreProducto = liProducto.querySelector(".nombre-producto").textContent;
    let precioTexto = liProducto.querySelector(".precio-producto").textContent;

    let precioProducto = parseInt(precioTexto.replace("$", "").replace(".", ""));

    let carrito = obtenerCarrito();

    //busco si el producto ya existe en el carrito
    let productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (productoExistente) 
    {
        productoExistente.cantidad++;
    } 
    else 
    {
        carrito.push(
        {
            nombre: nombreProducto,
            precio: precioProducto,
            cantidad: 1
        });
    }

    alert("Une:" + nombreProducto + " fue agregado al carrito");

    console.log("Carrito actualizado:", carrito);

    guardarCarrito(carrito);
}

function restarDelCarrito(e) 
{
    //obtengo la referencia al elemento clickeado en base al evento
    let elementoClickeado = e.target;

    let liProducto = elementoClickeado.closest("li");

    let nombreProducto = liProducto.querySelector(".nombre-producto").textContent;

    let carrito = obtenerCarrito();

    if (carrito.length === 0) 
    {
        alert("No hay ningún producto guardado en el carrito");
        return;
    }

    let productoExistente = carrito.find(producto => producto.nombre === nombreProducto);

    if (!productoExistente) 
    {
        //sii no existe el producto, avisamos que no hay mas
        alert("No hay más " + nombreProducto + " en el carrito");
        return;
    }

    productoExistente.cantidad--;

    //mostramos alert avisando que fue eliminado
    alert("Un/una: " + nombreProducto + " fue eliminado del carrito");

    if (productoExistente.cantidad === 0) 
    {
        carrito = carrito.filter(producto => producto.nombre !== nombreProducto);
    }

    guardarCarrito(carrito);

    console.log("Carrito actualizado:", carrito);

}

// --- [EVENTOS] Asociación del evento "click" a los botones "+" y "-" ---
window.addEventListener("DOMContentLoaded", () => 
{
    const botonesSumar = document.querySelectorAll(".btn-sumar-a-carrito");
    const botonesRestar = document.querySelectorAll(".btn-restar-a-carrito");

    botonesSumar.forEach(btn => btn.addEventListener("click", sumarAlCarrito));
    botonesRestar.forEach(btn => btn.addEventListener("click", restarDelCarrito));
});
