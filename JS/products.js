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

function agregarAlCarrito() {
  const carrito = [];
  const productos = [
    { id: 1, nombre: "Matizador", precio: 1500 },
    { id: 2, nombre: "Shampoo", precio: 2000 },
    { id: 3, nombre: "Acondicionador anti-caspa", precio: 2300 },
    { id: 4, nombre: "Navaja", precio: 600 },
    { id: 5, nombre: "Rasuradora", precio: 33900 },
    { id: 6, nombre: "Maquina de pelo", precio: 40000 },
  ];
  let botones = document.querySelectorAll(".btnAgregarAlCarrito");
  for (const boton of botones) {
    boton.onclick = (e) => {
      const productoId = parseInt(e.target.id);
      const productoSeleccionado = productos.find(
        (producto) => producto.id === productoId
      );

      if (productoSeleccionado) {
        new swal({
          title: "Desea agregar el producto al carrito?",
          text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,

          buttons: ["Cancelar", "Aceptar"],
        }).then((respuesta) => {
          if (respuesta.value) {
            carrito.push(productoSeleccionado);
            console.log(carrito);
          }
        });
      }
    };
  }
}

agregarAlCarrito();
