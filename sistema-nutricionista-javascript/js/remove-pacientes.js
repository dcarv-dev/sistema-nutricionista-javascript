var tabela = document.querySelector("tbody");
tabela.addEventListener("dblclick", function (event) {
    if(confirm("Tem certeza que deseja remover o paciente? Ação não pode ser desfeita.") == false){
        return;
    }
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function () {
        event.target.parentNode.remove();
    }, 500);
});