const button = document.getElementById("inputButton");
button.addEventListener("click", calcMedia);

let res = document.getElementById('res');

function calcMedia() {
  let studentName = prompt("Qual é o nome do aluno?");
  let score1 = prompt(`Primeira nota de ${studentName}:`);
  let score2 = prompt(`Segunda nota de ${studentName}:`);

  res.innerHTML = `<h1>Analisando a situação de ${studentName}</h1>`;

  //conversão de string para number
  let score1Formatted = Number(score1);
  let score2Formatted = Number(score2);

  let media = (score1Formatted + score2Formatted) / 2;

  res.innerHTML = `<p>Com as notas ${score1Formatted} e ${score2Formatted}, a média é ${media}.</p>`;

//   if (media > 6) {
//     res.innerHTML += `aprovado!`;
//   };

//   if (media > 3 || media < 6) {
//     res.innerHTML += `recuperação!`;
//   };

//   if (media < 3) {
//     res.innerHTML += `Reprovado!`;
//   };
};