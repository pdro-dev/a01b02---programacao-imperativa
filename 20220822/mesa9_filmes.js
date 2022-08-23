/*

Coleções de Filmes (e mais…)

O tech leader da equipe precisa conhecer a estrutura de dados do novo projeto. Para
isso, devemos:

1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
"star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela".
Importante: verifique se tudo funciona corretamente acessando qualquer um
dos filmes uma vez que a estrutura correspondente tenha sido criada.

2. Os filmes devem estar todos em letras maiúsculas. Para isso, crie uma função
que recebe um array por parâmetro e converta o conteúdo de cada elemento em letras maiúsculas.
Dica: revise o que faz o método de strings .toUpperCase()

3. Crie outra estrutura semelhante à primeira, mas com os seguintes filmes de
animação:
"Toy Story", "Procurando Nemo", "Kung-fu Panda", "Wally", "Fortnite"
Em seguida, crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.

4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.
PS: por precaução, salve o elemento que você vai deletar em uma variável.

5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
//const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
//const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.

Para verificar se tudo está bem até agora, recomendamos testar cada uma das funções, a fim de verificar seu correto funcionamento.
Se chegarmos a este ponto e tudo estiver bem, o tech leader da equipe deve estar extremamente feliz com nosso trabalho e desempenho.
Bom trabalho!

*/

// 1. Criar a estrutura apropriada para armazenar os seguintes filmes e séries:
let filmes_e_series = ["star wars", "matrix", "mr. robot", "o preço do amanhã", "a vida é bela"];

// 2. Os filmes devem estar todos em letras maiúsculas.
function maiusculas(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] = array[i].toUpperCase();
    }
    return array;
}

console.log(filmes_e_series);
console.log(maiusculas(filmes_e_series));


// 3. Filmes de animação. Crie uma função que receba dois arrays como parâmetros, para poder adicionar os elementos contidos no segundo array, dentro do primeiro, a fim de retornar um único array com todos os filmes como seus elementos.
// 4. Durante o processo, percebemos que o último elemento na série de filmes animados é, na verdade, um game. Agora devemos editar nosso código e modificá-lo  para que possamos remover o último elemento antes de migrar o conteúdo para o array que contém todos os filmes.

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


/* 5. Finalmente, recebemos dois arrays com classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato:
    const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4]
    const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]
Crie uma função que compare as notas e nos diga se elas são iguais ou diferentes.
*/

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

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