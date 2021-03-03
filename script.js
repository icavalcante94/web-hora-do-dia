function carregar(){
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    // var hora = 22
    
    if(hora >= 0 && hora < 12 ){
        //Bom dia
        msg.innerHTML = 'Bom dia! '
        img.src = 'https://i.ibb.co/h2s2cn2/fotomanha.png'
        document.body.style.background = '#e4d5c8'
    }else if( hora >= 12 && hora < 18){
        //Boa tarde
        msg.innerHTML = 'Boa tarde! '
        img.src = 'https://i.ibb.co/4RYVqNP/fototarde.png'
        document.body.style.background = '#bd8972'
    }else{
        //Boa noite
        msg.innerHTML = 'Boa noite! '
        img.src = 'https://i.ibb.co/xS5vgXF/fotonoite.png'
        document.body.style.background = '#01404e'
    }

    msg.innerHTML += `Agora são ${hora} horas.`
}