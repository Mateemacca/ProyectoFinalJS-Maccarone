let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const productoCarrito2 = document.createElement("div");
let carritoMensaje = "Productos en el carrito:\n";
let precioTotal = 0;
for (let i = 0; i < carrito.length; i++) {
  console.log("test");
  const producto = carrito[i];
  const cantidad = producto.cantidad;
  const nombreProducto = producto.nombre;
  const precioProducto = producto.precio * cantidad;
  const imagenProducto = producto.imagen;
  precioTotal += precioProducto;
  // Agregar la cantidad del producto al carrito

  carritoMensaje += `${cantidad}x ${nombreProducto} ($${
    producto.precio * cantidad
  })\n`;
  const productoCarrito = document.createElement("section");
  productoCarrito.innerHTML = `
        <div class="containerCarro w-1/2 flex gap-2 my-2 bg-white text-black items-center justify-center rounded-2xl mx-auto productoCarritoStyle relative z-10">
        <div class="w-1/2 flex items-start ">
        <img class="rounded-l-2xl mt-0 w-52${
          nombreProducto === "Navaja" ? " py-10 max-h-[208px] bg-white" : ""
        }" src="/imgs/${imagenProducto}"></img>
        </div>
        <h1>${cantidad}x</h1>
        <h1>${nombreProducto}($${precioProducto})</h1>
        </div>`;

  //   productoCarrito.classList.add("container");
  const listaProductos = document.querySelector(".containerCarrito");
  listaProductos.appendChild(productoCarrito);
}

const listaProductos = document.querySelector(".containerCarrito");

productoCarrito2.innerHTML = `
<div class="p-12 bg-neutral-900 relative z-0 w-1/2 mx-auto rounded-2xl my-12">
   <h1 class='text-white font-bold items-center mx-auto flex justify-center'> Total: $${precioTotal}</h1>
</div>
`;

listaProductos.appendChild(productoCarrito2);

// Calcular el total con recargo
carritoMensaje += `\nTotal del carrito: `;

const hayElementosEnCarrito = carrito.length > 0; // para ver si hay elementos en el carrito

function mostrarFavoritos() {
  const favorites = getFavoritesFromLocalStorage();
  let favoritosMensaje = "Productos en favoritos:\n";

  if (favorites.length === 0) {
    favoritosMensaje = "No tienes productos en favoritos.";
  } else {
    favorites.forEach((favorito) => {
      favoritosMensaje += `${favorito.nombre}\n`;
    });
  }

  // Mostrar la información de favoritos en una ventana emergente o SweetAlert
  Swal.fire({
    title: "Favoritos",
    text: favoritosMensaje,
    icon: "info",
    confirmButtonText: "Cerrar",
  });
}
document
  .getElementById("btnMostrarFavoritos")
  .addEventListener("click", mostrarFavoritos);
// Función para obtener la lista de productos favoritos del LocalStorage
function getFavoritesFromLocalStorage() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
}
