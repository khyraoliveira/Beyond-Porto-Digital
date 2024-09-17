/*
Crie uma função chamada calcularMedia que receba um array de números como parâmetro
e retorne a média aritmética desses números. Utilize métodos de array para resolver o problema.
*/

function calcularMedia(a,b){
    const media = (a+b)/2;
    return media;
}
console.log(calcularMedia(10,8));

const calcularMedia2 = (a,b) => (a+b)/2;
console.log(calcularMedia2(10,8));