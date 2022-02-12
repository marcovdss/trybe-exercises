// //Duas formas de resolver o exercício
// /*
//   Como podemos acessar a posição de uma string da mesma forma que
//   acessamos um array, podemos então, comparar o caracter da
//   posição 0 (primeira) com o caracter da última posição (length - 1).
//   Dessa forma conseguimos verificar se a sequência de caracteres
//   na string é a mesma do inicio ao fim e do fim ao inicio 😉
// */
// function verificaPalindrome(word){
//     for(index in word){
//       if(word[index] != word[(word.length - 1) - index]){
//         return false;
//       }
//     }
//     return true;
//   }
//   function verificaPalindrome(string) {
//     let reverse = string.split('').reverse().join('');
//     if (reverse === string) {
//       return true;
//     } else {
//       return false;
//     }
//   }
  
//   console.log(verificaPalindrome('arara')); //true
//   console.log(verificaPalindrome('desenvolvimento')); //false

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
//Array de teste: [2, 3, 6, 7, 10, 1]; .
//Valor esperado no retorno da função: 4 .

// function indiceDoMaior(numeros) {
//     let indiceMaior = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMaior] < numeros[indice]) {
//         indiceMaior = indice;
//       }
//     }
//     return indiceMaior;
//   }
  
//   console.log(indiceDoMaior([2, 3, 6, 7, 10, 1])); //4


// // 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function indiceDoMenor(numeros) {
//     let indiceMenor = 0;
//     for (let indice in numeros) {
//       if (numeros[indiceMenor] > numeros[indice]) {
//         indiceMenor = indice;
//       }
//     }
//     return indiceMenor;
//   }
  
//   console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3])); //6

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

// function maiorPalavra(palavras) {
//     let maiorPalavra = palavras[0];
//     for (let indice in palavras) {
//       if (maiorPalavra.length < palavras[indice].length) {
//         maiorPalavra = palavras[indice];
//       }
//     }
//     return maiorPalavra;
//   }
  
//   console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); //Fernanda

// // 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

////Duas formas de resolver o exercício
// function maisRepetido(numeros) {
//     let contRepetido = 0;
//     let contNumero = 0;
//     let indexNumeroRepetido = 0;
//     for (let index in numeros) {
//       let verificaNumero = numeros[index];
//       for (let index2 in numeros) {
//         if (verificaNumero === numeros[index2]) {
//           contNumero += 1;
//         }
//       }
//       if (contNumero > contRepetido) {
//         contRepetido = contNumero;
//         indexNumeroRepetido = index;
//       }
//       contNumero = 0;
//     }
//     return numeros[indexNumeroRepetido];
//   }
  
//   function maisRepetido(numeros) {
//     let num = {};
  
//     for (let index = 0; index < numeros.length; index += 1) {
//       let valor = numeros[index];
//       if (num[valor] === undefined) {
//         num[valor] = 1;
//       } else {
//         num[valor] = num[valor] + 1;
//       }
//     }
  
//     let contRepetido = 0;
//     let contNumero = 0;
  
//     for (let prop in num) {
//       if (contRepetido < num[prop]) {
//         contRepetido = num[prop];
//         contNumero = prop;
//       }
//     }
  
//     return contNumero;
//   }
  
//   console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3])); //2

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// function somaTodosNumeros(numeros) {
//     let total = 0;
//     for (let index = 1; index <= numeros; index += 1) {
//       total = total + index;
//     }
//     return total;
//   }
//   console.log(somaTodosNumeros(5)); //15

// 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
    // Valor de teste: 'trybe' e 'be'
    // Valor esperado no retorno da função: true
    // verificaFimPalavra('trybe', 'be') ;
    // Retorno esperado: true
    // verificaFimPalavra('joaofernando', 'fernan') ;
    // Retorno esperado: false

    //Duas formas de resolver o exercício
// function verificaFimPalavra(palavra, fimPalavra) {
//     palavra = palavra.split('');
//     fimPalavra = fimPalavra.split('');
//     controle = true;
//     for (let index = 0; index < fimPalavra.length; index += 1) {
//       if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
//         controle = false;
//       }
//     }
//     return controle;
//   }
  
//   function verificaFimPalavra(palavra, fimPalavra) {
//     let inversoPalavra = palavra.split('').reverse().join('');
//     let inversoFimPalavra = fimPalavra.split('').reverse().join('');
//     let result;
  
//     for (let index = 0; index < inversoFimPalavra.length; index += 1) {
//       if (inversoPalavra[index] !== inversoFimPalavra[index]) {
//         result = false;
//         break;
//       } else {
//         result = true;
//       }
//     }
    
//     return result;
//   }
  
//   console.log(verificaFimPalavra('trybe', 'be')); //true
//   console.log(verificaFimPalavra('joaofernando', 'fernan')); //false


// BONUS 

//1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.

// const numerosRomanos = {
//     i: 1,
//     v: 5,
//     x: 10,
//     l: 50,
//     c: 100,
//     d: 500,
//     m: 1000,
//   };
  
//   function romanoParaDecimal(numero) {
//     numero = numero.toLowerCase();
//     const len = numero.length;
//     let soma = numerosRomanos[numero[len - 1]];
//     let atual = numerosRomanos[numero[len - 1]];
//     for (let i = 2; i <= len; i += 1) {
//       const prox = numerosRomanos[numero[len - i]];
//       if (atual <= prox) {
//         soma += prox;
//       } else {
//         soma -= prox;
//       }
//       atual = prox;
//     }
//     return soma;
//   }
  
//   console.log(romanoParaDecimal('MMXVIII')); // 2018
//   console.log(romanoParaDecimal('VI')); // 6
//   console.log(romanoParaDecimal('IV')); // 4

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
//  Através de um loop for , percorra essa variável, busque os números pares 
//  e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// const vector = [[1, 2], [3, 4, 5, 6], [7, 8, 9, 10]];

// function arrayOfNumbers(vector) {
//   const result = [];
//   for (let index = 0; index < vector.length; index += 1) {
//     const numbers = vector[index];
//     for (let indexSub = 0; indexSub < numbers.length; indexSub += 1) {
//       const current = numbers[indexSub];
//       if ((current % 2) === 0) {
//         result.push(current);
//       } 
//     }
//   }
//   return result;
// }

// console.log(arrayOfNumbers(vector));


// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave 
// e a quantidade de vezes que ela aparece no array como valor. 
// Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], 
// deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

// const basket = [
//     'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
//     'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
//     'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
//     'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
//     'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
//     'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
//     'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
//     'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
//     'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
//     'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
//     'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
//     'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
//     'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
//     'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
//     'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
//     'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
//     'Banana', 'Pera', 'Abacate', 'Uva',
//   ];
  
//   const result = {};
  
//   for (let index = 0; index < basket.length; index += 1) {
//     const fruit = basket[index];
//     if (!result[fruit]) result[fruit] = 0;
//     result[fruit] += 1;
//   }
  
//   const summaries = [];
//   for (fruit in result) {
//     let message = `${result[fruit]} ${fruit}`;
//     if (result[fruit] > 1) message += 's';
//     summaries.push(message);
//   }
  
//   console.log(`Sua cesta possui: ${summaries.join(', ')}.`);

//4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois 
//faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

// let moradores = {
//     blocoUm: [
//       {
//         nome: 'Luiza',
//         sobrenome: 'Guimarães',
//         andar: 10,
//         apartamento: 1005,
//       },
//       {
//         nome: 'William',
//         sobrenome: 'Albuquerque',
//         andar: 5,
//         apartamento: 502,
//       },
//     ],
//     blocoDois: [
//       {
//         nome: 'Murilo',
//         sobrenome: 'Ferraz',
//         andar: 8,
//         apartamento: 804,
//       },
//       {
//         nome: 'Zoey',
//         sobrenome: 'Brooks',
//         andar: 1,
//         apartamento: 101,
//       },
//     ],
//   };
//   let moradoresBlocoDois = moradores.blocoDois;
// let ultimoMoradorBlocoDois = moradoresBlocoDois[moradoresBlocoDois.length - 1];

// // Duas formas de se resolver
// console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois.nome + ' ' + ultimoMoradorBlocoDois.sobrenome + ' mora no ' + ultimoMoradorBlocoDois.andar + '° andar, apartamento ' + ultimoMoradorBlocoDois.apartamento);

// console.log('O morador do bloco 2 de nome ' + ultimoMoradorBlocoDois['nome'] + ' ' + ultimoMoradorBlocoDois['sobrenome'] + ' mora no ' + ultimoMoradorBlocoDois['andar'] + '° andar, apartamento ' + ultimoMoradorBlocoDois['apartamento']);

//  5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, 
//  acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

// for (let index = 0; index < moradores.blocoUm.length; index += 1) {
//     console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
//   }
  
//   for (let index = 0; index < moradores.blocoDois.length; index++) {
//     console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
//   }