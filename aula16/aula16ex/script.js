const button = document.getElementById("button");
button.addEventListener("click", add);

const div = document.getElementById("res");
const select = document.getElementById("select");

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "parag");
const list = [];

function add() {
  let inputNumber = document.getElementById("number");

  if (inputNumber.value == 0 || inputNumber.value < 1 || inputNumber.value > 100) {
    return alert("Valor inválido ou já encontrado na lista!");
  } else {
    let item = document.createElement("option");
    let inpNumber = Number(inputNumber.value);
    item.text = `Valor ${inpNumber} adicionado.`;
    select.appendChild(item);
    list.push(inpNumber);
  };
  
}

function finalize() {
  if (list.length === 0) {
    alert("Adicione valores antes de finalizar!");
  } else {

    paragraph.innerHTML = `Ao todo temos ${list.length} valores cadastrados! </br>`;
    res.appendChild(paragraph);
    
    //maior valor
    let bigValue = list[0];
    for (let i = 1; i < list.length; i++) {
      if (list[i] > bigValue) {
        bigValue = list[i];
      };
    };

    //menor valor
    let lowerValue = list[0];
    for ( let i = 1; i < list.length; i++) {
      if (list[i] < lowerValue) {
        lowerValue = list[i];
      };
    };

    //soma
    let sum = 0
    for (let i = 0; i < list.length; i++) {
      sum += list[i];
    };
    let media = sum / list.length;

    paragraph.innerHTML += `O maior valor informado foi ${bigValue} </br>`;

    paragraph.innerHTML += `O menor valor informado foi ${lowerValue} </br>`;

    paragraph.innerHTML += `A soma de todos os valores é ${sum} </br>`;

    paragraph.innerHTML += `A média de todos os valores é ${media} </br>`
  };
};