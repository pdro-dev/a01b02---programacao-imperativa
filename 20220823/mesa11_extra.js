/*
Bônus extra

Se você chegou aqui, você está indo muito bem! Parabéns!
Para que você não fique com o desejo ou que você possa continuar praticando se quiser, propomos esse outro exercício, tenha em mente esses exercícios podem ser mais difíceis, para resolvê-los é importante que você revise o que aprendeu até agora e você também pode procurar informações extras no google ou documentações que conhece!


    Participante A:  5, 8, 4, 9, 5;
    Participante B:  8, 7, 8, 6, 8;
    Participante C:  7, 5, 10, 8, 3.



Aplicativo para um concurso

Um cliente nos pede para fazer um aplicativo que possa determinar os vencedores de um concurso que foi realizado no fim de semana.

Para isso, precisaremos seguir as seguintes instruções e informações para poder desenvolver nosso aplicativo.  

Cada participante tem 5 notas, dos quais suas pontuações individuais serão formadas, os participantes com suas respectivas pontuações são:

O concurso consiste em 2 modalidades de seleção para um vencedor:

    ●	Melhor média (a maior pontuação média entre os concorrentes);

    ●	Maior e-tip(a maior pontuação entre as 5 notas de cada participante).

Com essas informações, nosso líder de Tecnologia nos pergunta o seguinte:

1.	Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

    Participante A:  5, 8, 4, 9, 5
    Participante B:  8, 7, 8, 6, 8
    Participante C:  7, 5, 10, 8, 3

2.	Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

3.	Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.

4.	Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

Bom trabalho!

*/

// 1.	Determine qual seria a maneira ideal de representar cada participante com suas pontuações.

let participante_A = [5, 8, 4, 9, 5];
let participante_B = [8, 7, 8, 6, 8];
let participante_C = [7, 5, 10, 8, 3];

// 2.    Crie uma função pontuacaoMedia à qual receba um participante por parâmetro e deve calcular e devolver a pontuação média dele.

function pontuacaoMedia(participante) {
    let soma = 0;
    for (let i = 0; i < participante.length; i++) {
        soma += participante[i];
    }

    media = soma / participante.length;
    return media;
}

console.log(pontuacaoMedia(participante_A));
console.log(pontuacaoMedia(participante_B));
console.log(pontuacaoMedia(participante_C));

// 3.    Crie uma função pontuacaoMaior que receba um participante por parâmetro e deve calcular e devolver a pontuação mais alta que o participante tem.

function pontuacaoMaior(participante) {
    let maior = participante[0];
    for (let i = 0; i < participante.length; i++) {
        if (participante[i] > maior) {
            maior = participante[i];
        }
    }
    return maior;
}

console.log(pontuacaoMaior(participante_A));
console.log(pontuacaoMaior(participante_B));
console.log(pontuacaoMaior(participante_C));

// 4.    Logo nosso líder tecnológico nos pede para criar essas duas funções, geramos uma nova funcionalidade chamada competição que receberá os 3 participantes por parâmetros, executará as duas funções criadas anteriormente para calcular as médias e pontuações mais altas de cada uma e deve anunciar (mostrar pelo console) o vencedor de cada modalidade de pontuação.

function competicao(participante_A, participante_B, participante_C) {

    let media_A = pontuacaoMedia(participante_A);
    let media_B = pontuacaoMedia(participante_B);
    let media_C = pontuacaoMedia(participante_C);
    let maior_A = pontuacaoMaior(participante_A);
    let maior_B = pontuacaoMaior(participante_B);
    let maior_C = pontuacaoMaior(participante_C);


    if (media_A > media_B && media_A > media_C) {
        console.log("O vencedor da modalidade de média é o participante A");
    } else if (media_B > media_A && media_B > media_C) {
        console.log("O vencedor da modalidade de média é o participante B");
    } else if (media_C > media_A && media_C > media_B) {
        console.log("O vencedor da modalidade de média é o participante C");
    } 
    
    if (maior_A > maior_B && maior_A > maior_C) {
        console.log("O vencedor da modalidade de maior e-tip é o participante A");
    } else if (maior_B > maior_A && maior_B > maior_C) {
        console.log("O vencedor da modalidade de maior e-tip é o participante B");
    } else if (maior_C > maior_A && maior_C > maior_B) {
        console.log("O vencedor da modalidade de maior e-tip é o participante C");
    }
}

competicao(participante_A, participante_B, participante_C);