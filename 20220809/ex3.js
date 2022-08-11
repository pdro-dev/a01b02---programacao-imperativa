let n1 = 1;
let n2 = 2;
let soma = n1 + n2;
console.log(soma); // exercício 1 e 3

let subt = n1 - n2;
console.log(subt); // exercício 2

let somaSoma = soma;
console.log(somaSoma); // exercício 4

n1 = "1" + 1;
console.log(n1); // exercício 5: interpreta ambos como string

let ola = "ola" + 23;
console.log(ola); // exercício 6: interpreta ambos como string

console.log(ola + n1 + n2)



// exercício IMC = peso / altura²

let nome = "João";
let idade = 23;
let plano = "tem";

let peso = 80;
let altura = 1.80;
let imc = peso / (altura * altura);

console.log(imc);
console.log(nome + " tem " + idade + " anos e seu indice de massa corporal é de " + imc);