// .map()
// mapeia um array e retorna um novo array

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dobro = numeros.map(function(numero) {
  return numero * 2;
});

console.log(dobro); // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

let triplo = numeros.map(numero => numero * 3);

console.log(triplo); // [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]


// .filter()
// filtra um array e retorna um novo array

let idades = [1, 7, 35, 12, 55, 22, 8, 3, 4, 5, 18, 60, 70];

let maioresQue18 = idades.filter(function(idade) {
  return idade >= 18;
});

let menoresQue18 = idades.filter(idade => idade < 18);

let entre20e30 = idades.filter(idade => idade >= 20 && idade <= 40);

console.log(maioresQue18); // [35, 55, 22, 18]
console.log(menoresQue18); // [1, 7, 12, 8, 3, 4, 5]
console.log(entre20e30); // [35, 22]


// .reduce()
// reduz um array para um único valor

let nums = [2, 4];

let soma = nums.reduce(function(total, numero) {
  return total + numero;
});

let soma2 = nums.reduce((total, numero) => total + numero);

let multiplicacao = nums.reduce((total, numero) => total * numero);

let media = nums.reduce((total, numero) => (total + numero) / nums.length);

console.log(soma);
console.log(soma2);
console.log(multiplicacao);
console.log(media);


// .forEach()
// executa uma função em cada item do array

let elementosMinusculos = ['a', 'b', 'c', 'd', 'e'];

let elementosMaiusculos = elementosMinusculos.forEach(function(elemento) {
  console.log(elemento.toUpperCase());
});

let elementosMaiusculos2 = elementosMinusculos.forEach(elemento => console.log(elemento.toUpperCase()));
