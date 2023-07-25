//Hamburguesa Navbar
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animacion de los links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Animacion de la hamburguesa
  hamburger.classList.toggle("toggle");
});

const productos = [
  {
    id: 1,
    nombre: "Matizador",
    categoria: "MATIZADOR",
    precio: 1500,
    precioAnterior: 1899,
    imagen: "matizador.jpg",
    favorito: false,
  },
  {
    id: 2,
    nombre: "Shampoo Kerastase",
    categoria: "SHAMPOO",
    precio: 2000,
    precioAnterior: 2699,
    imagen: "shampo.webp",
    favorito: false,
  },
  {
    id: 3,
    nombre: "Acondicionador richissime exel",
    categoria: "ACONDICIONADOR",
    precio: 2300,
    precioAnterior: 2999,
    imagen: "acondicionador.webp",
    favorito: false,
  },
  {
    id: 4,
    nombre: "Navaja",
    categoria: "NAVAJA",
    precio: 600,
    precioAnterior: 999,
    imagen: "navaja.webp",
    favorito: false,
  },
  {
    id: 5,
    nombre: "Rasuradora",
    categoria: "RASURADORA",
    precio: 33900,
    precioAnterior: 36000,
    imagen: "rasuradora.web.jpg",
    favorito: false,
  },
  {
    id: 6,
    nombre: "Maquina",
    categoria: "MAQUINA",
    precio: 40000,
    precioAnterior: 44000,
    imagen: "12660-master-cordless-li-clipper-mlc-straight-stand-6.webp",
    favorito: false,
  },
];
let total = 0;
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let recargoMetodoPago = 0;

function agregarProductoAlCarrito(productoSeleccionado, cantidadProducto) {
  const productoEnCarrito = carrito.find(
    (item) => item.id === productoSeleccionado.id
  );

  if (productoEnCarrito) {
    productoEnCarrito.cantidad += cantidadProducto;
  } else {
    productoSeleccionado.cantidad = cantidadProducto;
    carrito.push(productoSeleccionado);
  }

  const carritoJSON = JSON.stringify(carrito);
  localStorage.setItem("carrito", carritoJSON);

  Swal.fire(
    "Perfecto!",
    `Se ha(n) añadido ${cantidadProducto} ${productoSeleccionado.nombre}(s) exitosamente!`,
    "success"
  );
}

// function mostrarCarrito() {
//   let carritoMensaje = "Productos en el carrito:\n";
//   let subtotal = 0; // Subtotal sin recargo

//   for (let i = 0; i < carrito.length; i++) {
//     const producto = carrito[i];
//     const nombreProducto = producto.nombre;
//     const cantidad = producto.cantidad; // Agregar la cantidad del producto al carrito

//     subtotal += producto.precio * cantidad; // Actualizar el subtotal con el precio del producto y la cantidad

//     carritoMensaje += `${cantidad}x ${nombreProducto} ($${
//       producto.precio * cantidad
//     })\n`;
//   }

//   // Calcular el total con recargo
//   const totalConRecargo = Math.round(subtotal + subtotal * recargoMetodoPago);
//   carritoMensaje += `\nTotal del carrito: $${totalConRecargo}`;

//   const hayElementosEnCarrito = carrito.length > 0; // para ver si hay elementos en el carrito
// Swal.fire({
//   title: carritoMensaje,
//   showConfirmButton: hayElementosEnCarrito,
//   showCancelButton: true,
//   cancelButtonText: "Ok",
//   confirmButtonText: "Vaciar Carrito",
//   confirmButtonColor: "red",
//   showCloseButton: true,
// }).then((result) => {
//   if (result.isConfirmed) {
//     // Vaciar el carrito
//     carrito = [];
//     // Reiniciar el total
//     subtotal = 0;
//     // Reiniciar el recargo del método de pago
//     recargoMetodoPago = 0;

//     // Limpiar el localStorage
//     localStorage.removeItem("carrito");
//     localStorage.removeItem("totalCarrito");

//     // Mostrar un mensaje de éxito al usuario
//     Swal.fire({
//       icon: "success",
//       title: "Carrito vaciado",
//       text: "El carrito se ha vaciado correctamente.",
//     });
//   } else if (result.dismiss === Swal.DismissReason.cancel) {
//     // Aquí puedes ejecutar alguna acción al cancelar
//     console.log("Botón Cancelar presionado");
//   }
// });
// }

function asignarEventosAgregarAlCarrito() {
  // agarra el elemento padre que contiene todos los productos
  const listaProductos = document.getElementById("listaProductos");
  if (listaProductos) {
    listaProductos.addEventListener("click", (event) => {
      if (event.target.classList.contains("btnAgregarAlCarrito")) {
        const productoId = parseInt(event.target.dataset.id);
        const productoSeleccionado = productos.find(
          (producto) => producto.id === productoId
        );

        if (productoSeleccionado) {
          Swal.fire({
            title: "¿Quieres agregar este producto al carrito?",
            text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
            showCancelButton: true,
            confirmButtonText: "Sí",
            cancelButtonText: "No",
            icon: "question",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ingresa la cantidad que deseas agregar:",
                input: "number",
                inputValidator: (value) => {
                  if (!value || parseInt(value) <= 0) {
                    return "Ingresa una cantidad válida (mayor a cero).";
                  }
                },
                showCancelButton: true,
                confirmButtonText: "Agregar",
                cancelButtonText: "Cancelar",
                icon: "question",
              }).then((result) => {
                if (result.isConfirmed) {
                  const cantidadProducto = parseInt(result.value);

                  agregarProductoAlCarrito(
                    productoSeleccionado,
                    cantidadProducto
                  );

                  // mostrarCarrito();
                }
              });
            }
          });
        }
      }
    });
  }
}

asignarEventosAgregarAlCarrito();

// document
//   .getElementById("btnMostrarCarrito")
//   .addEventListener("click", mostrarCarrito);

document
  .getElementById("inputBuscarProducto")
  .addEventListener("input", function () {
    const searchTerm = this.value.trim().toLowerCase();

    const resultados = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(searchTerm)
    );

    const listaProductos = document.getElementById("listaProductos");

    while (listaProductos.firstChild) {
      listaProductos.removeChild(listaProductos.firstChild);
    }

    if (resultados.length > 0) {
      resultados.forEach((producto) => {
        const productoElemento = document.createElement("div");
        productoElemento.classList.add("product-card");
        const isFavorito = VerificarEsProductoFavorito(producto.id); // Verificamos si el producto está en favoritos

        productoElemento.innerHTML = `
          <div class="badge">Hot SALE</div>
          <div class="product-tumb">
            <a href=""><img src="imgs/${
              producto.imagen || "producto-no-encontrado.jpg"
            }" alt="${producto.nombre}"${
          producto.nombre === "Navaja"
            ? ' class="py-10 max-h-400 bg-white"'
            : ""
        }></a>
          </div>
          <div class="product-details">
            <span class="product-catagory">${producto.categoria}</span>
            <h4><a href="">${producto.nombre}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div class="product-bottom-details">
              <div class="product-price"><small>$${
                producto.precioAnterior
              }</small>$${producto.precio}</div>
              <div class="product-links">
                <button class="btnAgregarAFavoritos" data-id="${producto.id}">
                  ${
                    isFavorito
                      ? '<i class="fa fa-heart boton-presionado pointer-events-none"></i>'
                      : '<i class="far fa-heart pointer-events-none"></i>'
                  }
                </button>
                <button data-id="${
                  producto.id
                }" class="btnAgregarAlCarrito"><i class="fa fa-shopping-cart relative z-0 pointer-events-none"></i></button>
              </div>
            </div>
          </div>`;
        function añadirAFavoritos(productoId) {
          const productoSeleccionado = productos.find(
            (producto) => producto.id === productoId
          );

          if (productoSeleccionado) {
            productoSeleccionado.favorito = true;
          }
        }

        function removeFromFavorites(productoId) {
          const productoSeleccionado = productos.find(
            (producto) => producto.id === productoId
          );

          if (productoSeleccionado) {
            productoSeleccionado.favorito = false;
          }
        }

        function toggleFavoriteOnClick(productoId) {
          const productoSeleccionado = productos.find(
            (producto) => producto.id === productoId
          );

          if (productoSeleccionado) {
            if (productoSeleccionado.favorito) {
              removeFromFavorites(productoId);
            } else {
              añadirAFavoritos(productoId);
            }

            const botonFavorito = document.querySelector(
              `[data-id="${productoId}"] .btnAgregarAFavoritos`
            );
            if (botonFavorito) {
              botonFavorito.innerHTML = productoSeleccionado.favorito
                ? '<i class="fa fa-heart boton-presionado pointer-events-none"></i>'
                : '<i class="far fa-heart pointer-events-none"></i>';
            }
          }
        }
        loadFavoritesFromLocalStorage();
        listaProductos.appendChild(productoElemento);
      });
    } else {
      productos.forEach((producto) => {});
      loadFavoritesFromLocalStorage();
    }
  });
function VerificarEsProductoFavorito(productoId) {
  const favorites = getFavoritesFromLocalStorage();
  return favorites.some((favorito) => favorito.id === productoId);
}
function añadirAFavoritos(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = true;
    // Aquí puedes guardar el producto en la lista de favoritos en el LocalStorage si deseas mantenerlo entre sesiones.
    // También puedes mostrar una notificación o SweetAlert aquí para indicar que el producto se agregó a favoritos.
  }
}

const productosLocal = JSON.parse(localStorage.getItem("favorites"));

// Función para quitar un producto de la lista de favoritos
function removeFromFavorites(productoId) {
  const productoSeleccionado = productosLocal.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = false;
    // Aquí puedes quitar el producto de la lista de favoritos en el LocalStorage si lo guardaste previamente.
    // También puedes mostrar una notificación o SweetAlert aquí para indicar que el producto se quitó de favoritos.
  }
}

// Asignar eventos para los botones de favoritos
document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnAgregarAFavoritos")) {
    const productoId = parseInt(event.target.dataset.id);
    toggleFavoriteOnClick(productoId);
  }
});

// Función para obtener la lista de productos favoritos del LocalStorage
function getFavoritesFromLocalStorage() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
}

// Función para guardar la lista de productos favoritos en el LocalStorage
function saveFavoritesToLocalStorage(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

// Función para agregar un producto a la lista de favoritos
function añadirAFavoritos(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = true;
    const favorites = getFavoritesFromLocalStorage();
    favorites.push(productoSeleccionado);
    saveFavoritesToLocalStorage(favorites);
    // Aquí puedes mostrar una notificación o SweetAlert para indicar que el producto se agregó a favoritos.
  }
}

// Función para quitar un producto de la lista de favoritos
function removeFromFavorites(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = false;
    let favorites = getFavoritesFromLocalStorage();
    favorites = favorites.filter((producto) => producto.id !== productoId);
    saveFavoritesToLocalStorage(favorites);
    // Aquí puedes mostrar una notificación o SweetAlert para indicar que el producto se quitó de favoritos.
  }
}
// Función para cargar los productos favoritos desde el LocalStorage y actualizar los iconos de corazón
function loadFavoritesFromLocalStorage() {
  const favorites = getFavoritesFromLocalStorage();
  favorites.forEach((favorito) => {
    const botonFavorito = document.querySelector(`[data-id="${favorito.id}"]`);
    if (botonFavorito) {
      botonFavorito.innerHTML =
        '<i class="fa fa-heart boton-presionado pointer-events-none"></i>'; // Cambiar al corazón relleno
    }
  });
}

// Agregar el evento "DOMContentLoaded" para cargar los productos favoritos al cargar la página
document.addEventListener("DOMContentLoaded", loadFavoritesFromLocalStorage);

//
function toggleFavoriteOnClick(productoId) {
  const favorites = getFavoritesFromLocalStorage();
  const productoEnLista = favorites.find(
    (producto) => producto.id === productoId
  );
  const botonFavorito = document.querySelector(`[data-id="${productoId}"]`);
  if (productoEnLista) {
    // Si el producto ya está en favoritos, lo quitamos de la lista
    favorites.splice(favorites.indexOf(productoEnLista), 1);
    removeFromFavorites(productoId);
    botonFavorito.innerHTML =
      '<i class="far fa-heart pointer-events-none"></i>';
  } else {
    // Si el producto no está en favoritos, lo agregamos a la lista
    const productoSeleccionado = productos.find(
      (producto) => producto.id === productoId
    );
    if (productoSeleccionado) {
      favorites.push(productoSeleccionado);
      añadirAFavoritos(productoId);
      botonFavorito.innerHTML =
        '<i class="fa fa-heart pointer-events-none boton-presionado "></i>'; // Cambiar al corazón relleno
    }
  }

  // Guardar la lista actualizada de favoritos en el LocalStorage
  saveFavoritesToLocalStorage(favorites);
}
function mostrarFavoritos() {
  const favorites = getFavoritesFromLocalStorage();
  let favoritosMensaje = "Productos en favoritos:<br>";

  if (favorites.length === 0) {
    favoritosMensaje = "No tienes productos en favoritos.";
  } else {
    favorites.forEach((favorito) => {
      favoritosMensaje += `${favorito.nombre}<br>`;
    });
  }

  // Mostrar la información de favoritos en una ventana emergente o SweetAlert
  Swal.fire({
    title: "Favoritos",
    html: favoritosMensaje,
    icon: "info",
    confirmButtonText: "Cerrar",
    showCloseButton: true,
  });
}
document
  .getElementById("btnMostrarFavoritos")
  .addEventListener("click", mostrarFavoritos);

let carritoPanelAbierto = false; // Variable de estado para controlar si el panel está abierto o cerrado

function finalizarCompra() {
  // Vaciar el carrito y el total del carrito en el LocalStorage
  localStorage.removeItem("carrito");
  localStorage.removeItem("totalCarrito"); // Si el total del carrito se hubiera guardado con este nombre

  // Limpiar el carrito en memoria
  carrito = [];
  // Reiniciar el total
  total = 0;

  // Actualizar la vista del carrito para mostrar que está vacío
  actualizarProductosEnCarrito();

  // Mostrar un mensaje de éxito al usuario
  Swal.fire({
    icon: "success",
    title: "Compra finalizada",
    text: "La compra se ha finalizado con éxito. ¡Gracias por tu compra!",
  });
}
//
function toggleCarritoPanel() {
  const carritoPanel = document.getElementById("carritoPanel");
  carritoPanelAbierto = !carritoPanelAbierto; // Cambiar el estado (abierto o cerrado)
  if (carritoPanelAbierto) {
    carritoPanel.classList.add("activo");
  } else {
    carritoPanel.classList.remove("activo");
  }
  actualizarProductosEnCarrito();
}
function actualizarProductosEnCarrito() {
  const carritoProductos = document.querySelector(".carrito-productos");
  carritoProductos.innerHTML = "";
  let totalCarrito = 0;
  for (const producto of carrito) {
    const cantidad = producto.cantidad;
    const nombreProducto = producto.nombre;
    const precioProducto = producto.precio * cantidad;
    const imagenProducto = producto.imagen;
    totalCarrito += precioProducto;
    const productoDiv = document.createElement("div");
    productoDiv.classList.add("producto-carrito");
    productoDiv.innerHTML = `
    <div class="detalle-producto flex items-center">
  <img class="imagen-producto" src="imgs/${imagenProducto}" alt="${nombreProducto}">
  <div class="detalle-texto">
    <div class="nombre-cantidad">
      <h3 class="font-bold max-w-[50%]">${nombreProducto}</h3>
      <div class="cantidad-producto flex items-center">
        <button class="restar-producto" onclick="restarProducto(${producto.id})"><i class="ri-subtract-line"></i></button>
        <span class="cantidad">${cantidad}</span>
        <button class="agregar-producto" onclick="agregarProducto(${producto.id})"><i class="ri-add-line"></i></button>
      </div>
    </div>
    <p class="font-bold text-l">Precio: $${precioProducto}</p>
  </div>
</div>
<hr>
      
    `;

    carritoProductos.appendChild(productoDiv);
  }
  const totalCarritoDiv = document.getElementById("totalCarrito");
  totalCarritoDiv.innerHTML = `Total del carrito: $${totalCarrito}
  <button id="btnFinalizarCompra" onclick="finalizarCompra()" class="btn-finalizar-compra">Finalizar compra</button>`;
}

function agregarProducto(productoId) {
  const productoSeleccionado = carrito.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.cantidad++; // Incrementar la cantidad del producto
  } else {
    // El producto no está en el carrito, agregarlo con cantidad 1
    const producto = productos.find((producto) => producto.id === productoId);
    if (producto) {
      producto.cantidad = 1;
      carrito.push(producto);
    }
  }

  actualizarCarritoLocalStorage(); // Actualizar el carrito en el LocalStorage
  actualizarProductosEnCarrito();
  // Actualizar la vista del carrito
  function actualizarCarritoLocalStorage() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
  }
}

function restarProducto(productoId) {
  const productoSeleccionado = carrito.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    if (productoSeleccionado.cantidad > 1) {
      productoSeleccionado.cantidad--; // Decrementar la cantidad del producto
    } else {
      // Si la cantidad es 1, eliminar el producto del carrito
      carrito = carrito.filter((producto) => producto.id !== productoId);
    }
    actualizarCarritoLocalStorage(); // Actualizar el carrito en el LocalStorage
    actualizarProductosEnCarrito(); // Actualizar la vista del carrito
  }
  function actualizarCarritoLocalStorage() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
  }
}
