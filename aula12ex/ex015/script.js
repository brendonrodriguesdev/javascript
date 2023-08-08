function verificarIdade() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('anoNasc');
    let res = document.getElementById('resultado');
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }else {
        let fsex = document.getElementsByName('sexo');
        let idade = ano - Number(fano.value);
        let genero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-homem.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulto-homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/foto-bebe-mulher.jpg')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'imagens/foto-jovem-mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/foto-adulta-mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/foto-idosa-mulher.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}