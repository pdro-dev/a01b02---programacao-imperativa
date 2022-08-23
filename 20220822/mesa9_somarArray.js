/* 

somarArray()

Neste exercício, você criará uma função somarArray() que aceita um array de números
e retorna a soma de todos eles.

Exemplo:
    ● somarArray([1,2,3]) // 6
    ● somarArray([10, 3, 10, 4]) // 27
    ● somarArray([-5,100]) // 95

*/


function somarArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3]));
console.log(somarArray([10, 3, 10, 4]));
console.log(somarArray([-5, 100]));