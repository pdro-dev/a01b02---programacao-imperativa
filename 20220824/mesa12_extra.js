/*
Bônus extra

Se você chegou aqui, você está de parabéns!
Para que você não fique com o desejo ou que você possa continuar praticando se quiser, propomos mais alguns exercícios, tenha em mente que daqui os exercícios podem subir em dificuldade tanto estrutural quanto lógico; como sempre dizemos, paciência, ignore a complexidade e tente resolvê-la com as ferramentas que você tem à sua disposição, você também pode procurar informações extras no google ou documentações que você conhece!!

digitalHouse()

Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:

    ●	Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número.
    ●	Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso.
    ●	Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número.


*/

//Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:

function digitalHouse(num1, num2) {
    for (let i = 1; i <= 100; i++) {

        //Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido, você deve exibir a string "Digital" em vez do número.
        if (i % num1 == 0) {
            console.log("Digital");
        }

        //Se o número a ser impresso for um múltiplo do segundo parâmetro inserido, você deve exibir a string "House" em vez disso.
        if (i % num2 == 0) {
            console.log("House");
        }

        //Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você deve exibir a string "Digital House" em vez do número.
        if (i % num1 == 0 && i % num2 == 0) {
            console.log("Digital House");
        }
        else {
            console.log(i);
        }

    }
}

/*

somaArray()... Reloaded

Vamos pegar o exercício sumArray() que fizemos na classe arrays, mas desta vez vamos modificá-lo para que ele possa receber um array de números de qualquer quantidade de elementos.

Se você não se lembrar da instrução original:
Você deve criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles. 

exemplo: 
●	somaArray([1,2,3]) // 6
●	somaArray([10,  3,  10,  4]) // 27
●	somaArray([-5,100]) // 95

e como estamos ajustando as funções, vamos fazer o mesmo com a função do exercício de simulação join(). 
você deve modificar a função join()  para que ela possa receber uma matriz de strings de qualquer quantidade de elementos. 

Importante: Você não pode usar o método  original Array.join().

por exemplo:
join(["o","l","a"]) deve retornar a string "ola".
join(["t", "c","h","a,"u"]) deve retornar a string "tchau". 

*/

//criar uma função somaArray que aceita uma matriz de números e retorna a soma de todos eles.
function somaArray(array) {
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    return soma;
}

console.log(somaArray([1,2,3])) // 6
console.log(somaArray([10,  3,  10,  4])) // 27
console.log(somaArray([-5,100])) // 95


//criar uma função join() que aceita uma matriz de strings e retorna a string concatenada.
function join(arrayString) {
    let string = "";
    for (let i = 0; i < arrayString.length; i++) {
        string += arrayString[i];
    }
    return string;
}

console.log(join([ "o","l","a" ])) // "ola"
console.log(join([ "t","c","h","a","u" ])) // "tchau"