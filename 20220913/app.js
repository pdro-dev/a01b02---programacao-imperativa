/*
Minha Primeira Aplicação I

Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
1. a maior e a menor altura do grupo;
2. a média de altura das mulheres;
3. o número de homens.
*/

// criar array de objetos
let pessoas = [
    { id: 1, altura: 1.70, sexo: 'M' },
    { id: 2, altura: 1.60, sexo: 'F' },
    { id: 3, altura: 1.80, sexo: 'M' },
    { id: 4, altura: 1.90, sexo: 'F' },
    { id: 5, altura: 1.50, sexo: 'M' },
    { id: 6, altura: 1.60, sexo: 'F' },
    { id: 7, altura: 1.70, sexo: 'M' },
    { id: 8, altura: 1.80, sexo: 'F' },
    { id: 9, altura: 1.90, sexo: 'M' },
    { id: 10, altura: 1.50, sexo: 'F' },
    { id: 11, altura: 1.60, sexo: 'M' },
    { id: 12, altura: 1.70, sexo: 'F' },
    { id: 13, altura: 1.80, sexo: 'M' },
    { id: 14, altura: 1.90, sexo: 'F' },
    { id: 15, altura: 1.50, sexo: 'M' }
];



// 1. a maior e a menor altura do grupo
let alturasMinMax = (array) => {
    // criar variaves para armazenar maior e menor altura
    let maior = array[0].altura; // array[0] é o primeiro elemento do array, que é um objeto com a propriedade altura
    let menor = array[0].altura;
    // percorrer array de objetos e comparar altura com as variáveis
    array.forEach(i => {
        if (i.altura > maior) {
            maior = i.altura;
        }
        if (i.altura < menor) {
            menor = i.altura;
        }
    }); // .forEach() itera sobre o array de objetos e executa uma função para cada elemento 
    return [maior, menor]; // retornar array com maior e menor altura
}
// imprimir resultados usando template string (template literals)
console.log(`Maior altura: ${alturasMinMax(pessoas)[0].toFixed(2)}m`);
console.log(`Menor altura: ${alturasMinMax(pessoas)[1].toFixed(2)}m`);



// 2. a média de altura das mulheres (usando .filter() e .reduce())
let mediaAlturaMulheres = (array) => {
    // filtrar array de objetos para obter apenas mulheres
    let mulheres = array.filter(i => i.sexo === 'F'); // .filter() retorna um array iterando sobre o array original e retornando um novo array com os elementos que passaram no teste
    let soma = mulheres.reduce((acumulador, valorAtual) => acumulador + valorAtual.altura, 0); // .reduce() retorna um valor único (soma) iterando sobre o array de mulheres
    return soma / mulheres.length; // retornar média de altura das mulheres (soma dividida pelo número de mulheres) (.length retorna o número de elementos de um array)
}
// imprimir resultados usando as funções criadas com template string
console.log(`Média de altura das mulheres: ${mediaAlturaMulheres(pessoas).toFixed(2)}m`);


// 3. o número de homens (usando .filter() e .length)
let numeroHomens = (array) => {
    // filtrar array de objetos para obter apenas homens
    let homens = array.filter(i => i.sexo === 'M'); // .filter() retorna um array de homens
    return homens.length; // retornar número de homens
}
// imprimir resultados usando template string
console.log(`Número de homens: ${numeroHomens(pessoas)}`);