function mostrarSenha() {
    var senha = document.getElementById("password");
    var button = document.getElementById("show-password");
    if (senha.type === "password") {
        senha.type = "text";
        button.textContent = "Esconder senha";
    } else {
        senha.type = "password";
        button.textContent = "Mostrar senha";
    }
}

function validarUsuario() {
    var menssage = document.getElementById("menssage");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "fabriciolc20001" && password === "Teste@123") {
        alert("Usuário validado com sucesso!");
        return true;
    } else {
        // alert("Usuário ou senha inválidos.");
        menssage.textContent = "Usuário ou senha inválidos.";
        menssage.classList.remove("display-none");
        return false;
    }
}