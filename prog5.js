function esPalindromo(cadena) {
    // Convertir la cadena a minúsculas y eliminar caracteres no alfabéticos
    const textoLimpio = cadena.toLowerCase().replace(/[^a-z]/g, '');
    
    // Revertir la cadena y compararla con la cadena original
    const textoRevertido = textoLimpio.split('').reverse().join('');
    
    return textoLimpio === textoRevertido;
}

// Test del programa
const prueba1 = "Anita lava la tina";
const prueba2 = "Hola mundo";

console.log(`"${prueba1}" ¿es palíndromo? ${esPalindromo(prueba1) ? "Sí" : "No"}`);
console.log(`"${prueba2}" ¿es palíndromo? ${esPalindromo(prueba2) ? "Sí" : "No"}`);
