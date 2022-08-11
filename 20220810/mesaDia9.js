
// POLEGADAS PARA CENTIMETROS

function polegadasParaCentimetros(polegadas) {
    centimetros = polegadas * 2.54;
    return polegadas + " polegadas equivalem a " + centimetros + " centímetros";
}

console.log(polegadasParaCentimetros(10));


// EXCLAMACAO

function exclamacao(texto) {
    return texto + "!";
}

console.log(exclamacao("Olá"));


// HORA DE TRABALHO POR SALARIO

function horaDeTrabalho(salarioMensal) {    
    return "Voce vai receber " + salarioMensal / 160 + " por hora de trabalho";
}

console.log(horaDeTrabalho(5000));

// IMC

function imc(peso, altura) {
    return peso / (altura * altura);
}

console.log(imc(80, 1.70));