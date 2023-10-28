function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const posicion = 12;
console.log(`El número Fibonacci en la posición ${posicion} es: ${fibonacci(posicion)}`);