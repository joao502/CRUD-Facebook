let usuario = document.getElementById('usuario'); 
let password = document.getElementById('password');
let email = document.getElementById('email');
let masculino = document.getElementById('masculino');
let feminino = document.getElementById('feminino');
let outro = document.getElementById('outro');
let dataBox = document.getElementById('dataBox');
let btnCadastro = document.getElementById('btn-cadastro');

btnCadastro.addEventListener('click',() => {
    

     //Aqui vamos pegar o usuario digitado
     const inputUsuario = document.querySelector("usuario")

     const value = usuario.value

     //Aqui vamos pegar o email digitado

     const inputEmail = document.querySelector("email")

     const valor = email.value

     //Aqui vamos pegar o password digitado

     const inputPassword = document.querySelector("password")

     const recebido = password.value

     //Aqui vamos imprimir na tela os valores

     console.log(value,valor,recebido)

     
    
        alert("Salvo, bem vindo ao facebook 2")

     


});
//! pegar o usuario digitado
//! pegar o email digitado
//! pegar a senha digitada
//! pegar o sexo escolhido
//! pegar  a data de nascimento escolhida
//! salvar tudo ao clicar em cadastrar
