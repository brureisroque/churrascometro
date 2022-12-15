// 400 gramas de carne por pessoa - mais de 6 horas 650
// 1200ml de cerveja por pessoas - mais de 6 horas 2000ml
// 1000 ml de bebida por pessoas - mais de 6 horas 1500ml

// armazenamento dos inputs
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("calculando...");

// variaveis que dao valor aos inputs 
let adultos = inputAdultos.value;
let criancas = inputCriancas.value;
let duracao = inputDuracao.value;

// calculo da carne, cerveja e bebidas
let qtdCarne = CarnePP(duracao) * adultos + (CarnePP(duracao)/2 * criancas);
let qtdCerveja = CervejaPP(duracao) * adultos;
let qtdBebidas = BebidasPP(duracao) * adultos + (BebidasPP(duracao)/2 * criancas);


resultado.innerHTML = `<p>${qtdCarne /1000} Kg de Carne</p>`
resultado.innerHTML += `<p>${qtdCerveja/1000} Litros de Cerveja<p>`
resultado.innerHTML += `<p>${qtdBebidas/1000} Litros de Refrigerante<p>`
}
// funçao para calcular a carne pela duraçao
function CarnePP(duracao){
    if(duracao >= 6){
    return 650;

    } else {
        return 400;   
    }     
}

// funçao para calcular cerveja pela duraçao
function CervejaPP(duracao){
    if (duracao >= 6){
        return 2000;
    } else {
        return 1200;
    }
}

// funçao para calcular bebidas pela duraçao
function BebidasPP(duracao){
    if (duracao >= 6){
        return 1500;
    } else {
        return 1000;
    }}