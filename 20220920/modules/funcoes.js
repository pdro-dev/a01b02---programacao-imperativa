/*

Agora que você já criou estes códigos nas aulas 19 e 20, recrie-os de forma modular.
Aplicando os conceitos de objetos literais e módulos. Boa sorte!!

Faça um programa que calcule e escreva:	
    1. a maior e a menor altura do grupo;
    2. a média de altura das mulheres;
    3. o número de homens.
*/

// chamada do módulo com o array de objetos de dados
let Pessoas = require('./dados').Pessoas;


// funções para calcular as quantidades
// objeto para armazenar as quantidades
let Quantidades = {
    dados: Pessoas,
    // função para calcular a quantidade de pessoas
    total: (array) => {
        return array.length;
    },
    // função para calcular a quantidade de mulheres
    mulheres: (array) => {
        let cont = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo === 'F') {
                cont++;
            }
        }
        return cont;
    },
    // função para calcular a quantidade de homens
    homens: (array) => {
        let cont = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo === 'M') {
                cont++;
            }
        }
        return cont;
    }
}


// funções para calcular as alturas
// objeto para armazenar as alturas
let Alturas = {
    dados: Pessoas,
    // função para calcular a maior altura do grupo
    maiorDoGrupo: (array) => {
        let maior = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].altura > maior) {
                maior = array[i].altura;
            }
        }
        return maior.toFixed(2);
    },
    // função para calcular a maior altura entre as mulheres
    maiorEntreMulheres: (array) => {
        let maior = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo == 'F' && array[i].altura > maior) {
                maior = array[i].altura;
            }
        }
        return maior.toFixed(2);
    },
    // função para calcular a maior altura entre os homens
    maiorEntreHomens: (array) => {
        let maior = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo == 'M' && array[i].altura > maior) {
                maior = array[i].altura;
            }
        }
        return maior.toFixed(2);
    },
    // função para calcular a menor altura do grupo
    menorDoGrupo: (array) => {
        let menor = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].altura < menor) {
                menor = array[i].altura;
            }
        }
        return menor.toFixed(2);
    },
    // função para calcular a menor altura entre as mulheres
    menorEntreMulheres: (array) => {
        let menor = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo == 'F' && array[i].altura < menor) {
                menor = array[i].altura;
            }
        }
        return menor.toFixed(2);
    },
    // função para calcular a menor altura entre os homens
    menorEntreHomens: (array) => {
        let menor = array[0].altura;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo == 'M' && array[i].altura < menor) {
                menor = array[i].altura;
            }
        }
        return menor.toFixed(2);
    },
    // função para calcular a média de altura do grupo
    mediaDoGrupo: (array) => {
        let soma = 0;
        for (let i = 0; i < array.length; i++) {
            soma += array[i].altura;
        }
        return (soma / array.length).toFixed(2);
    },
    // função para calcular a média de altura das mulheres
    mediaDasMulheres: (array) => {
        let soma = 0;
        let cont = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo === 'F') {
                soma += array[i].altura;
                cont++;
            }
        }
        return (soma / cont).toFixed(2);
    },
    // função para calcular a media de altura dos homens
    mediaDosHomens: (array) => {
        let soma = 0;
        let cont = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i].sexo === 'M') {
                soma += array[i].altura;
                cont++;
            }
        }
        return (soma / cont).toFixed(2);
    }
}


// exportar os objetos
module.exports = {
    Quantidades,
    Alturas
}

