// carne - 400gr por pessoa  + de 6 horas - 650
// cerveja - 1200ml por pessoa + 6 horas - 2000ml
//Refrigerante/agua - 1000ml por pessoa + 6 horas 1500ml

//crianças valem 0,5

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = adultos * carnePP(duracao) + (criancas * carnePP(duracao) / 2);
    let qtdTotalBebidaA = adultos * bebidasPA(duracao);
    let qtdTotalBebidaC = criancas * bebidasPC(duracao);

    resultado.innerHTML =`<p>${qtdTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML +=`<p>${qtdTotalBebidaA / 1000} Litros de Bebidas para Adultos</p>`
    resultado.innerHTML +=`<p>${qtdTotalBebidaC / 1000} Litros de Bebidas para Crianças</p>`


    
}

function carnePP(duracao){
    let t = duracao/6;

    if(t < 1) {
        return 400;
    } if(t>=1){
        Math.ceil(t)
        return 650 * t;
    }
}

function bebidasPA(duracao){
    let t = duracao;

    if(t < 6) {
        return 1200;
    } else{
        return 2000;
    }
}

function bebidasPC(duracao){
    let t = duracao;

    if(t < 6) {
        return 1000;
    } else{
        return 1500;
    }
}