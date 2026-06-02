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

// --- Función que carga los productos del carrito en la tabla y calcula el total ---
function cargarProductosCarrito() 
{
    let tabla = document.getElementById("tabla-carrito");
    let labelTotal = document.getElementById("valor-final");
    let carrito = obtenerCarrito();
    let total = 0;

    carrito.forEach(producto => 
    {
        //solo muesttro productos con cantidad valida (mínimo 1)
        if (producto.cantidad >= 1) 
        {
            let fila = document.createElement("tr");

            let celdaNombre = document.createElement("td");
            celdaNombre.textContent = producto.nombre;

            let celdaCantidad = document.createElement("td");
            celdaCantidad.textContent = producto.cantidad;

            let celdaPrecio = document.createElement("td");
            celdaPrecio.textContent = "$" + producto.precio;

            fila.appendChild(celdaNombre);
            fila.appendChild(celdaCantidad);
            fila.appendChild(celdaPrecio);

            tabla.appendChild(fila);

            total += producto.precio * producto.cantidad;
        }
    });

    labelTotal.textContent = "El valor final a pagar es de: $" + total;
}

// --- Función que limpia todo el carrito del LocalStorage y recarga la página ---
function limpiarCarrito() 
{
    localStorage.removeItem("carrito");

    alert("Carrito limpiado correctamente!");

    location.reload();
}

// --- [EVENTOS] Asociación de eventos al cargar la página ---
window.addEventListener("DOMContentLoaded", () =>
{
    cargarProductosCarrito();

    // Asociamos el evento click al botón de limpiar carrito
    document.querySelector(".btn-limpiar-carrito").addEventListener("click", limpiarCarrito);
});
