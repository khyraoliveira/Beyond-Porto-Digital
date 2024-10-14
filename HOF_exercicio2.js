/*
Implemente uma função chamada filtrarPares que recebe um array de números e
retorna um NOVO ARRAY contendo apenas os números pares. Use o método filter para realizar a filtragem.
*/

const array = [3, 10, 16, 21, 45];
function filtrarPares(nums){
    return nums.filter(num => num % 2 == 0);
}

const pares = filtrarPares(array);
console.log(pares);

const filtrarPares2 = x => x.filter(num => num % 2 == 0);
const pares2 = filtrarPares2(array);
console.log(pares2);
//