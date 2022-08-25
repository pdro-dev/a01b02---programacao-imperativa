/*
Descrição do problema

É necessário determinar o vencedor de um concurso de Stand-Up composto por 3 apresentações por participante.

O público, no máximo 100 pessoas, votou quem eles acham que era melhor no final de cada etapa. Por exemplo, Alice sobe, se apresenta e desce; Bob sobe, aparece e desce. 

Após a apresentação, o público vota indicando quem eles acham que ganhou aquela rodada. Após isto, continua a próxima rodada assim como a primeira. E finalmente a terceira.

Este problema exemplificado em uma planilha ficaria da seguinte forma:

participante	1º votos	1º vencedor	2º votos	2º vencedor	3º votos	3º vencedor	resultado
							
Como esses concursos são realizados online, milhares acontecem todos os dias. Chegamos ao nosso servidor as informações para cada concurso em formato de array, uma para cada participante, portanto, as recebemos da seguinte forma: 


A matriz de Alice é: alice = [ 23, 82, 46 ]
A matriz de Bob é: bob = [ 45, 8, 32]

    const Alice = [23, 82, 46];
    const Bob = [45, 8, 32];

    function encontrarGanhador (a, b) {
        //solução
    }



A tarefa é enfrentar esses votos comparando a[0] com b[0], a[1] com b[1] e a[2] com b[2].


	Se a[i] > b[i], então Alice recebe 1 ponto.
	Se a[i] < b[i], então Bob recebe 1 ponto.
	Se a[i] = b[i], nenhuma pessoa recebe um ponto.

Os pontos de comparação são os pontos totais que uma pessoa ganhou. Não os votos, mas os pontos ganhos em cada etapa.

exemplo:
const alicia  = [23, 67, 32];
const bob  = [12, 67, 43];

pontosAlicia = 1
pontosBob = 1

Para os itens do índice 0, Alice recebe um ponto porque a[0] > b[0].
Para a próxima fase, a[1] e B[1] são iguais, não são obtidos pontos.
Finalmente, para elementos do índice 2 (terceira etapa), a[2] < b[2] para que Bob receba um ponto.

    const alicia = [23, 82, 46];
    const bob = [45, 8, 32];

    function encontrarGanhador (a, b) {
        let pontosPrimeiroParticipante = 0;
        let pontosSegundoParticipante = 0;
        //continua con esto.
    }

    console.log("O ganhador é: " + encontrarGanhador (a, b))							

Tendo em mente os enunciados e como funciona o sistema de pontos, devemos calcular e encontrar o vencedor utilizando uma estrutura for que evite ter que calcular cada rodada separadamente, lembre-se de usar as estruturas if/else, se necessário, para comparar os votos de cada participante. 

*/

//const alicia = [23, 82, 46];
//const alicia = [45, 0, 32];
const alicia = [45, 8, 32];
const bob = [45, 8, 32];

function encontrarGanhador (a, b) {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;
    
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            pontosPrimeiroParticipante++;
        } else if (a[i] < b[i]) {
            pontosSegundoParticipante++;
        } else {
            continue;
        }
    }

    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return "Alicia";
    } else if (pontosPrimeiroParticipante < pontosSegundoParticipante) {
        return "Bob";
    } else {
        return "Empate";
    }
}



console.log("O ganhador é: " + encontrarGanhador (alicia, bob))