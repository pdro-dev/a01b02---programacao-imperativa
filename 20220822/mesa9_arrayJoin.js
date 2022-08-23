/*

Simulação Array.join()

Neste exercício, você criará uma função chamada join que recebe um array e simula o
comportamento do método Array.join().

Importante: Não poderá utilizar o método Array.join() original.

Por exemplo:

join(["o","l","á"]) deve retornar a string "olá".
join([“t”,"c","h","a,"u"]) deve retornar a string "tchau".

*/

function join(array) {
    let string = "";
    for (let i = 0; i < array.length; i++) {
        string += array[i];
    }
    return string;
}

console.log(join(["o", "l", "á"]));
console.log(join(["t", "c", "h", "a", "u"]));