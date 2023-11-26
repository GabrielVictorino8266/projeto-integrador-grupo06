const emailInput = document.querySelector("#email")
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

emailInput.addEventListener("input", function()
    {
        if(!emailRegex.test(emailInput.value)) {
            emailInput.setCustomValidity("Formato Incorreto. Insira @ e/ou '.com'")
        }else{
            emailInput.setCustomValidity("")            
        }
    }
)

const senhaInput = document.querySelector("#password")
const senhaImgnumeros = document.querySelector("#senhaNumerosCondicao")
const senhaImgletras = document.querySelector("#senhaLetrasCondicao")


// Valdiacao Regex para numeros e letras
const possuiDoisNumero = /^(?=(?:.*\d){2}).*$/;
const RegexSenhaCorreta = /^(?=(?:.*\d){2})(?=(?:.*[a-zA-Z]){4}).*$/;
;

senhaInput.addEventListener("input", function(){
    if(!RegexSenhaCorreta.test(senhaInput.value)){
        senhaInput.setCustomValidity("4 letras e 2 numeros.");
        senhaImgletras.src= "./img/caution.png"
        senhaImgnumeros.src= "./img/caution.png"
    }else{
        senhaInput.setCustomValidity("");
        senhaImgletras.src= "./img/check.png"
        senhaImgnumeros.src= "./img/check.png"

    }
})
