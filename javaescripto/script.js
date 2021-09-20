let nome = document.querySelector("#nome");
let email = document.querySelector("#email");
let assunto = document.querySelector("#assunto");
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector("#mapa");

nome.style.width = '100%';
email.style.width = '100%';

function validaNome() {
    let txt = document.querySelector("#txtNome");
    if(nome.value.length < 3) {
        txt.innerHTML = 'Nome inválido!';
        txt.style.color = 'red';
    } else {
        txt.innerHTML = 'Nome válido!';
        txt.style.color = 'green';
        nomeOk = true;
    }
}

function validaEmail() {
    let txtOutlook = document.querySelector("#txtEmail");
    if(email.value.indexOf('@') == -1) {
        txtOutlook.innerHTML = "E-mail inválido!";
        txtOutlook.style.color = "red";
    } else {
        txtOutlook.innerHTML = "E-mail válido!";
        txtOutlook.style.color = "green";
        emailOk = true;
    } 

}  

function validaAssunto() {
    let txtAssuntoNovo = document.querySelector("#txtAssunto");
    if(assunto.value.length >= 100) {
        txtAssuntoNovo.innerHTML = "Capacidade máxima de caracteres atingida!";
        txtAssuntoNovo.style.color = "red";
        txtAssuntoNovo.style.display = "block";
    } else {
        txtAssuntoNovo.style.display = "none";
        assuntoOk = true;
       
    }
}

function enviar() {
    if(nomeOk == true && emailOk == true && assuntoOk == true) {
        alert("Formulário enviado com sucesso!");
    } else {
        alert("Preencha o formulário corretamente!");
    }
}

function zoom() {
    mapa.style.width = "800px"
    mapa.style.height = "600px"

}

function normal() {
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}
