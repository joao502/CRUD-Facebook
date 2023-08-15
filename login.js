let usuario = document.getElementById('usuario'); 
let password = document.getElementById('password');
let btnLogin = document.getElementById('btn-login');
let btnCadastro = document.getElementById('btn-cadastrar');

const usuarioBanco = "JVnine"
const passwordBanco = "123"

btnLogin.addEventListener('click',() => {

    //Aqui vamos pegar o usuario digitado
    let inputUsuario = usuario.value;
    //Aqui vamos pegar o password digitado
    let inputPassword = password.value;  
    
    //Aqui vamos validar se o usuario e senha estão corretos

    if (inputUsuario === usuarioBanco && inputPassword === passwordBanco){
        
        window.location.href = "Facebook-home/home.html";
    }
    else{
        alert("Usuário ou senha incorreto!");
    }

})


btnCadastro.addEventListener('click',() => {

    window.location.href = "Facebook-cadastro/cadastro.html"

   
})