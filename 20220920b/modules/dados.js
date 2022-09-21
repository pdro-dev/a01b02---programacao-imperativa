/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.

Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

    1. a média das idades das pessoas que responderam ótimo;
    2. a quantidade de pessoas que responderam regular;
    3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/


// criar array de objetos com as respostas
const respostas = [
    { idade: 18, opiniao: 3 },
    { idade: 25, opiniao: 2 },
    { idade: 35, opiniao: 1 },
    { idade: 45, opiniao: 3 },
    { idade: 55, opiniao: 2 },
    { idade: 65, opiniao: 1 },
    { idade: 75, opiniao: 3 },
    { idade: 85, opiniao: 2 },
    { idade: 95, opiniao: 1 },
    { idade: 15, opiniao: 3 },
    { idade: 25, opiniao: 2 },
    { idade: 35, opiniao: 1 },
    { idade: 45, opiniao: 3 },
    { idade: 55, opiniao: 2 },
    { idade: 65, opiniao: 1 },
];

// exportar o array de objetos como modulo
module.exports = { respostas };