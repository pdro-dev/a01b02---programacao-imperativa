/*
constructor function para criar um objeto aluno

Micro desafio - Passo 1

Crie um objeto aluno que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). Crie um construtor para ele e importe-o como o módulo aluno.

Micro desafio - Passo 2

Nosso objeto aluno terá o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, que simplesmente aumenta o número de faltas em 1.
*/

function Aluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    // metodo para calcular a media das notas com reduce
    this.calcularMedia = function () {
        return this.notas.reduce((acumulador, nota) => acumulador + nota) / this.notas.length;
    };
    // metodo para aumentar o numero de faltas
    this.addFalta = function() {
        this.faltas += 1;
    };
}

module.exports = Aluno;