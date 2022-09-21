// criar funcao construtora de objetos com as propriedades altura e sexo

function Pessoa(altura, sexo) {
    this.altura = altura;
    this.sexo = sexo;
}

// exportar a funcao construtora como modulo
module.exports = Pessoa;