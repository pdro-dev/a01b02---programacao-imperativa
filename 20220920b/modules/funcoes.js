/*
Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.

Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:

    1. a média das idades das pessoas que responderam ótimo;
    2. a quantidade de pessoas que responderam regular;
    3. a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
*/


// importar o array de objetos
const { respostas } = require('./dados');

// funcoes para calcular as quantidades
let Quantidades = {
    quantRespostas: respostas.length,

    quantOtimo: (array) => {
        let quantOtimo = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 3) {
                quantOtimo++;
            }
        }
        return quantOtimo;
    },

    quantBom: (array) => {
        let quantBom = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 2) {
                quantBom++;
            }
        }
        return quantBom;
    },

    quantRegular: (array) => {
        let quantRegular = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 1) {
                quantRegular++;
            }
        }
        return quantRegular;
    }
}




// funcao para calcular a media das idades
let Medias = {
    mediaIdadesOtimo: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 3) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantOtimo(array);
    },

    mediaIdadesBom: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 2) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantBom(array);
    },

    mediaIdadesRegular: (array) => {
        let somaIdades = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].opiniao === 1) {
                somaIdades += array[i].idade;
            }
        }
        return somaIdades / Quantidades.quantRegular(array);
    }
}




// funcao para calcular a porcentagens
let Porcentagens = {
    porcentagemBom: (array) => {
        return (Quantidades.quantBom(array) / Quantidades.quantRespostas) * 100;
    },

    porcentagemRegular: (array) => {
        return (Quantidades.quantRegular(array) / Quantidades.quantRespostas) * 100;
    },

    porcentagemOtimo: (array) => {
        return (Quantidades.quantOtimo(array) / Quantidades.quantRespostas) * 100;
    }
}

// exportar as funcoes como modulos
module.exports = {
    Quantidades,
    Medias,
    Porcentagens
}
