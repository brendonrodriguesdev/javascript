let button = document.getElementById("button");
button.addEventListener("click", add);

let div = document.getElementById("res");
let select = document.getElementById("select");

function add() {
  let inputNumber = document.getElementById("number");
  let inpNumber = Number(inputNumber.value);

  let list = [];

  if (inpNumber === 0) {
    return alert("Valor inválido ou já encontrado na lista!");
  } else {
    let item = document.createElement("option");
    item.text = `Valor ${inpNumber} adicionado.`;
    select.appendChild(item);
    return list = inpNumber;
  }
};