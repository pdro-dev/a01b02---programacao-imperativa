function mensagem(nome, idade) {
    return "Olá eu sou o " + nome + " e tenho " + idade + " anos de idade";
}

console.log(mensagem("João", 20));

let msg = mensagem("Fulano", 30);
console.log(msg);

msg = mensagem("Sicrano", 40);
console.log(msg);

function soma(v1, v2) {
    let result = v1 + v2;
    return result;
}

console.log(soma(10, 20));


function url(dominio) {
    return "https://www." + dominio + ".com.br";
}

console.log(url("google"));

function idadeCachorroHumano(idade) {
    return idade * 7;
}

console.log(idadeCachorroHumano(10));