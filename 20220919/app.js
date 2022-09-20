/*
Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:	
    a maior e a menor altura do grupo;
    a média de altura das mulheres;
    o número de homens.
*/

// chamada do modulo com o array de objetos
let Quantidades = require('./modules/funcoes').Quantidades;
let Alturas = require('./modules/funcoes').Alturas;

// respostas atividade
console.log(`Respostas da atividade:`);
// a maior e a menor altura do grupo
console.log(`A maior altura do grupo é ${Alturas.maiorDoGrupo(Alturas.dados)}m e a menor é ${Alturas.menorDoGrupo(Alturas.dados)}m.`);
// a media de altura das mulheres
console.log(`A média de altura das mulheres é ${Alturas.mediaDasMulheres(Alturas.dados)}m.`);
// o numero de homens
console.log(`O número de homens é ${Quantidades.homens(Quantidades.dados)}.`);

// print para separar as respostas
console.log('----------------------------------------');

// respostas extras
console.log(`Respostas extras:`);
// chamada das propriedades do objeto Quantidades
console.log(`A quantidade de pessoas é ${Quantidades.total(Quantidades.dados)}`); // propriedade total do objeto Quantidades
console.log(`A quantidade de mulheres é ${Quantidades.mulheres(Quantidades.dados)}`); // propriedade mulheres do objeto Quantidades
console.log(`A quantidade de homens é ${Quantidades.homens(Quantidades.dados)}`); // propriedade homens do objeto Quantidades

// chamada das propriedades do objeto Alturas
console.log(`A maior altura do grupo é ${Alturas.maiorDoGrupo(Alturas.dados)}`);
console.log(`A menor altura do grupo é ${Alturas.menorDoGrupo(Alturas.dados)}`);
console.log(`A média de altura do grupo é ${Alturas.mediaDoGrupo(Alturas.dados)}`);
console.log(`A maior altura entre as mulheres é ${Alturas.maiorEntreMulheres(Alturas.dados)}`);
console.log(`A menor altura entre as mulheres é ${Alturas.menorEntreMulheres(Alturas.dados)}`);
console.log(`A média de altura das mulheres é ${Alturas.mediaDasMulheres(Alturas.dados)}`);
console.log(`A maior altura entre os homens é ${Alturas.maiorEntreHomens(Alturas.dados)}`);
console.log(`A menor altura entre os homens é ${Alturas.menorEntreHomens(Alturas.dados)}`);
console.log(`A média de altura dos homens é ${Alturas.mediaDosHomens(Alturas.dados)}`);


