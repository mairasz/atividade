let emails = ["ariana.grande@gmail.com", "ethan.hawke@gmail.com"]
let senhas = ["123", "321"]
let usuarios = ["ariana", "ethan"]
let fotos = [`<img src="https://static01.nyt.com/images/2020/10/25/arts/23playlist/23playlist-articleLarge.jpg?quality=75&auto=webp&disable=upscale">`,`<img src= "https://s2.glbimg.com/GUB-YDZY_Xddbps--xlPQzfphqQ=/smart/e.glbimg.com/og/ed/f/original/2015/08/04/ethan-hawke.jpg">`]

function login(){

    let email = id_email.value
    let senha = id_senha.value
    let auth = false


    for (let contador = 0; contador < emails.length; contador++) {
        
        if(email == emails[contador]){
           if(senha == senhas[contador]){
            auth = true
            alert("Bem-vindo!")
            id_foto.innerHTML = fotos[contador]
            }
        }
    }

    if(auth == false){
        alert('e-mail ou senha incorretos. tente novamente')
    }
    

}
