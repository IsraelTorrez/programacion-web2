let operacionActual = '';
  let operandoAnterior = '';
  let operandoActual = '';

  function agregarNumero(numero) {
    operandoActual += numero;
    document.getElementById('display').value = operandoActual;
  }

  function realizarOperacion(op) {
    operacionActual = op;
    operandoAnterior = operandoActual;
    operandoActual = '';
  }

  function calcularResultado() {
    const num1 = parseFloat(operandoAnterior);
    const num2 = parseFloat(operandoActual);
    let resultado;

    switch (operacionActual) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
    }

    document.getElementById('display').value = resultado;
  }