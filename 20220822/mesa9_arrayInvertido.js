/* 
Array Invertido

Neste exercício, você terá que criar uma função que retorne um array com seus
elementos invertidos, sem modificá-lo. Então, você deve fazer uma função que o
modifique e inverta a ordem de seus elementos.

1. Crie a função imprimirInverso que pega um Array como um argumento e
imprime cada elemento em ordem reversa no console (você não precisa
inverter o Array).

2. Crie a função inverter que recebe um Array como argumento e retorna um novo
invertido.

*/


// 1. Crie a função imprimirInverso ...

let = array = [1, 2, 3, 4, 5];

function imprimirInverso(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        console.log(array[i]);
    }
}

console.log(imprimirInverso(array));


// 2. Crie a função inverter ...

function inverter(array) {
    let arrayInvertido = [];
    for (let i = array.length - 1; i >= 0; i--) {
        arrayInvertido.push(array[i]);
    }
    return arrayInvertido;
}

console.log(inverter(array));
