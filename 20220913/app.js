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
    array.forEach(i => { // .forEach() itera sobre o array de objetos e executa uma função para cada elemento
        if (i.altura > maior) { // se altura do objeto for maior que a maior altura armazenada
            maior = i.altura; // atualizar maior altura
        }
        if (i.altura < menor) { // se altura do objeto for menor que a menor altura armazenada
            menor = i.altura; // atualizar menor altura
        }
    });
    return [maior, menor]; // retornar array com maior e menor altura do grupo (array de duas posições)
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



//////////////////////////////////////////////////////////////////////////////////////////////

// arrow function
// .reduce() é um método de array que itera sobre o array e retorna um único valor
// .filter() é um método de array que itera sobre o array e retorna um novo array com os elementos que passaram no teste
// .forEach() é um método de array que itera sobre o array e executa uma função para cada elemento
// .length é uma propriedade de array que retorna o número de elementos de um array
// .toFixed() é um método de número que formata um número usando notação de ponto fixo
// .toFixed(2) formata o número com duas casas decimais

/* sintaxe

arrow function (função de seta) é uma forma mais curta de escrever uma função em JavaScript
exemplos genericos:

    exemplo com um único parâmetro:
        let nomeDaFuncao = (parametro) => {
            // código
        }

    exemplo com mais de um parâmetro:
        let nomeDaFuncao = (parametro1, parametro2, parametro3) => {
            // código
        }

    outros exemplos:
        let soma = (a, b) => a + b; // função que retorna a soma de dois números

        let maior = (a, b) => a > b ? a : b; // função que retorna o maior número entre dois números (operador ternário)

            "operador ternário" é um operador que retorna um valor baseado em uma condição
            sintaxe:
                condição ? valor se verdadeiro : valor se falso
        
        let maior = (a, b) => {
            if (a > b) {
                return a;
            } else {
                return b;
            }
        }; // função que retorna o maior número entre dois números (if/else)

        let maior = (array) => {
            let maior = array[0];
            array.forEach(i => {
                if (i > maior) {
                    maior = i;
                }
            });
            return maior;
        }; // função que retorna o maior número de um array


.reduce() recebe uma função de callback com dois parâmetros (acumulador e valor atual) e um valor inicial (opcional)

    exemplos:
        
        array.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicial);
        array.reduce((acumulador, valorAtual) => acumulador + valorAtual.altura, 0);
        

    exemplo com objeto:
        
        array.reduce((acumulador, valorAtual) => {
            return {
                altura: acumulador.altura + valorAtual.altura
            }
        }, { altura: 0 });



.filter() recebe uma função de callback com um parâmetro (elemento) e retorna um novo array com os elementos que passaram no teste
    
    exemplos:
    
        array.filter(elemento => elemento > 5); // retorna um novo array com os elementos maiores que 5
        array.filter(elemento => elemento % 2 === 0); // retorna apenas os elementos pares
        array.filter(elemento => elemento % 2 !== 0); // retorna apenas os elementos ímpares
    
    exemplos com objetos:

        array.filter(elemento => elemento.propriedade === 'valor'); // retorna um novo array com os elementos que possuem a propriedade com o valor especificado
            
            array.filter(elemento => elemento.propriedade > 5); // retorna um novo array com os elementos que possuem a propriedade maior que 5
            
            array.filter(elemento => elemento.altura > 1.70); // retorna um novo array com os elementos que possuem altura maior que 1.70



.forEach() recebe uma função de callback com um parâmetro (elemento) e não retorna nada

    exemplos:
        
        array.forEach(elemento => console.log(elemento)); // imprime cada elemento do array
        array.forEach(elemento => console.log(elemento.propriedade)); // imprime a propriedade de cada elemento do array


.length retorna o número de elementos de um array

    exemplos:

        array.length; // retorna o número de elementos de um array
        array.filter(elemento => elemento.propriedade === 'valor').length; // retorna o número de elementos que possuem a propriedade com o valor especificado


.toFixed() formata um número usando notação de ponto fixo

    exemplos:
        
        numero.toFixed(); // formata o número com 0 casas decimais
        numero.toFixed(2); // formata o número com 2 casas decimais
        numero.toFixed(4); // formata o número com 4 casas decimais




*/