function reverseString(string) {
  let strInverted = '';
  for (let i = string.length - 1; i >= 0; i--) {
    strInverted += string[i];
  }
  return strInverted;
}

// Exemplo 

const invertedSentence = 'Peguei um onibus para Ribeirão Preto, mas parei em Pindamonhangaba / amor a roma'//exemplo com um palindromo;
const myInvertedSentence = reverseString(invertedSentence);
console.log(myInvertedSentence); 
