/*Questão 1: Contagem de Pares
Escreva um programa que conte e exiba todos os números pares de 1 a 20.

let number = 1
for (let i = number; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}
*/

/*
Questão 2: Tabuada de um Número
Crie um programa que solicite um número ao usuário e mostre a tabuada desse número, multiplicando-o de 1 a 10.


let number = 6
let table = ''
for (let i = 1; i <= 10; i++) {
    table = `${number} x ${i} = ${number*i}`;
    console.log(table)
}
*/

/*
Questão 3: Soma dos Ímpares
Escreva um programa que calcule e exiba a soma de todos os números ímpares de 1 a 50.


let soma = 0;
for (let i = 1; i <= 50; i++) {
    if(i % 2 === 1) {
        soma += i
    }
}
console.log(soma)*/

/*
Questão 4: Números Decrescentes
Crie um programa que peça ao usuário para inserir um número e, em seguida, exiba todos os números de lá até 1, em ordem decrescente.
*/

let number = 30;
for (let i = number; i >= 1; i--) {
    console.log(i);
}