function verificarIdade() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('anoNasc');
    let res = document.getElementById('resultado');
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        alert('tudo ok')
    }
}