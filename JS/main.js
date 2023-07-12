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

function productoTienda(totalProducto, costo, cantidad) {
  return totalProducto + costo * cantidad;
}

const productos = [
  { nombre: "Matizador", precio: 1500 },
  { nombre: "Shampoo", precio: 990 },
  { nombre: "Acondicionador anti-caspa", precio: 2300 },
  { nombre: "Navaja", precio: 250 },
  { nombre: "Rasuradora", precio: 33900 },
];

let total = 0;
let opcion;
let comenzar;
let carrito = [];

alert("Bienvenido a la tienda online de Blest BarberShop");

do {
  // Mostrar las opciones de productos
  let opciones = "Selecciona un producto mediante un número \n";
  for (let i = 0; i < productos.length; i++) {
    opciones += i + 1 + "-" + productos[i].nombre + "\n";
  }

  let seleccionValida = false;
  while (!seleccionValida) {
    opcion = parseInt(prompt(opciones));
    if (opcion >= 1 && opcion <= productos.length) {
      seleccionValida = true;
      const producto = productos[opcion - 1];
      let cantidadProductos;

      while (true) {
        cantidadProductos = parseInt(
          prompt(
            "El precio de " +
              producto.nombre +
              " es $" +
              producto.precio +
              ". Cuantas unidades quiere comprar?"
          )
        );

        if (cantidadProductos >= 1) {
          break;
        } else {
          alert("Ingrese una cantidad valida, por favor.");
        }
      }

      total = productoTienda(total, producto.precio, cantidadProductos);
      alert("El precio total hasta el momento es $" + total);

      carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: cantidadProductos,
      });
    } else {
      alert("Ingrese una opcion valida, por favor.");
    }
  }
  comenzar = prompt("Queres seguir comprando?\n1 - Si\n2 - No");
} while (comenzar !== "2" && comenzar === "1");

let metodoPago;
let metodoPagoTexto;
let recargo = 0;

do {
  metodoPago = parseInt(
    prompt(
      "Con que metodo de pago vas a abonar?\n\n1. Efectivo\n2. Tarjeta de credito (15% de recargo)\n3. Tarjeta de debito (10% de recargo)"
    )
  );

  switch (metodoPago) {
    case 1:
      metodoPagoTexto = "Efectivo";
      recargo = 0;
      break;
    case 2:
      metodoPagoTexto = "Tarjeta de credito";
      recargo = 0.15;
      break;
    case 3:
      metodoPagoTexto = "Tarjeta de debito";
      recargo = 0.1;
      break;
    default:
      metodoPagoTexto = "Metodo de pago no valido";
  }
} while (metodoPago !== 1 && metodoPago !== 2 && metodoPago !== 3);

const totalConRecargo = Math.round(total + total * recargo);
alert(
  "Como seleccionaste como metodo de pago: " +
    metodoPagoTexto +
    ". \nEl total a pagar con el recargo incluido es $" +
    totalConRecargo +
    ".\nGracias por la confianza y por elegirnos! \n\n\nBlest BarberShop."
);

document
  .getElementById("btnMostrarCarrito")
  .addEventListener("click", function () {
    let carritoMensaje = "Productos en el carrito:\n";
    let totalCarrito = 0;
    let productosAgrupados = {};

    for (let i = 0; i < carrito.length; i++) {
      const producto = carrito[i];
      const nombreProducto = producto.nombre;
      const cantidad = producto.cantidad;

      if (productosAgrupados.hasOwnProperty(nombreProducto)) {
        productosAgrupados[nombreProducto].cantidad += cantidad;
        productosAgrupados[nombreProducto].subtotal +=
          producto.precio * cantidad;
      } else {
        productosAgrupados[nombreProducto] = {
          cantidad: cantidad,
          subtotal: producto.precio * cantidad,
        };
      }

      totalCarrito += producto.precio * cantidad;
    }

    for (const nombreProducto in productosAgrupados) {
      const productoAgrupado = productosAgrupados[nombreProducto];
      carritoMensaje += `${productoAgrupado.cantidad}x ${nombreProducto} (${productoAgrupado.subtotal}$)\n`;
    }

    const totalConRecargo = Math.round(totalCarrito + totalCarrito * recargo);
    carritoMensaje += `\nTotal del carrito con recargo: $${totalConRecargo}`;

    alert(carritoMensaje);
  });

document
  .getElementById("btnBuscarProducto")
  .addEventListener("click", function () {
    const nombreProducto = prompt(
      "Ingrese el nombre del producto que deseas buscar:"
    );
    let productoEncontrado = false;

    const options = {
      keys: ["nombre"],
      threshold: 0.4,
    };

    const fuse = new Fuse(productos, options);
    const resultados = fuse.search(nombreProducto);

    if (resultados.length > 0) {
      let mensaje = "Resultados de busqueda:\n";
      for (let i = 0; i < resultados.length; i++) {
        const producto = resultados[i].item;
        mensaje += `Producto: ${producto.nombre}\n Precio: $${producto.precio}\n`;
      }
      alert(mensaje);
    } else {
      alert("No se encontraron productos que coincidan con la busqueda.");
    }
  });
