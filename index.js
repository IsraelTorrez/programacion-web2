/*
Varias funciones en JS
*/

function suma(a, b) {
    return a + b
}

const resta = function(a, b) {
    return a - b
}

const producto = (a, b) => a * b

const nombreCompleto = (nombre) => `Hola, cómo estas ${nombre}`

const resultado_suma = suma(2, 8)
const resultado_resta = resta(1, 5)
const resultado_producto = producto(3, 6)

console.log(resultado_suma)
console.log(resultado_resta)
console.log(resultado_producto)
console.log(nombreCompleto('Carlos'));