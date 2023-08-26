const inputButton = document.getElementById('readjust');
inputButton.addEventListener('click', readjust);

function readjust() {
    let employeeName = prompt('Qual é o nome do funcionário:');
    let salary = prompt(`Qual é o salário de ${employeeName}?`);
    let readjustSalary = prompt(`O salário de ${employeeName} vai ser reajustado em qual porcentagem?`);
    let result = document.getElementById('res');

    result.innerHTML = `<h1>${employeeName} recebeu um aumento salarial!</h1>`;

    result.innerHTML += `<p>O salário atual era R$${salary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;

    let percentageInDecimal = Number(readjustSalary) / 100;
    let valuePercentage = Number(salary) * percentageInDecimal;

    result.innerHTML += `<p>Com um aumento de ${readjustSalary}% o salário vai aumentar ${valuePercentage.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;

    let currentSalary = Number(salary) + Number(valuePercentage);

    result.innerHTML += `<p>E a partir daí, ${employeeName} vai passar a ganhar ${currentSalary.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>`;
};