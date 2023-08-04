function carregar () {
    let mensagem = document.getElementById('msg');
    let imagem = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    let segundos = data.getSeconds();

    mensagem.innerText = `Agora são exatamente ${hora}:${minutos}:${segundos}h`;

    if (hora >= 0 && hora < 12) {
        //bom dia
        imagem.src = 'imagens/imgManha.jpg'
        document.body.style.background = 'white'
        mensagem.innerText += 'Tenha um bom dia! '

    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        imagem.src = 'imagens/imgTarde.jpg'
        document.body.style.background = 'orange'
        mensagem.innerText += '\n Tenha uma boa tarde!'

    } else {
        //boa noite
        imagem.src = 'imagens/imgNoite.jpg'
        document.body.style.background = '#121416'
        mensagem.innerText += 'Tenha uma boa noite'
    };
};
