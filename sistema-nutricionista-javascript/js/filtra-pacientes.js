var campoFiltro = document.querySelector(".campo-filtro");
campoFiltro.addEventListener("input", function () {
    var pacientes = document.querySelectorAll(".paciente");
    if (this.value.length > 0) {
        pacientes.forEach(function (paciente) {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var regex = new RegExp(campoFiltro.value, "i"); //case insensitive
            if (!regex.test(nome)) {
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        });
    }else {
        pacientes.forEach(function(paciente){
            paciente.classList.remove("invisivel");
        })
    }

});