function FibonacciNumber(number) {
  // Verificar se o número é menor que 0
  if (number < 0) {
    return false;
  }
  
  // Tratar os casos especiais dos primeiros dois números da sequência
  if (number === 0 || number === 1) {
    return true;
  }
  
  // Inicializar os dois primeiros números 
  let a = 0;
  let b = 1;
  
  // Calcular a sequência de Fibonacci até encontrar um número 
  while (b <= number) {
    if (b === number) {
      return true;
    }
    
    let temp = a + b;
    a = b;
    b = temp;
  }
  
  return false;
}

// Exemplo 
const checkNumber = 55;
if (FibonacciNumber(checkNumber)) {
  console.log(checkNumber + ' Pertence à sequência.');
} else {
  console.log(checkNumber + ' Não pertence à sequência.');
}
//55 pertence à sequência. 
