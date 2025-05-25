// Constantes
const DESCUENTO_MENOR_2 = 0.9;
const DESCUENTO_2_12 = 0.4;
const DESCUENTO_MAYOR_65 = 0.6;
const RECARGO_TEMPORADA_ALTA = 0.15;
const RECARGO_TARJETA = 0.18;

// Función para calcular el precio según la edad
function calcularPrecioEdad(precioBase, edadPasajero) {
  if (edadPasajero < 2) {
    return precioBase * DESCUENTO_MENOR_2;
  } else if (edadPasajero > 2 && edadPasajero <= 12) {
    return precioBase * DESCUENTO_2_12;
  } else if (edadPasajero > 65) {
    return precioBase * DESCUENTO_MAYOR_65;
  } else {
    return precioBase;
  }
}

// Función para calcular el precio según la temporada
function calcularPrecioTemporada(precio, esTemporadaAlta) {
  if (esTemporadaAlta) {
    return precio * (1 + RECARGO_TEMPORADA_ALTA);
  } else {
    return precio;
  }
}

// Función para calcular el precio según el método de pago
function calcularPrecioMetodoPago(precio, metodo) {
  if (metodo.toLowerCase() === "tarjeta") {
    return precio * (1 + RECARGO_TARJETA);
  } else {
    return precio;
  }
}

// Función para calcular el precio final
function calcularPrecio() {
  const precioBase = 1000;
  const edadPasajero = document.getElementById("edadPasajero").value;
  const metodoPago = document.getElementById("metodoPago").value;
  const esTemporadaAlta = Math.random() < 0.5;

  let nuevoPrecio = calcularPrecioEdad(precioBase, edadPasajero);
  nuevoPrecio = calcularPrecioTemporada(nuevoPrecio, esTemporadaAlta);
  nuevoPrecio = calcularPrecioMetodoPago(nuevoPrecio, metodoPago);

  document.getElementById("resultado").textContent = `El precio del boleto es: ${nuevoPrecio.toFixed(2)}`;
}
