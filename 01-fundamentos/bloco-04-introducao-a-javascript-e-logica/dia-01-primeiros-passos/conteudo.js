// Variaveis

let age = 20;
let name = "Hulk";
console.log(age);
console.log(name);
// ///
const myName = "Marcos";
const birthCity = "Brasilia";
let birthYear = 1997;
console.log(myName, birthCity, birthYear);
birthYear = 2030;
console.log(birthYear);
//birthCity ="Sao Paulo";
console.log(birthCity);
//Erro devido a tentativa de alteração em uma constante

// Tipos Primitivos, Tipagem Dinâmica e Operações Aritméticas

const base = 5;
const height = 8;
const area = base * height;
console.log(area);
// ///
const perimeter = 5 + 5 + 8 + 8;
console.log(perimeter);

// Condições If e Else

const grade = 80;
if (grade >= 80) {
    console.log("Parabéns, você foi aprovada(o)!")
} else if (grade < 80 && grade >= 60) {
    console.log("Você está na nossa lista de espera");
} else if (grade < 60) {
    console.log("Você foi reprovada(o)")
}

// Operadores lógicos

const currentHour = 16;
let message = "";
if (currentHour >= 22) {
    message = "Não deveríamos comer nada, é hora de dormir";
} else if (currentHour >= 18 && currentHour < 22) {
    message = "Rango da noite, vamos jantar :D";
} else if (currentHour >= 14 && currentHour < 18) {
    message = "Vamos fazer um bolo pro café da tarde?";
} else if (currentHour >= 11 && currentHour < 14) {
    message = "Hora do almoço!!!";
} else if (currentHour < 11 && currentHour < 4) {
    message = "Hmmm, cheiro de café recém passado";
}
console.log(message);

//  Operador OR

const weekDay = "quarta-feira";
if (weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
} else {
    console.log("FINALMENTE, descando merecido UwU");
}