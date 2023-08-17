let button = document.getElementById("button");
button.addEventListener("click", add);
function add() {
  if (inpNumber === 0) {
    return alert("Valor inválido ou já encontrado na lista!");
  }
}

let inputNumber = document.getElementById("number");
let inpNumber = Number(inputNumber.value);
