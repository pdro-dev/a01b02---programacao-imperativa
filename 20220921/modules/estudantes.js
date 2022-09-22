/*

Micro desafio - Passo 7

	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

*/

// criar lista de alunos 

const listaDeAlunos = [
    {
        nome: "João",
        faltas: 4,
        notas: [7, 8, 6, 10]
    },
    {
        nome: "Maria",
        faltas: 5,
        notas: [9, 8, 9, 10]
    },
    {
        nome: "José",
        faltas: 2,
        notas: [10, 7, 5, 8]
    },
    {
        nome: "Ana",
        faltas: 3,
        notas: [10, 10, 10, 10]
    },
    {
        nome: "Paulo",
        faltas: 1,
        notas: [3, 4, 10, 10]
    },
    {
        nome: "Pedro",
        faltas: 0,
        notas: [8, 10, 7, 10]
    },
    {
        nome: "Marcos",
        faltas: 0,
        notas: [10, 8, 10, 3]
    },
    {
        nome: "Julia",
        faltas: 1,
        notas: [10, 10, 10, 10]
    },
    {
        nome: "Carla",
        faltas: 2,
        notas: [10, 10, 10, 10]
    },
    {
        nome: "Roberto",
        faltas: 4,
        notas: [10, 10, 10, 10]
    }
]

module.exports = listaDeAlunos;