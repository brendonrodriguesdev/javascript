let hora = 24
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
    console.log('Bom dia!')
} else if (hora <= 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}

//colocar o boa madrugada e colocar mensagem de erro, caso eu coloque uma hora inexistente como 25h