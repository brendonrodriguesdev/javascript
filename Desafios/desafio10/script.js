function calcular() {
    let valorA = prompt('Qual é o valor de A?');
    let valorB = prompt("Qual é o valor de B?");
    let valorC = prompt('Qual é o valor de C?');
    let resultado = document.getElementById('res');

    let bhaskara = (Number(valorB) ** 2) - 4 * Number(valorA) * Number(valorC);

    resultado.innerHTML = `<p>A equação atual é ${valorA}x² ${valorB}x ${valorC} = 0</p>`;

    resultado.innerHTML += `<p>O cálculo realizado será ${valorB}² - 4 . ${valorA} . ${valorB}</p>`;

    resultado.innerHTML += `O valor calculado foi: ${bhaskara}`;
}