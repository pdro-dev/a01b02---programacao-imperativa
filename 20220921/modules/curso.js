/*
Micro desafio - Passo 3

    Em um arquivo diferente, crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) e uma  lista de estudantes (um array composto pelos alunos criados no passo 1).

Micro desafio - Passo 4

	Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso.

Micro desafio - Passo 5

	Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas máximas. Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.


Micro desafio - Passo 6

	Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array de booleanos com os resultados se os alunos aprovaram ou não.


Micro desafio - Passo 7

	Importe o módulo estudantes.js, que contém uma lista de alunos, dentro do arquivo que contém o objeto curso. Substitua o conteúdo da propriedade lista de estudantes, pela lista de estudantes do arquivo estudantes.js e garanta que sigam funcionando todos os métodos corretamente. (revisar que o arquivo tenha todos os métodos corretamente).

*/

// importar funcao construtora de aluno
let Aluno = require('./cf_aluno');
// importar lista de alunos do arquivo estudantes.js
let listaDeAlunos = require('./estudantes');


let Curso = {
    nome: 'Full Stack',
    notaAprovacao: 7,
    faltasMaximas: 3,
    listaEstudantes: [],
    // metodo para adicionar um aluno a lista de estudantes
    adicionarAluno: function(aluno) {
        this.listaEstudantes.push(aluno);
    },

    // adicionar estudantes a partir de uma lista de estudantes do arquivo estudantes.js
    adicionarListaAlunos: function(lista) {
        // percorrer a lista de alunos do arquivo estudantes.js
        for (let i = 0; i < lista.length; i++) {
            // criar um objeto aluno a partir de cada elemento da lista de alunos do arquivo estudantes.js
            let aluno = new Aluno(lista[i].nome, lista[i].faltas, lista[i].notas);
            // adicionar o objeto aluno a lista de estudantes do curso
            this.listaEstudantes.push(aluno);
        }
    },

    // metodo para verificar se o aluno foi aprovado
    aprovacao: function(aluno) {
        if (aluno.calcularMedia() >= this.notaAprovacao && aluno.faltas < this.faltasMaximas) {
            return true;
        } else if (aluno.calcularMedia() >= this.notaAprovacao * 1.1 && aluno.faltas == this.faltasMaximas) {
            return true;
        } else {
            return false;
        }
    },
    // metodo para verificar aprovacao de todos os alunos
    aprovacaoTodos: function() {
        let aprovados = [];
        this.listaEstudantes.forEach(aluno => {
            aprovados.push(this.aprovacao(aluno));
        });
        return aprovados;
    }
}

module.exports = Curso;