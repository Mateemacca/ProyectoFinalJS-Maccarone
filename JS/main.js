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
    nombre: "Matizador Icon Light",
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
    nombre: "Acondicionador exel",
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
            title: "Queres agregar este producto al carrito?",
            text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
            showCancelButton: true,
            confirmButtonText: "Si",
            cancelButtonText: "No",
            icon: "question",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ingresa la cantidad que deseas agregar:",
                input: "number",
                inputValidator: (value) => {
                  if (!value || parseInt(value) <= 0) {
                    return "Ingresá una cantidad valida (mayor a cero).";
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
        productoElemento.classList.add(
          "product-card",
          "rounded-xl",
          "rounded-t-xl",
          "rounded-xl"
        );
        const isFavorito = verificarEsProductoFavorito(producto.id); // verifica si el producto esta en favoritos

        productoElemento.innerHTML = `
          <div class="badge">Hot SALE</div>
          <div class="product-tumb rounded-t-xl bg-white">
            <a href=""><img class="pointer-events-none rounded-t-xl bg-white ${
              producto.nombre === "Navaja"
                ? "py-10 max-h-400 bg-white rounded-t-xl"
                : ""
            }"
          src="imgs/${producto.imagen || "producto-no-encontrado.jpg"}"
          alt="${producto.nombre}"></a>
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
                }" class="btnAgregarAlCarrito"><i class="fa fa-shopping-cart   pointer-events-none"></i></button>
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

        function sacarDeFavoritos(productoId) {
          const productoSeleccionado = productos.find(
            (producto) => producto.id === productoId
          );

          if (productoSeleccionado) {
            productoSeleccionado.favorito = false;
          }
        }

        function toggleFavoritoClick(productoId) {
          const productoSeleccionado = productos.find(
            (producto) => producto.id === productoId
          );

          if (productoSeleccionado) {
            if (productoSeleccionado.favorito) {
              sacarDeFavoritos(productoId);
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
function verificarEsProductoFavorito(productoId) {
  const favorites = getFavoritesFromLocalStorage();
  return favorites.some((favorito) => favorito.id === productoId);
}
function añadirAFavoritos(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = true;
  }
}

const productosLocal = JSON.parse(localStorage.getItem("favorites"));

// funcion para sacar un producto de la lista de favoritos
function sacarDeFavoritos(productoId) {
  const productoSeleccionado = productosLocal.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = false;
  }
}

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("btnAgregarAFavoritos")) {
    const productoId = parseInt(event.target.dataset.id);
    toggleFavoritoClick(productoId);
  }
});

// funcion para obtener la lista de productos favoritos del localstorage
function getFavoritesFromLocalStorage() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites;
}

// funcion para guardarlos en el localstorage
function saveFavoritesToLocalStorage(favorites) {
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

function añadirAFavoritos(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = true;
    const favorites = getFavoritesFromLocalStorage();
    favorites.push(productoSeleccionado);
    saveFavoritesToLocalStorage(favorites);
  }
}

function sacarDeFavoritos(productoId) {
  const productoSeleccionado = productos.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.favorito = false;
    let favorites = getFavoritesFromLocalStorage();
    favorites = favorites.filter((producto) => producto.id !== productoId);
    saveFavoritesToLocalStorage(favorites);
  }
}
// funcion para cargar los productos favoritos desde el localstorage y actualizar el icon de corazon
function loadFavoritesFromLocalStorage() {
  const favorites = getFavoritesFromLocalStorage();
  favorites.forEach((favorito) => {
    const botonFavorito = document.querySelector(`[data-id="${favorito.id}"]`);
    if (botonFavorito) {
      botonFavorito.innerHTML =
        '<i class="fa fa-heart boton-presionado pointer-events-none"></i>'; // cambia al corazon relleno
    }
  });
}

//"domContentloaded" para cargar los productos favoritos al cargar la pagina
document.addEventListener("DOMContentLoaded", loadFavoritesFromLocalStorage);

//
function toggleFavoritoClick(productoId) {
  const favorites = getFavoritesFromLocalStorage();
  const productoEnLista = favorites.find(
    (producto) => producto.id === productoId
  );
  const botonFavorito = document.querySelector(`[data-id="${productoId}"]`);
  if (productoEnLista) {
    // si el producto esta en favoritos, lo saca de la lista
    favorites.splice(favorites.indexOf(productoEnLista), 1);
    sacarDeFavoritos(productoId);
    botonFavorito.innerHTML =
      '<i class="far fa-heart pointer-events-none"></i>';
  } else {
    // y si el producto no esta en favoritos, lo agrega a la lista
    const productoSeleccionado = productos.find(
      (producto) => producto.id === productoId
    );
    if (productoSeleccionado) {
      favorites.push(productoSeleccionado);
      añadirAFavoritos(productoId);
      botonFavorito.innerHTML =
        '<i class="fa fa-heart pointer-events-none boton-presionado "></i>'; // cambia el icono a un corazon entero
    }
  }

  // guarda favoritos en el localstorage
  saveFavoritesToLocalStorage(favorites);
}
function mostrarFavoritos() {
  const favorites = getFavoritesFromLocalStorage();
  let favoritosMensaje = "Productos en favoritos:<br><hr>";

  if (favorites.length === 0) {
    favoritosMensaje = "No tienes productos en favoritos.";
  } else {
    favorites.forEach((favorito) => {
      favoritosMensaje += `
      <br>
      <div class="flex items-center">
      <div class="w-1/4">
        <img src="imgs/${
          favorito.imagen || "producto-no-encontrado.jpg"
        }" alt="${favorito.nombre}" style="width: 100px; height: 100px;">
        </div>
        <div class="w-1/2 font-bold text-xl">
          <span>${favorito.nombre}</span>
          <div>Precio: $${favorito.precio}</div>
          
        </div>
      </div>
      <br>
      <hr>
    `;
    });
  }

  //muestra los favoritos en swal
  Swal.fire({
    title: "Favoritos",
    html: favoritosMensaje,
    icon: "info",
    confirmButtonText: "Cerrar",
    showCloseButton: true,
  });
}

//verifica si el boton "btnMostrarFavoritos" existe en la pagina
const btnMostrarFavoritos = document.getElementById("btnMostrarFavoritos");
if (btnMostrarFavoritos) {
  btnMostrarFavoritos.addEventListener("click", mostrarFavoritos);
}
//panel desplegable del carrito
let carritoPanelAbierto = false;

function finalizarCompra() {
  const spinnerContainer = document.querySelector(".spinner-container");
  spinnerContainer.style.display = "flex";

  //vacia el carrito y el total del carrito en el localstorage
  localStorage.removeItem("carrito");
  localStorage.removeItem("totalCarrito");
  carrito = [];
  total = 0;
  actualizarProductosEnCarrito();

  setTimeout(function () {
    //oculta el spinner loading
    spinnerContainer.style.display = "none";

    Swal.fire({
      icon: "success",
      title: "Compra realizada",
      text: "La compra se ha realizado con exito!. Gracias por tu compra!",
    });
  }, 1500);
}

function toggleCarritoPanel() {
  const carritoPanel = document.getElementById("carritoPanel");
  carritoPanelAbierto = !carritoPanelAbierto; //cambia el estado (abierto/ cerrado)
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
  const contenedorBotonesCarrito = document.getElementById("contenedorBotones");

  const totalCarritoDiv = document.getElementById("totalCarrito");
  totalCarritoDiv.innerHTML = `<h1 class="mx-auto items-center flex">Total del carrito: $${totalCarrito}</h1>
  `;
  totalCarritoDiv.appendChild(contenedorBotonesCarrito);
  const hayElementosEnCarrito = carrito.length > 0;

  if (btnVaciarCarrito) {
    btnVaciarCarrito.style.display = hayElementosEnCarrito ? "block" : "none";
  }

  if (btnFinalizarCompra) {
    btnFinalizarCompra.style.display = hayElementosEnCarrito ? "block" : "none";
  }
}

// muestra u oculta los botones vaciar carrito y finalizar compra segun si hay elementos en el carrito o no

function vaciarCarrito() {
  Swal.fire({
    title: "¿Seguro que queres vaciar el carrito?",
    text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Si, vaciar carrito",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      total = 0;
      localStorage.removeItem("carrito");
      localStorage.removeItem("totalCarrito");
      actualizarProductosEnCarrito();
      Swal.fire({
        icon: "success",
        title: "Carrito vaciado",
        text: "El carrito se ha vaciado correctamente.",
      });
    }
  });
}

const BtnVaciarCarrito = document.getElementById("btnVaciarCarrito");
if (BtnVaciarCarrito) {
  BtnVaciarCarrito.addEventListener("click", vaciarCarrito);
}
function agregarProducto(productoId) {
  const productoSeleccionado = carrito.find(
    (producto) => producto.id === productoId
  );

  if (productoSeleccionado) {
    productoSeleccionado.cantidad++;
  } else {
    const producto = productos.find((producto) => producto.id === productoId);
    if (producto) {
      producto.cantidad = 1;
      carrito.push(producto);
    }
  }
  actualizarCarritoLocalStorage();
  actualizarProductosEnCarrito();
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
      productoSeleccionado.cantidad--;
    } else {
      // si la cantidad es < 1, elimina el producto del carrito
      carrito = carrito.filter((producto) => producto.id !== productoId);
    }
    actualizarCarritoLocalStorage();
    actualizarProductosEnCarrito();
  }
  function actualizarCarritoLocalStorage() {
    const carritoJSON = JSON.stringify(carrito);
    localStorage.setItem("carrito", carritoJSON);
  }
}
