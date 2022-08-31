const funcConta = require('./modulos/conta');
const dadosPessoas = require('./modulos/pessoas');


let listaContas = [];

for (let i = 0; i < dadosPessoas.length; i++) {
    listaContas.push(new funcConta(dadosPessoas[i].titular, dadosPessoas[i].numero, dadosPessoas[i].tipo, dadosPessoas[i].saldo) );
}

console.log(listaContas);