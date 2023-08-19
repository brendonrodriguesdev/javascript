const button = document.getElementById("button");
button.addEventListener("click", add);

const div = document.getElementById("res");
const select = document.getElementById("select");

const paragraph = document.createElement('p');
paragraph.setAttribute('id', 'parag');
const list = [];

function add() {
  let inputNumber = document.getElementById("number");

  if (inputNumber.value == 0) {
    return alert("Valor inválido ou já encontrado na lista!");
  } else {
    let item = document.createElement("option");
    let inpNumber = Number(inputNumber.value);
    item.text = `Valor ${inpNumber} adicionado.`;
    select.appendChild(item);
    return list.push(inpNumber);
  }
}

function finalize() {
  if (list.length === 0) {
    alert("Adicione valores antes de finalizar!");
  } else {
    paragraph.innerHTML = `Ao todo temos ${list.length} valores cadastrados!`
    res.appendChild(paragraph);

    paragraph.innerHTML += `O maior valor informado foi ${list} `
  }
};