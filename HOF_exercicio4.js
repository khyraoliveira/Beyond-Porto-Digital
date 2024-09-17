/*
Crie uma função de ordem superior chamada executarOperacao que recebe dois números
e uma função que realiza uma operação matemática sobre eles.
A função deve retornar o resultado da operação. Em seguida, utilize executarOperacao para
realizar as operações de soma, multiplicação e divisão.
*/

const executarOperacao = (a, b, op) => op(a, b);

const somar = (a, b) => a + b;
const multiplicar = (a, b) => a * b;
const dividir = (a, b) => a/b;

const a = 10;
const b = 5;

console.log(`A soma entre ${a} e ${b} é: ${executarOperacao(a, b, somar)}!`);
console.log(`A multiplicação entre ${a} e ${b} é: ${executarOperacao(a, b, multiplicar)}!`);
console.log(`A divisão entre ${a} e ${b} é: ${executarOperacao(a, b, dividir)}!`);