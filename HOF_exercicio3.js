/*
Desenvolva uma função chamada mapearNomes que recebe um array de objetos representando
pessoas (cada objeto possui nome e idade) e retorna um array contendo apenas os nomes em letras maiúsculas.
Utilize o método map.
*/

const persons = [
    { name: 'Carol', age: 25 },
    { name: 'Elizabeth', age: 30 },
    { name: 'Joe', age: 45 },
    { name: 'Eduardo', age: 18}
];

function mapearNomes(persons){
    return persons.map(persons => persons.name.toUpperCase());
}

const upperCase = mapearNomes(persons);
console.log(upperCase);