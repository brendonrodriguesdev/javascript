function generateTable() {
    let inputNumber = document.getElementById('num');
    let boxSelect = document.getElementById('table');
    let res = document.getElementById('result');

    if (inputNumber.value === '') {
        alert('Por favor, digite um número!');
        return;
    }

    let numberTable = Number(inputNumber.value);
    let table = '';
    
    res.innerHTML = `Segue abaixo, a tabuada do número ${numberTable}</br></br>`

    for (let i = 1; i <= 10; i++) {
        table += `${numberTable} x ${i} = ${numberTable*i}</br>`
    }

    res.innerHTML += table;
}