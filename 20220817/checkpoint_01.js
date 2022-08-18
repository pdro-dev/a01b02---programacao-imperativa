/*

1 ͦ  Checkpoint de Programação Imperativa!
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".


menu de opções de comida:

pipoca - 10 segundos
macarrao - 8 segundos
carne - 15 segundos
feijao - 12 segundos
brigadeiro - 8 segundos

*/

const pratos = {
    pipoca: 10,
    macarrao: 8,
    carne: 15,
    feijao: 12,
    brigadeiro: 8,
}



function microondas(prato, tempo) {

    if (!(prato in pratos)) {
        console.log("Prato inexistente")
    }

    if (prato in pratos) {
        if ((tempo > pratos[prato] * 2) && (tempo < pratos[prato] * 3)) {
            console.log("Sua comida queimou! (" + prato + ", " + tempo + ")")
        } else if (tempo < pratos[prato]) {
            console.log("Tempo insuficiente! (" + prato + ", " + tempo + ")")
        } else if (tempo > pratos[prato] * 3) {
            console.log("kabumm! (" + prato + ", " + tempo + ")")
        } else {
            console.log("Prato pronto, bom apetite!!!! (" + prato + ", " + tempo + ")")
        }
    }
}



console.log("teste 0: frango - Prato Inexistente")
microondas("frango", 2) // Prato inexistente
console.log("")

console.log("teste 1: pipoca - 10 segundos")
microondas("pipoca", 21) // tempo 2x maior que o necessário
microondas("pipoca", 8) // tempo menor que o necessário
microondas("pipoca", 31) // tempo 3x maior que o necessário
microondas("pipoca", 10) // tempo correto
microondas("pipoca", 12) // tempo correto
console.log("")

console.log("teste 2: macarrao - 8 segundos")
microondas("macarrao", 17) // tempo 2x maior que o necessário
microondas("macarrao", 5) // tempo menor que o necessário
microondas("macarrao", 25) // tempo 3x maior que o necessário
microondas("macarrao", 8) // tempo correto
microondas("macarrao", 10) // tempo correto
console.log("")

console.log("teste 3: carne - 15 segundos")
microondas("carne", 31) // tempo 2x maior que o necessário
microondas("carne", 14) // tempo menor que o necessário
microondas("carne", 50) // tempo 3x maior que o necessário
microondas("carne", 15) // tempo correto
microondas("carne", 20) // tempo correto
console.log("")

console.log("teste 4: feijao - 12 segundos")
microondas("feijao", 25) // tempo 2x maior que o necessário
microondas("feijao", 10) // tempo menor que o necessário
microondas("feijao", 40) // tempo 3x maior que o necessário
microondas("feijao", 12) // tempo correto
microondas("feijao", 15) // tempo correto
console.log("")

console.log("teste 5: brigadeiro - 8 segundos")
microondas("brigadeiro", 17) // tempo 2x maior que o necessário
microondas("brigadeiro", 5) // tempo menor que o necessário
microondas("brigadeiro", 25) // tempo 3x maior que o necessário
microondas("brigadeiro", 8) // tempo correto
microondas("brigadeiro", 15) // tempo correto
console.log("")


