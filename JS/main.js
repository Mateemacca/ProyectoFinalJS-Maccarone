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

alert("Bievenido a la tienda online de Blest BarberShop");

do {
  // Mostrar las opciones de productos
  let opciones = "Selecciona un producto mediante un numero \n";
  for (let i = 0; i < 5; i++) {
    opciones += i + 1 + "-" + productos[i].nombre + "\n";
  }

  let seleccionValida = false;
  while (!seleccionValida) {
    opcion = parseInt(prompt(opciones));
    if (opcion >= 1 && opcion <= 5) {
      seleccionValida = true;
      const producto = productos[opcion - 1];
      const cantidadProductos = parseInt(
        prompt(
          "El precio de " +
            producto.nombre +
            " es $" +
            producto.precio +
            ". cuantas unidades desea comprar?"
        )
      );

      total = productoTienda(total, producto.precio, cantidadProductos);
      alert("El precio total hasta el momento es $" + total);
    } else {
      alert("Ingrese una opcion valida, por favor.");
    }
  }
  comenzar = prompt("Quieres seguir comprando? \n 1 - Si \n 2 - No");
  for (let i = 0; i < 2; i++) {
    opciones += i + 1 + ". " + productos[i].nombre + "\n";
  }
} while (comenzar !== "2" && comenzar == 1);

alert("Ok, entonces el precio subtotal es $" + total);

let metodoPago;
let metodoPagoTexto;
let recargo = 0;

do {
  metodoPago = parseInt(
    prompt(
      "¿Con que metodo de pago vas a abonar?\n\n1. Efectivo\n2. Tarjeta de credito (15% de recargo)\n3. Tarjeta de debito (10% de recargo)"
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
const totalConRecargo = Math.round(total + total * recargo); //math.round para redondear el precio si termina en .5 o mayor y .5 o menor
alert(
  "Como seleccionaste como metodo de pago: " +
    metodoPagoTexto +
    ". \nEl total a pagar con el recargo incluido es $" +
    totalConRecargo +
    ".\nGracias por la confianza y por elegirnos! \n\n\nBlest BarberShop."
);
