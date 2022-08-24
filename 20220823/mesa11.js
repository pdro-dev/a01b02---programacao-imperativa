/*

Ciclos e Repetições

Para este exercício usaremos todos os elementos das aulas anteriores e do atual. Os objetivos são:
●	Reconheça padrões, elementos com características gerais que interagem, ou não, com outros. Ser capaz de criar grupos e relacionamentos.
●	Abstraia em conceitos computáveis e objetos os elementos da situação-problema.
●	Decomponha em conceitos e objetos de menor complexidade, dividindo o problema em partes menores.
●	Modele o problema do slogan baixando para papel ou planilha a representação em números, textos ou gráficos desses elementos.
Expresse o modelo em formato de código, algoritmos da solução.

Soa familiar? Isso porque isso não é nada além de pensamento computacional, algo em que estamos trabalhando desde que começamos(realmente algo que fazemos na vida toda em situações cotidianas também!!)

Por isso, propomos o seguinte exercício integrativo para poder desenvolver um pouco mais essa prática no nível de programação e código!


Começar...

Para essa oportunidade vamos retomar a atividade da aula anterior, você se lembra? Estávamos trabalhando em arrays, acessando-os, modificando-os, adicionando e removendo elementos, e algumas outras coisas. Mas como vimos naquela aula, muitas tarefas foram repetidas mesmo dentro da mesma função, parecia que tínhamos que executar o mesmo passo várias vezes, um número x de vezes. Vamos ver se podemos dar algum dinamismo e eficiência ao nosso código...

*/

// 1

let filmes_e_series = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

function maiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(filmes_e_series);
console.log(maiusculas(filmes_e_series));


// 2

let filmes_animacao = ["toy story", "procurando nemo", "kung-fu panda", "wally", "fortnite"];

let games = [];
games[0] = filmes_animacao.pop();

function adicionar_filmes(array1, array2) {
    for (let i = 0; i < array2.length; i++) {
        array1.push(array2[i]);
    }
    return array1;
}

console.log(adicionar_filmes(filmes_e_series, filmes_animacao));
console.log(games)


// 3

let asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
let euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compara_notas(array1, array2) {
    // verifica se as duas arrays tem o mesmo tamanho
    if (array1.length != array2.length) { // se não tiverem o mesmo tamanho, retorna false
        return (false + ': ' + 'As arrays não tem o mesmo tamanho');
    } else {
        // verifica se as duas arrays tem o mesmo conteúdo
        for (let i = 0; i < array1.length; i++) { // percorre o array1
            if (array1[i] != array2[i]) { // verifica se o elemento do array1 é diferente do elemento do array2
                console.log(false + " " + array1[i] + " != " + array2[i]);
                // return false; // se for diferente, retorna false
            } else {
                console.log(true + " " + array1[i] + " == " + array2[i]);
                // return true; // se for igual, retorna true
            }
        }
        return (true + ': ' + 'As arrays tem o mesmo tamanho'); // se não for diferente, retorna true
    }
}

console.log(compara_notas(asiaScores, euroScores));
