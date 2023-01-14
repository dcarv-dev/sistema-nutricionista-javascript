var botaoAdicionaNaTabela = document.querySelector("#adicionar-paciente");
botaoAdicionaNaTabela.addEventListener("click", function (event) {
    event.preventDefault();

    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    var formNovosPacientes = document.querySelector("#form-adiciona");
    var paciente = pegaPacienteDoForm(formNovosPacientes);

    //tratamento de erros
    var listaErros = document.querySelector(".mensagem-erro");
    var erros = validaPaciente(paciente);
    if (erros.length > 0) {
        exibeErros(erros);
        return;
    }

    var novoPacienteTr = montaTr(paciente);

    tabelaPacientes.appendChild(novoPacienteTr);
    

    listaErros.innerHTML = "";

    formNovosPacientes.reset();


})

function pegaPacienteDoForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}
function validaPaciente(paciente) {
    var erros = [];

    if (!validaNome(paciente.nome)) erros.push("Nome inválido.");

    if (!validaPeso(paciente.peso)) erros.push("Peso inválido.");

    if (!validaAltura(paciente.altura)) erros.push("Altura inválida.");

    if (!validaGordura(paciente.gordura)) erros.push("Gordura inválida.");

    return erros;
}
function exibeErros(erros) {
    var listaErros = document.querySelector(".mensagem-erro");
    listaErros.innerHTML = "";
    erros.forEach(function (erro) {
        var liErro = document.createElement("li");
        liErro.textContent = erro;
        listaErros.appendChild(liErro);
    });

}
function montaTd(dado, classe) {
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);
    return td;
}
function montaTr(paciente) {
    var novoPacienteTr = document.createElement("tr");

    novoPacienteTr.classList.add("paciente");

    novoPacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    novoPacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    novoPacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    novoPacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    novoPacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));
    return novoPacienteTr;
}
