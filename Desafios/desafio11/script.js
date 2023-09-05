function verificar() {
    let anoAVerificar = prompt('Qual é o ano que você quer verificar?');
    let resultado = document.getElementById('res');

    let date = new Date();
    let ano = date.getFullYear();

    if(ano % 0) {
        resultado.innerHTML = ``
    }
}