/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.

Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

    1. a média das idades das pessoas que responderam ótimo;
    2. a quantidade de pessoas que responderam regular;
    3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

// funcao construtora de objetos com as propriedades idade e opiniao
function Resposta(idade, opiniao) {
    this.idade = idade;
    this.opiniao = opiniao;
}

// exportar a funcao construtora como modulo
module.exports = Resposta;
