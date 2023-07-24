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

// function productoTienda(totalProducto, costo, cantidad) {
//   return totalProducto + costo * cantidad;
// }

// const productos = [
//   { nombre: "Matizador", precio: 1500 },
//   { nombre: "Shampoo", precio: 990 },
//   { nombre: "Acondicionador anti-caspa", precio: 2300 },
//   { nombre: "Navaja", precio: 250 },
//   { nombre: "Rasuradora", precio: 33900 },
// ];

// let total = 0;
// let opcion;
// let comenzar;
// let carrito = [];

// alert("Bienvenido a la tienda online de Blest BarberShop");

// do {
//   // Mostrar las opciones de productos
//   let opciones = "Selecciona un producto mediante un número \n";
//   for (let i = 0; i < productos.length; i++) {
//     opciones += i + 1 + "-" + productos[i].nombre + "\n";
//   }

//   let seleccionValida = false;
//   while (!seleccionValida) {
//     opcion = parseInt(prompt(opciones));
//     if (opcion >= 1 && opcion <= productos.length) {
//       seleccionValida = true;
//       const producto = productos[opcion - 1];
//       let cantidadProductos;

//       while (true) {
//         cantidadProductos = parseInt(
//           prompt(
//             "El precio de " +
//               producto.nombre +
//               " es $" +
//               producto.precio +
//               ". Cuantas unidades quiere comprar?"
//           )
//         );

//         if (cantidadProductos >= 1) {
//           break;
//         } else {
//           alert("Ingrese una cantidad valida, por favor.");
//         }
//       }

//       total = productoTienda(total, producto.precio, cantidadProductos);
//       alert("El precio total hasta el momento es $" + total);

//       carrito.push({
//         nombre: producto.nombre,
//         precio: producto.precio,
//         cantidad: cantidadProductos,
//       });
//     } else {
//       alert("Ingrese una opcion valida, por favor.");
//     }
//   }
//   comenzar = prompt("Queres seguir comprando?\n1 - Si\n2 - No");
// } while (comenzar !== "2" && comenzar === "1");

// let metodoPago;
// let metodoPagoTexto;
// let recargo = 0;

// do {
//   metodoPago = parseInt(
//     prompt(
//       "Con que metodo de pago vas a abonar?\n\n1. Efectivo\n2. Tarjeta de credito (15% de recargo)\n3. Tarjeta de debito (10% de recargo)"
//     )
//   );

//   switch (metodoPago) {
//     case 1:
//       metodoPagoTexto = "Efectivo";
//       recargo = 0;
//       break;
//     case 2:
//       metodoPagoTexto = "Tarjeta de credito";
//       recargo = 0.15;
//       break;
//     case 3:
//       metodoPagoTexto = "Tarjeta de debito";
//       recargo = 0.1;
//       break;
//     default:
//       metodoPagoTexto = "Metodo de pago no valido";
//   }
// } while (metodoPago !== 1 && metodoPago !== 2 && metodoPago !== 3);

// const totalConRecargo = Math.round(total + total * recargo);
// alert(
//   "Como seleccionaste como metodo de pago: " +
//     metodoPagoTexto +
//     ". \nEl total a pagar con el recargo incluido es $" +
//     totalConRecargo +
//     ".\nGracias por la confianza y por elegirnos! \n\nBlest BarberShop."
// );

// document
//   .getElementById("btnMostrarCarrito")
//   .addEventListener("click", function () {
//     let carritoMensaje = "Productos en el carrito:\n";
//     let totalCarrito = 0;
//     let productosAgrupados = {};

//     for (let i = 0; i < carrito.length; i++) {
//       const producto = carrito[i];
//       const nombreProducto = producto.nombre;
//       const cantidad = producto.cantidad;

//       if (productosAgrupados.hasOwnProperty(nombreProducto)) {
//         productosAgrupados[nombreProducto].cantidad += cantidad;
//         productosAgrupados[nombreProducto].subtotal +=
//           producto.precio * cantidad;
//       } else {
//         productosAgrupados[nombreProducto] = {
//           cantidad: cantidad,
//           subtotal: producto.precio * cantidad,
//         };
//       }

//       totalCarrito += producto.precio * cantidad;
//     }

//     for (const nombreProducto in productosAgrupados) {
//       const productoAgrupado = productosAgrupados[nombreProducto];
//       carritoMensaje += `${productoAgrupado.cantidad}x ${nombreProducto} (${productoAgrupado.subtotal}$)\n`;
//     }

//     const totalConRecargo = Math.round(totalCarrito + totalCarrito * recargo);
//     carritoMensaje += `\nTotal del carrito con recargo: $${totalConRecargo}`;

//     alert(carritoMensaje);
//   });

// document
//   .getElementById("btnBuscarProducto")
//   .addEventListener("click", function () {
//     const nombreProducto = prompt(
//       "Ingrese el nombre del producto que deseas buscar:"
//     );
//     let productoEncontrado = false;

//     const options = {
//       keys: ["nombre"],
//       threshold: 0.4,
//     };

//     const fuse = new Fuse(productos, options);
//     const resultados = fuse.search(nombreProducto);

//     if (resultados.length > 0) {
//       let mensaje = "Resultados de busqueda:\n";
//       for (let i = 0; i < resultados.length; i++) {
//         const producto = resultados[i].item;
//         mensaje += `Producto: ${producto.nombre}\n Precio: $${producto.precio}\n`;
//       }
//       alert(mensaje);
//     } else {
//       alert("No se encontraron productos que coincidan con la busqueda.");
//     }
//   });

// function productoTienda(totalProducto, costo, cantidad) {
//   return totalProducto + costo * cantidad;
// }

// const productos = [
//   { nombre: "Matizador", precio: 1500 },
//   { nombre: "Shampoo", precio: 990 },
//   { nombre: "Acondicionador anti-caspa", precio: 2300 },
//   { nombre: "Navaja", precio: 250 },
//   { nombre: "Rasuradora", precio: 33900 },
// ];

// let total = 0;
// let opcion;
// let comenzar;
// let carrito = [];

// alert("Bienvenido a la tienda online de Blest BarberShop");

// do {
//   // Mostrar las opciones de productos
//   let opciones = "Selecciona un producto mediante un número \n";
//   for (let i = 0; i < productos.length; i++) {
//     opciones += i + 1 + "-" + productos[i].nombre + "\n";
//   }

//   let seleccionValida = false;
//   while (!seleccionValida) {
//     opcion = parseInt(prompt(opciones));
//     seleccionValida = opcion >= 1 && opcion <= productos.length ? true : false;
//     const producto = productos[opcion - 1];
//     let cantidadProductos;

//     while (true) {
//       cantidadProductos = parseInt(
//         prompt(
//           "El precio de " +
//             producto.nombre +
//             " es $" +
//             producto.precio +
//             ". Cuantas unidades quiere comprar?"
//         )
//       );

//       if (cantidadProductos >= 1) {
//         break;
//       } else {
//         alert("Ingrese una cantidad valida, por favor.");
//       }
//     }

//     total = productoTienda(total, producto.precio, cantidadProductos);
//     alert("El precio total hasta el momento es $" + total);

//     carrito.push({
//       nombre: producto.nombre,
//       precio: producto.precio,
//       cantidad: cantidadProductos,
//     });
//   }
//   comenzar = prompt("Queres seguir comprando?\n1 - Si\n2 - No");
// } while (comenzar === "1");

// let metodoPago;
// let metodoPagoTexto;
// let recargo = 0;

// do {
//   metodoPago = parseInt(
//     prompt(
//       "Con que metodo de pago vas a abonar?\n\n1. Efectivo\n2. Tarjeta de credito (15% de recargo)\n3. Tarjeta de debito (10% de recargo)"
//     )
//   );

//   metodoPagoTexto =
//     metodoPago === 1
//       ? "Efectivo"
//       : metodoPago === 2
//       ? ((recargo = 0.15), "Tarjeta de credito")
//       : metodoPago === 3
//       ? ((recargo = 0.1), "Tarjeta de debito")
//       : "Metodo de pago no valido";
// } while (metodoPago !== 1 && metodoPago !== 2 && metodoPago !== 3);

// const totalConRecargo = Math.round(total + total * recargo);
// // alert(
// //   "Como seleccionaste como metodo de pago: " +
// //     metodoPagoTexto +
// //     ". \nEl total a pagar con el recargo incluido es $" +
// //     totalConRecargo +
// //     ".\nGracias por la confianza y por elegirnos! \n\nBlest BarberShop."
// // );

// Swal.fire(
//   `Como seleccionaste como metodo de pago ${metodoPagoTexto}, el total a pagar con el recargo incluido es, $${totalConRecargo}`
// ).then(() => {
//   Swal.fire(
//     "Perfecto!",
//     "Tu compra ha sido realizada con exito, gracias por confiar en BlestBarberShop",
//     "success"
//   );
// });
// document
//   .getElementById("btnMostrarCarrito")
//   .addEventListener("click", function () {
//     let carritoMensaje = "Productos en el carrito:\n";
//     let totalCarrito = 0;
//     let productosAgrupados = {};

//     for (let i = 0; i < carrito.length; i++) {
//       const producto = carrito[i];
//       const nombeProducto = producto.nombre;
//       const cantidad = producto.cantidad;

//       if (productosAgrupados.hasOwnProperty(nombreProducto)) {
//         productosAgrupados[nombreProducto].cantidad += cantidad;
//         productosAgrupados[nombreProducto].subtotal +=
//           producto.precio * cantidad;
//       } else {
//         productosAgrupados[nombreProducto] = {
//           cantidad: cantidad,
//           subtotal: producto.precio * cantidad,
//         };
//       }

//       totalCarrito += producto.precio * cantidad;
//     }

//     for (const nombreProducto in productosAgrupados) {
//       const productoAgrupado = productosAgrupados[nombreProducto];
//       carritoMensaje += `${productoAgrupado.cantidad}x ${nombreProducto} (${productoAgrupado.subtotal}$)\n`;
//     }

//     const totalConRecargo = Math.round(totalCarrito + totalCarrito * recargo);
//     carritoMensaje += `\nTotal del carrito con recargo: $${totalConRecargo}`;

//     alert(carritoMensaje);
//   });

// document
//   .getElementById("btnBuscarProducto")
//   .addEventListener("click", function () {
//     const nombreProducto = prompt(
//       "Ingrese el nombre del producto que deseas buscar:"
//     );
//     let productoEncontrado = false;

//     const options = {
//       keys: ["nombre"],
//       threshold: 0.4,
//     };

//     const fuse = new Fuse(productos, options);
//     const resultados = fuse.search(nombreProducto);

//     if (resultados.length > 0) {
//       let mensaje = "Resultados de busqueda:\n";
//       for (let i = 0; i < resultados.length; i++) {
//         const producto = resultados[i].item;
//         mensaje += `Producto: ${producto.nombre}\n Precio: $${producto.precio}\n`;
//       }
//       alert(mensaje);
//     } else {
//       alert("No se encontraron productos que coincidan con la busqueda.");
//     }
//   });

//
//
//
//
//
//
//
///
//
//
//
///
///
//
//
///
//
//
//
//  //
//
//
///
//
//
//
///
///
//
//
///
//
//
//
//

// function productoTienda(totalProducto, costo, cantidad) {
//   return totalProducto + costo * cantidad;
// }

// const productos = [
//   { nombre: "Matizador", precio: 1500 },
//   { nombre: "Shampoo", precio: 2000 },
//   { nombre: "Acondicionador anti-caspa", precio: 2300 },
//   { nombre: "Navaja", precio: 600 },
//   { nombre: "Rasuradora", precio: 33900 },
//   { nombre: "Maquina de pelo", precio: 40000 },
// ];

// let total = 0;
// let opcion;
// let comenzar;
// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// let recargoMetodoPago = 0; // Variable para almacenar el recargo del método de pago seleccionado

// const mostrarOpcionesProducto = async () => {
//   let opciones = "<p>Seleccioná un producto mediante un número:</p><br>";
//   for (let i = 0; i < productos.length; i++) {
//     opciones += `<p>${i + 1}. ${productos[i].nombre}</p>`;
//   }

//   let seleccionValida = false;
//   while (!seleccionValida) {
//     const { value: option } = await Swal.fire({
//       title: "Elegí un producto",
//       html: opciones,
//       input: "number",
//       inputValidator: (value) => {
//         if (!value || value < 1 || value > productos.length) {
//           return "Ingresá una opción válida";
//         }
//       },
//       customClass: {
//         popup: "swal2-popup-dark",
//       },
//     });

//     opcion = parseInt(option);
//     seleccionValida = opcion >= 1 && opcion <= productos.length;
//     const producto = productos[opcion - 1];
//     let cantidadProductos;

//     while (true) {
//       const { value: cantidad } = await Swal.fire({
//         title: `El precio de ${producto.nombre} es $${producto.precio}`,
//         text: "Cuantas unidades querés comprar?",
//         input: "number",
//         inputValidator: (value) => {
//           if (!value || value < 1) {
//             return "Ingresá una cantidad válida";
//           }
//         },
//       });

//       cantidadProductos = parseInt(cantidad);

//       if (cantidadProductos >= 1) {
//         break;
//       }
//     }

//     total = productoTienda(total, producto.precio, cantidadProductos);

//     carrito.push({
//       nombre: producto.nombre,
//       precio: producto.precio,
//       cantidad: cantidadProductos,
//     });
//   }

//   const { value: continuar } = await Swal.fire({
//     title: "Querés seguir comprando?",
//     text: `El precio total hasta el momento es $${total}`,
//     icon: "question",
//     showCancelButton: true,
//     confirmButtonText: "Si",
//     cancelButtonText: "No",
//   });

//   comenzar = continuar ? "1" : "2";

//   if (comenzar === "1") {
//     mostrarOpcionesProducto();
//   } else {
//     mostrarMetodoPago();
//   }
// };

// const mostrarMetodoPago = async () => {
//   let metodoPago;
//   let metodoPagoTexto;

//   const { value: metodo } = await Swal.fire({
//     title: "Selecciona el método de pago",
//     html: `<select id="metodoPago" class="swal2-input">
//       <option value="1">Efectivo</option>
//       <option value="2">Tarjeta de crédito (15% de recargo)</option>
//       <option value="3">Tarjeta de débito (10% de recargo)</option>
//     </select>`,
//     preConfirm: () => {
//       return document.getElementById("metodoPago").value;
//     },
//   });

//   metodoPago = parseInt(metodo);

//   switch (metodoPago) {
//     case 1:
//       metodoPagoTexto = "Efectivo";
//       recargoMetodoPago = 0;
//       break;
//     case 2:
//       recargoMetodoPago = 0.15;
//       metodoPagoTexto = "Tarjeta de crédito";
//       break;
//     case 3:
//       recargoMetodoPago = 0.1;
//       metodoPagoTexto = "Tarjeta de débito";
//       break;
//     default:
//       Swal.fire("Método de pago no válido");
//       mostrarMetodoPago();
//       return;
//   }

//   const totalConRecargo = Math.round(total + total * recargoMetodoPago);
//   // Convertir el carrito a formato JSON
//   const carritoJSON = JSON.stringify(carrito);

//   // Guardar el carrito en el localStorage
//   localStorage.setItem("carrito", carritoJSON);
//   localStorage.setItem(
//     "metodoPago",
//     JSON.stringify({
//       metodo: metodoPago,
//       recargo: recargoMetodoPago,
//     })
//   );

//   Swal.fire(
//     `Como seleccionaste como metodo de pago ${metodoPagoTexto}, el total a pagar con el recargo incluido es $${totalConRecargo}`
//   ).then(() => {
//     Swal.fire(
//       "Perfecto!",
//       "Tu compra ha sido realizada con éxito, gracias por confiar en BlestBarberShop",
//       "success"
//     );
//   });
// };

// document
//   .getElementById("btnMostrarCarrito")
//   .addEventListener("click", function () {
//     let carritoMensaje = "Productos en el carrito:\n";
//     let totalCarrito = 0;
//     let productosAgrupados = {};

//     for (let i = 0; i < carrito.length; i++) {
//       const producto = carrito[i];
//       const nombreProducto = producto.nombre;
//       const cantidad = producto.cantidad;

//       if (productosAgrupados.hasOwnProperty(nombreProducto)) {
//         productosAgrupados[nombreProducto].cantidad += cantidad;
//         productosAgrupados[nombreProducto].subtotal +=
//           producto.precio * cantidad;
//       } else {
//         productosAgrupados[nombreProducto] = {
//           cantidad: cantidad,
//           subtotal: producto.precio * cantidad,
//         };
//       }

//       totalCarrito += producto.precio * cantidad;
//     }

//     let subtotal = totalCarrito; // subtotal sin recargo

//     if (recargoMetodoPago !== 0) {
//       subtotal = Math.round(subtotal - subtotal * recargoMetodoPago); // resta el recargo al subtotal
//       totalCarrito = Math.round(
//         totalCarrito + totalCarrito * recargoMetodoPago
//       );
//     }

//     for (const nombreProducto in productosAgrupados) {
//       const productoAgrupado = productosAgrupados[nombreProducto];
//       carritoMensaje += `${productoAgrupado.cantidad}x ${nombreProducto} (${productoAgrupado.subtotal}$)\n `;
//     }

//     if (recargoMetodoPago !== 0) {
//       carritoMensaje += `\nTotal del carrito con recargo: $${totalCarrito}`; //muestra el total del carrito con el recargo incluido
//     }
//     // const carritoMensajeConfig = {
//     //   title: "Productos en el carrito",
//     //   html: document.getElementById("btnVaciarCarrito"), // Agregamos el botón personalizado aquí
//     //   showCancelButton: true,
//     //   showCloseButton: true,
//     //   showConfirmButton: true,
//     // };
//     const hayElementosEnCarrito = carrito.length > 0; // para ver si hay elementos en el carrito
//     Swal.fire({
//       title: carritoMensaje,
//       showConfirmButton: hayElementosEnCarrito,
//       showCancelButton: true,
//       cancelButtonText: "Ok",
//       confirmButtonText: "Vaciar Carrito",
//       confirmButtonColor: "red",
//       showCloseButton: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Vaciar el carrito
//         carrito = [];
//         // Reiniciar el total
//         totalCarrito = 0;
//         // Reiniciar el recargo del método de pago
//         recargoMetodoPago = 0;

//         // Limpiar el localStorage
//         localStorage.removeItem("carrito");
//         localStorage.removeItem("totalCarrito");

//         // Mostrar un mensaje de éxito al usuario
//         Swal.fire({
//           icon: "success",
//           title: "Carrito vaciado",
//           text: "El carrito se ha vaciado correctamente.",
//         });
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         // Aquí puedes ejecutar alguna acción al cancelar
//         console.log("Botón Cancelar presionado");
//       }
//     });
//   });
// document
//   .getElementById("btnBuscarProducto")
//   .addEventListener("click", async function () {
//     const { value: nombreProducto } = await Swal.fire({
//       title: "Buscar producto",
//       input: "text",
//       inputPlaceholder: "Ingresá el nombre del producto que querés buscar",
//     });

//     if (nombreProducto) {
//       let mensaje = "Resultados de búsqueda:\n";
//       const options = {
//         keys: ["nombre"],
//         threshold: 0.4,
//       };

//       const fuse = new Fuse(productos, options);
//       const resultados = fuse.search(nombreProducto);

//       if (resultados.length > 0) {
//         for (let i = 0; i < resultados.length; i++) {
//           const producto = resultados[i].item;
//           mensaje += `Producto: ${producto.nombre}\n Precio: $${producto.precio}\n`;
//         }
//       } else {
//         mensaje = "No se encontraron productos que coincidan con la búsqueda.";
//       }

//       Swal.fire(mensaje);
//     }
//   });
// document
//   .getElementById("btnVaciarCarrito")
//   .addEventListener("click", function () {
//     // Vaciar el carrito
//     carrito = [];
//     // Reiniciar el total
//     total = 0;
//     // Reiniciar el recargo del método de pago
//     recargoMetodoPago = 0;

//     // Limpiar el localStorage
//     localStorage.removeItem("carrito");

//     // Mostrar un mensaje de éxito al usuario
//     Swal.fire({
//       icon: "success",
//       title: "Carrito vaciado",
//       text: "El carrito se ha vaciado correctamente.",
//     });
//   });

// mostrarOpcionesProducto();

// // const respuestaJSON =
// //   '{"nombre":"Shampoo","precio":990,"categoria":"Cuidado personal"}';
// // const respuestaObjeto = JSON.stringify(productos);
// // console.log(respuestaObjeto);

// function agregarAlCarrito() {
//   let botones = document.querySelectorAll(".btnAgregarAlCarrito");
//   for (const boton of botones) {
//     boton.onclick = (e) => {
//       const productoId = parseInt(e.target.id);
//       const productoSeleccionado = productos.find(
//         (producto) => producto.id === productoId
//       );

//       if (productoSeleccionado) {
//         new swal({
//           title: "Desea agregar el producto al carrito?",
//           text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,

//           buttons: ["Cancelar", "Aceptar"],
//         }).then((respuesta) => {
//           if (respuesta.value) {
//             carrito.push(productoSeleccionado);
//             console.log(carrito);
//           }
//         });
//       }
//     };
//   }

//   agregarAlCarrito();
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
///
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// function productoTienda(totalProducto, costo, cantidad) {
//   return totalProducto + costo * cantidad;
// }

// const productos = [
//   { id: 1, nombre: "Matizador", precio: 1500 },
//   { id: 2, nombre: "Shampoo", precio: 2000 },
//   { id: 3, nombre: "Acondicionador anti-caspa", precio: 2300 },
//   { id: 4, nombre: "Navaja", precio: 600 },
//   { id: 5, nombre: "Rasuradora", precio: 33900 },
//   { id: 6, nombre: "Maquina de pelo", precio: 40000 },
// ];
// const productos = [
//   {
//     id: 1,
//     nombre: "Matizador",
//     categoria: "MATIZADOR",
//     precio: 1500,
//     precioAnterior: 1899,
//     imagen: "matizador.jpg",
//   },
//   {
//     id: 2,
//     nombre: "Shampoo Kerastase",
//     categoria: "SHAMPOO",
//     precio: 2000,
//     precioAnterior: 2699,
//     imagen: "shampo.webp",
//   },
//   {
//     id: 3,
//     nombre: "Acondicionador richissime exel",
//     categoria: "ACONDICIONADOR",
//     precio: 2300,
//     precioAnterior: 2999,
//     imagen: "acondicionador.webp",
//   },
//   {
//     id: 4,
//     nombre: "Navaja",
//     categoria: "NAVAJA",
//     precio: 600,
//     precioAnterior: 999,
//     imagen: "navaja.webp",
//   },
//   {
//     id: 5,
//     nombre: "Rasuradora",
//     categoria: "RASURADORA",
//     precio: 36000,
//     precioAnterior: 33900,
//     imagen: "rasuradora.web.jpg",
//   },
//   {
//     id: 6,
//     nombre: "Maquina",
//     categoria: "MAQUINA",
//     precio: 44000,
//     precioAnterior: 40000,
//     imagen: "12660-master-cordless-li-clipper-mlc-straight-stand-6.webp",
//   },
// ];

// let total = 0;
// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
// let recargoMetodoPago = 0;
// function asignarEventosAgregarAlCarrito() {
//   // agarra todos los botones con la clase "btnAgregarAlCarrito"
//   const botonesAgregarAlCarrito = document.querySelectorAll(
//     ".btnAgregarAlCarrito"
//   );
//   botonesAgregarAlCarrito.forEach((boton) => {
//     boton.addEventListener("click", (event) => {
//       const productoId = parseInt(event.target.dataset.id);
//       const productoSeleccionado = productos.find(
//         (producto) => producto.id === productoId
//       );

//       if (productoSeleccionado) {
//         Swal.fire({
//           title: "¿Quieres agregar este producto al carrito?",
//           text: `${productoSeleccionado.nombre}, precio: ${productoSeleccionado.precio}`,
//           showCancelButton: true,
//           confirmButtonText: "Sí",
//           cancelButtonText: "No",
//           icon: "question",
//         }).then((result) => {
//           if (result.isConfirmed) {
//             Swal.fire({
//               title: "Ingresa la cantidad que deseas agregar:",
//               input: "number",
//               inputValidator: (value) => {
//                 if (!value || parseInt(value) <= 0) {
//                   return "Ingresa una cantidad válida (mayor a cero).";
//                 }
//               },
//               showCancelButton: true,
//               confirmButtonText: "Agregar",
//               cancelButtonText: "Cancelar",
//               icon: "question",
//             }).then((result) => {
//               if (result.isConfirmed) {
//                 const cantidadProducto = parseInt(result.value);

//                 productoSeleccionado.cantidad = cantidadProducto;
//                 carrito.push(productoSeleccionado);
//                 console.log(carrito);

//                 const carritoJSON = JSON.stringify(carrito);

//                 localStorage.setItem("carrito", carritoJSON);

//                 let carritoMensaje = "Productos en el carrito:\n";
//                 for (let i = 0; i < carrito.length; i++) {
//                   const producto = carrito[i];
//                   const cantidad = producto.cantidad;
//                   carritoMensaje += `${cantidad}x ${producto.nombre} ($${
//                     producto.precio * cantidad
//                   })\n`;
//                 }

//                 let totalCarrito = 0;
//                 for (let i = 0; i < carrito.length; i++) {
//                   const producto = carrito[i];
//                   const cantidad = producto.cantidad;
//                   totalCarrito += producto.precio * cantidad;
//                 }

//                 // recargo (en un futuro pondre recargo segun el metodo de pago)
//                 const recargoPorcentaje = 0;
//                 totalCarrito += totalCarrito * recargoPorcentaje;
//                 Swal.fire(
//                   "Perfecto!",
//                   `Se ha(n) añadido ${cantidadProducto} ${productoSeleccionado.nombre}(s) exitosamente!`,
//                   "success"
//                 );
//               }
//             });
//           }
//         });
//       }
//     });
//   });
// }
// asignarEventosAgregarAlCarrito();
// document
//   .getElementById("btnMostrarCarrito")
//   .addEventListener("click", function () {
//     // Mostrar el carrito
//     let carritoMensaje = "Productos en el carrito:\n";
//     let subtotal = 0; // Subtotal sin recargo

//     for (let i = 0; i < carrito.length; i++) {
//       const producto = carrito[i];
//       const nombreProducto = producto.nombre;
//       const cantidad = producto.cantidad; // Agregar la cantidad del producto al carrito

//       subtotal += producto.precio * cantidad; // Actualizar el subtotal con el precio del producto y la cantidad

//       carritoMensaje += `${cantidad}x ${nombreProducto} (${
//         producto.precio * cantidad
//       }$)\n`;
//     }

//     // Calcular el total con recargo
//     const totalConRecargo = Math.round(subtotal + subtotal * recargoMetodoPago);
//     carritoMensaje += `\nTotal del carrito: $${totalConRecargo}`;

//     const hayElementosEnCarrito = carrito.length > 0; // para ver si hay elementos en el carrito
//     Swal.fire({
//       title: carritoMensaje,
//       showConfirmButton: hayElementosEnCarrito,
//       showCancelButton: true,
//       cancelButtonText: "Ok",
//       confirmButtonText: "Vaciar Carrito",
//       confirmButtonColor: "red",
//       showCloseButton: true,
//     }).then((result) => {
//       if (result.isConfirmed) {
//         // Vaciar el carrito
//         carrito = [];
//         // Reiniciar el total
//         subtotal = 0;
//         // Reiniciar el recargo del método de pago
//         recargoMetodoPago = 0;

//         // Limpiar el localStorage
//         localStorage.removeItem("carrito");
//         localStorage.removeItem("totalCarrito");

//         // Mostrar un mensaje de éxito al usuario
//         Swal.fire({
//           icon: "success",
//           title: "Carrito vaciado",
//           text: "El carrito se ha vaciado correctamente.",
//         });
//       } else if (result.dismiss === Swal.DismissReason.cancel) {
//         // Aquí puedes ejecutar alguna acción al cancelar
//         console.log("Botón Cancelar presionado");
//       }
//     });
//   });

// document
//   .getElementById("inputBuscarProducto")
//   .addEventListener("input", function () {
//     const searchTerm = this.value.trim().toLowerCase();

//     const resultados = productos.filter((producto) =>
//       producto.nombre.toLowerCase().includes(searchTerm)
//     );

//     const listaProductos = document.getElementById("listaProductos");

//     while (listaProductos.firstChild) {
//       listaProductos.removeChild(listaProductos.firstChild);
//     }

//     if (resultados.length > 0) {
//       resultados.forEach((producto) => {
//         const productoElemento = document.createElement("div");
//         productoElemento.classList.add("product-card");

//         productoElemento.innerHTML = `
//         <div class="badge">Hot SALE</div>
//         <div class="product-tumb">
//           <a href=""><img src="imgs/${
//             producto.imagen || "producto-no-encontrado.jpg"
//           }" alt="${producto.nombre}"${
//           producto.nombre === "Navaja"
//             ? ' class="py-10 max-h-400 bg-white"'
//             : ""
//         }></a>
//         </div>
//         <div class="product-details">
//           <span class="product-catagory">${producto.categoria}</span>
//           <h4><a href="">${producto.nombre}</a></h4>
//           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
//           <div class="product-bottom-details">
//             <div class="product-price"><small>$${
//               producto.precioAnterior
//             }</small>$${producto.precio}</div>
//             <div class="product-links">
//               <button><a href=""><i class="fa fa-heart"></i></a></button>
//               <button data-id="${
//                 producto.id
//               }" class="btnAgregarAlCarrito"><i class="fa fa-shopping-cart relative z-0 pointer-events-none"></i></button>
//             </div>
//           </div>
//         </div>`;

//         listaProductos.appendChild(productoElemento);
//       });
//     } else {
//       productos.forEach((producto) => {});
//     }
//     asignarEventosAgregarAlCarrito();
//   });

// const productos1 = [
//   {
//     id: 1,
//     nombre: "Matizador",
//     categoria: "MATIZADOR",
//     precio: 1500,
//     precioAnterior: 1899,
//     imagen: "matizador.jpg",
//   },
//   {
//     id: 2,
//     nombre: "Shampoo Kerastase",
//     categoria: "SHAMPOO",
//     precio: 2000,
//     precioAnterior: 2699,
//     imagen: "shampo.webp",
//   },
//   {
//     id: 3,
//     nombre: "Acondicionador richissime exel",
//     categoria: "ACONDICIONADOR",
//     precio: 2300,
//     precioAnterior: 2999,
//     imagen: "acondicionador.webp",
//   },
//   {
//     id: 4,
//     nombre: "Navaja",
//     categoria: "NAVAJA",
//     precio: 600,
//     precioAnterior: 999,
//     imagen: "navaja.webp",
//   },
//   {
//     id: 5,
//     nombre: "Rasuradora",
//     categoria: "RASURADORA",
//     precio: 36000,
//     precioAnterior: 33900,
//     imagen: "rasuradora.web.jpg",
//   },
//   {
//     id: 6,
//     nombre: "Maquina",
//     categoria: "MAQUINA",
//     precio: 44000,
//     precioAnterior: 40000,
//     imagen: "12660-master-cordless-li-clipper-mlc-straight-stand-6.webp",
//   },
// ];
//
//
//
//
//
///
//
//
//
//
///
//

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
    precio: 36000,
    precioAnterior: 33900,
    imagen: "rasuradora.web.jpg",
    favorito: false,
  },
  {
    id: 6,
    nombre: "Maquina",
    categoria: "MAQUINA",
    precio: 44000,
    precioAnterior: 40000,
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

function mostrarCarrito() {
  let carritoMensaje = "Productos en el carrito:\n";
  let subtotal = 0; // Subtotal sin recargo

  for (let i = 0; i < carrito.length; i++) {
    const producto = carrito[i];
    const nombreProducto = producto.nombre;
    const cantidad = producto.cantidad; // Agregar la cantidad del producto al carrito

    subtotal += producto.precio * cantidad; // Actualizar el subtotal con el precio del producto y la cantidad

    carritoMensaje += `${cantidad}x ${nombreProducto} ($${
      producto.precio * cantidad
    })\n`;
  }

  // Calcular el total con recargo
  const totalConRecargo = Math.round(subtotal + subtotal * recargoMetodoPago);
  carritoMensaje += `\nTotal del carrito: $${totalConRecargo}`;

  const hayElementosEnCarrito = carrito.length > 0; // para ver si hay elementos en el carrito
  Swal.fire({
    title: carritoMensaje,
    showConfirmButton: hayElementosEnCarrito,
    showCancelButton: true,
    cancelButtonText: "Ok",
    confirmButtonText: "Vaciar Carrito",
    confirmButtonColor: "red",
    showCloseButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // Vaciar el carrito
      carrito = [];
      // Reiniciar el total
      subtotal = 0;
      // Reiniciar el recargo del método de pago
      recargoMetodoPago = 0;

      // Limpiar el localStorage
      localStorage.removeItem("carrito");
      localStorage.removeItem("totalCarrito");

      // Mostrar un mensaje de éxito al usuario
      Swal.fire({
        icon: "success",
        title: "Carrito vaciado",
        text: "El carrito se ha vaciado correctamente.",
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      // Aquí puedes ejecutar alguna acción al cancelar
      console.log("Botón Cancelar presionado");
    }
  });
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

                  mostrarCarrito();
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
  .getElementById("btnMostrarCarrito")
  .addEventListener("click", mostrarCarrito);

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
              <button><a href=""><i class="fa fa-heart"></i></a></button>
              <button data-id="${
                producto.id
              }" class="btnAgregarAlCarrito"><i class="fa fa-shopping-cart relative z-0 pointer-events-none"></i></button>
            </div>
          </div>
        </div>`;

        listaProductos.appendChild(productoElemento);
      });
    } else {
      productos.forEach((producto) => {});
    }
  });
