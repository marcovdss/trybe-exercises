// Item 1
// let soma = 0;
// for (let index = 1; index <= 50; index += 1) {
//     soma += index;
// }
// console.log(soma);
// Item 2
// let divisiveis = 0;
// for (let index = 2; index <= 150; index += 1) {
//     if (index % 3 === 0) {
//         divisiveis += 1;
//     }
// }
// if (divisiveis === 50) {
//     console.log('mensagem secreta');
// }
// else {
//     console.log(divisiveis);
// }
// Item 3
// let jogador1 = 'papel';
// let jogador2 = 'pedra';
// if (jogador1 === 'pedra' && jogador2 === 'tesoura') {
//     console.log('Player 1 won');
// }
// else if (jogador1 === 'pedra' && jogador2 === 'papel') {
//     console.log('Player 2 won');
// }
// else if (jogador1 === 'pedra' && jogador2 === 'pedra') {
//     console.log('A tie');
// }
// else if (jogador1 === 'papel' && jogador2 === 'tesoura') {
//     console.log('Player 2 won');
// }
// else if (jogador1 === 'papel' && jogador2 === 'papel') {
//     console.log('A tie');
// }
// else if (jogador1 === 'papel' && jogador2 === 'pedra') {
//     console.log('Player 1 won');
// }
// else {
//     console.log('jogada inválida');
// }
// Item 4
// let idade = 30;
// idade >= 18 ? console.log('A pessoa é maior de idade') : console.log('menor de idade');
// O código abaixo é igual ao código da linha 61.
// if (idade >= 18) {
//     console.log('A pessoa é maior de idade')
// } else {
//     console.log('menor de idade')
// }
// Item 5
let idadeCarolzita = 20;
let idadeMurilo = 30;
let baeta = 40;
let idades = [30, 20, 40];
let crescente = idades.sort(function(a, b) {
    return a - b;
});
if (crescente[0] === 20) {
    console.log('Carolzita é a mais nova');
} else if (crescente[0] === 30) {
    console.log('Murilo é o mais novo');
} else {
    console.log('Baêta é a mais nova');
}