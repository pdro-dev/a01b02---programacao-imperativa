/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

    1. a média das idades das pessoas que responderam ótimo;
    2. a quantidade de pessoas que responderam regular;
    3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/

// importar modulo de dados
const dados = require('./modules/dados');
// importar modulo de funcao construtora
const Resposta = require('./modules/cfunc_dados');
// importar modulo de funcoes
const { Quantidades, Medias, Porcentagens } = require('./modules/funcoes');


// inserir dados no array de objetos
dados.respostas.push(new Resposta(20, 3));
dados.respostas.push(new Resposta(25, 3));
dados.respostas.push(new Resposta(30, 1));
dados.respostas.push(new Resposta(35, 2));
dados.respostas.push(new Resposta(40, 2));

// respostas da atividade
// 1. a média das idades das pessoas que responderam ótimo;
console.log(`A média das idades das pessoas que responderam ótimo é ${Medias.mediaIdadesOtimo(dados.respostas)}`);
// 2. a quantidade de pessoas que responderam regular;
console.log(`A quantidade de pessoas que responderam regular é ${Quantidades.quantRegular(dados.respostas)}`);
// 3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
console.log(`A porcentagem de pessoas que responderam bom entre todos os espectadores analisados é ${Porcentagens.porcentagemBom(dados.respostas)}`);

// outras informacoes do array de objetos respostas
console.log(`O array de objetos respostas tem ${dados.respostas.length} elementos`);