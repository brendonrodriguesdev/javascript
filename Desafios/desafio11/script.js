function verificar() {
    let anoVerificar = prompt('Qual é o ano que você quer verificar?');
    let resultado = document.getElementById('res');

    resultado.innerHTML = `<h1>Analisando o ano de ${anoVerificar}...</h1>`;

    if(Number(anoVerificar) % 4 == 0 && Number(anoVerificar) % 100 != 0 || Number(anoVerificar) % 400 == 0) {
        resultado.innerHTML += `O ano de ${anoVerificar} <span class="bissexto"> é bissexto!</span>✅`;
    } else {
        resultado.innerHTML += `O ano de ${anoVerificar} <span class="naoBissexto">não é bissexto!❌</span>`;
    };
};