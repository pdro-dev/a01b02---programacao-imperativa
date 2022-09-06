// ARROW FUNCTIONS

function soma(a, b) {
    return a + b;
}

let somaArrow = (a, b) => a + b;

console.log(soma(1, 2));
console.log(somaArrow(1, 2));


// callbacks
// ex.1
function resultado(msg, valor1, valor2, callback){
    console.log(msg + ' ' + callback(valor1, valor2));
}

resultado('O resultado da soma é: ', 1, 2, soma);

// ex.2
let nomeCitacao = (nome, sobrenome, ano) => {
    return sobrenome + ', ' + nome + ' (' + ano + ')';
}

function nomeCadastro(nome, sobrenome, ano, callback) {
    return callback(nome, sobrenome, ano);
}

console.log(nomeCadastro('João', 'Silva', '2022', nomeCitacao));