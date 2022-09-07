// https://docs.google.com/document/d/1-EIGVSd7GAQkL0s_NN5rctgG_oFN6yJg/preview#


/* 
Crie um array composto por numeros e retorne uma nova matriz (array) com todos os valores divididos pela soma de toda a matriz, usando .map() e .reduce()
*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// versao 1
let somaNumeros = numeros.reduce((total, numero) => total + numero);
console.log(somaNumeros);

let divididos = numeros.map(numero => numero / somaNumeros);

console.log(divididos);

// versao 2
let exercicio1 = array => array.map(i => i / array.reduce((total, i) => total + i));

console.log(exercicio1(numeros));


/*
Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())
*/

let palavras = [ 'ola', 'mundo', 'bom', 'dia', 'tudo', 'bem', 'como', 'vai', 'o', 'feriado', '?', 3, 4, 5 ];

let isNumber = (n) => typeof n === 'number';
                                                /*
                                                let isNumber2 = function(n) {
                                                return typeof n === 'number';
                                                }
                                                */

let palavrasIsNumber = palavras.filter(isNumber); // filter é uma função que recebe uma função como parâmetro e retorna um novo array com os elementos que passaram no teste
// console.log(palavrasIsNumber)

let palavrasIsNumberUnico = palavrasIsNumber[palavrasIsNumber.length - 1]; // ultimo elemento do array
// console.log(palavrasIsNumberUnico);

let exercicio2 = array => array.filter(i => i.length >= parseInt(palavrasIsNumberUnico));
console.log(exercicio2(palavras));


/*
Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. (Analise qual método seria apropriado para este caso. Recomendamos que você consulte a documentação do MDN: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array)

*/

// array de objetos literais onde cada objeto será um aluno e terá dois atributos: nome e nota
let alunos = [
    { nome: 'João', nota: 7.3 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Pedro', nota: 9.8 },
    { nome: 'Ana', nota: 8.7 }
];  

console.log(alunos);

// função que ordena os alunos em ordem alfabética
let ordenarAlunos = alunos.sort((a, b) => a.nome > b.nome ? 1 : -1); // if ternário (se condicao ? então : senão)
console.log(ordenarAlunos);

// função que ordena os alunos por nota
let ordenarAlunosNota = alunos.sort((a, b) => b.nota - a.nota);
console.log(ordenarAlunosNota);





