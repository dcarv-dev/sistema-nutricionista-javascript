
function validaNome(nome) {
    if(nome.length > 2){
        return true;
    }
}
function validaGordura(gordura) {
    if(gordura > 0 && gordura < 100) {
        return true;
    }
}
function validaPeso(peso) {
    if (peso > 0 && peso < 1000) {
        return true;
    }
}
function validaAltura(altura) {
    if (altura > 0 && altura < 5.0) {
        return true;
    }
}
function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}
function adicionaImcNaTabela(peso, altura, tdImc) {
    if (validaPeso(peso) && validaAltura(altura)) {
        tdImc.textContent = calculaImc(peso, altura);
    }
}
function classificaImc(imc) {
    if (imc.textContent >= 18.05 && imc.textContent <= 24.09) {
        imc.classList.add("imcSaudavel");
    } else if (imc.textContent >= 35 && imc.textContent <= 39.09) {
        imc.classList.add("imcRuim");
    }
}


