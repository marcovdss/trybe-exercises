// Conteúdos
// Objetos
// Para fixar
// Agora vamos fazer alguns exercícios de fixação para consolidar os conhecimentos adquiridos no video anterior! 😉
// 1 - Crie um objeto player contendo as variáveis listadas abaixo.

// let name = 'Marta';
// let lastName = 'Silva';
// let age = 34;
// let medals = { golden: 2, silver: 3 };
// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: { golden: 2, silver: 3 },
//   };
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' tem ' + player.age + ' anos de idade.');
// player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
// console.log('A jogadora ' + player.name + ' ' + player.lastName + ' foi eleita a melhor do mundo por ' + player.bestInTheWorld.length + ' vezes.');
// console.log('A jogadora possui ' + player.medals.golden + ' medalhas de ouro e ' + player.medals.silver + ' medalhas de prata.');

// //Funções
// Para esses exercícios, você deve refazer os exercícios de 1 a 5 do dia 4.1.
// 1 - Faça cinco programas, um para cada operação aritmética básica. 
// Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados.

// function soma(a, b) {
//     return a + b;
//   }
  
//   function sub(a, b) {
//     return a - b;
//   }
  
//   function mult(a, b) {
//     return a * b;
//   }
  
//   function div(a, b) {
//     return a / b;
//   }
  
//   function mod(a, b) {
//     return a % b;
//   }


// Faça um programa que retorne o maior de dois números. 
//Defina, no começo do programa, duas constantes com os valores que serão comparados.


// function maiorNum(primeiroNum, segundoNum) {
//     if (primeiroNum > segundoNum) {
//       return primeiroNum + ' é maior que ' + segundoNum;
//     } else {
//       return segundoNum + ' é maior que ' + primeiroNum;
//     }
//   }

//Faça um programa que retorne o maior de três números. 
//Defina, no começo do programa, três constantes com os valores que serão comparados.

// function maiorDeTres(primeiroNum, segundoNum, terceiroNum) {
//     if (primeiroNum > segundoNum && primeiroNum > terceiroNum) {
//       return 'O maior número é: ' + primeiroNum;
//     } else if (segundoNum > primeiroNum && segundoNum > terceiroNum) {
//       return 'O maior número é: ' + segundoNum;
//     } else {
//       return 'O maior número é: ' + terceiroNum;
//     }
//   }

//  Faça um programa que, dado um valor recebido como parâmetro 
//  retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero", caso contrário.

// function positiveNegative(number) {
//     if (number > 0) {
//       return 'positive';
//     } else if (number < 0) {
//       return 'negative';
//     } else {
//       return 'zero';
//     }
//   }

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. 
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

// function triangleAnglesValidate(angleA, angleB, angleC) {
//     let sumOfAngles = angleA + angleB + angleC;
//     let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
//     if (allAnglesArePositives) {
//       if (sumOfAngles === 180) {
//         return true;
//       } else {
//         return false;
//       }
//     } else {
//       return 'Erro: ângulo inválido';
//     }
//   }

// For/In

//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá, xxxxx' para cada nome, 
// substituindo o xxxxx pelo nome em questão.

// let names = {
//     person1: 'João',
//     person2: 'Maria',
//     person3: 'Jorge', 
//   };
  
//   for (let name in names) {
//     console.log('Olá, ' + names[name]);
//   }

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.
// //
// let car = {
//     model: 'A3 Sedan',
//     manufacturer: 'Audi',
//     year: 2020,
//   };
  
//   for (let key in car) {
//     console.log(key + ': ' + car[key]);
//   }