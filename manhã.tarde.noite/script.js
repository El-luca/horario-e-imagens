function carregar() {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.textContent = `Agora são ${hora} as horas.`
    if (hora >= 0 && hora < 12){
       img.setAttribute ('src' , 'imagens/manha.jpg')
        document.body.style.background = '#fdff6b'
    }else if ( hora >= 12 && hora < 18){
        img.setAttribute('src' , 'imagens/tarde.jpg')
        document.body.style.background = '#c96100'
    }else {
        img.setAttribute('src' , 'imagens/noite.jpg')
        document.body.style.background = '#13364c'
    }
}
carregar()