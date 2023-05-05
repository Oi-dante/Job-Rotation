let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
  K = K + 1;
  SOMA = SOMA + K;
}

console.log(SOMA);

//O valor da varivel SOMA será 91. 
//Isso ocorre porque o loop é executado enquanto a condição K < INDICE for verdadeira.
// A cada iteração do loop, o valor de K é aumentado em 1 e adicionado ao valor atual de SOMA. 
//Portanto, o loop será executado 13 vezes, somando os números de 1 a 13, resultando em uma soma total de 91.
