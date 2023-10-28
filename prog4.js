function reverseWords(input) {
    let palabras = input.split(' ');
    let resultado = palabras.map(palabra => palabra.split('').reverse().join(''));
    return resultado.join(' ');
}

const frase = "Hola mundo de JavaScript";
console.log(`Frase original: ${frase}`);
console.log(`Frase con palabras revertidas: ${reverseWords(frase)}`);
