// createHeader();
createMain();
// createFooter();

function createHeader() {
    const header = document.createElement('header');

    const aTitle = document.createElement('a');
    aTitle.setAttribute('href', './index.html');
    aTitle.setAttribute('id', 'titulo-cabecalho');
    aTitle.textContent = 'ProzTech';

    const nav = document.createElement('nav');
    nav.setAttribute('class', 'menu');

    const aAbout = document.createElement('a');
    aAbout.setAttribute('href', './sobrenos.html');
    aAbout.setAttribute('class', 'item-menu');
    aAbout.textContent = 'Sobre';

    const aLogin = document.createElement('a');
    aLogin.setAttribute('href', './login.html');
    aLogin.setAttribute('class', 'item-menu');
    aLogin.textContent = 'Entrar';

    const aRegister = document.createElement('a');
    aRegister.setAttribute('href', './cadastro.html');
    aRegister.setAttribute('id', 'btn-cadastro');
    aRegister.textContent = 'Cadastre-se';

    nav.appendChild(aAbout);
    nav.appendChild(aLogin);
    nav.appendChild(aRegister);

    header.appendChild(aTitle);
    header.appendChild(nav);

    document.body.insertBefore(header, document.body.firstChild);

}

function createFooter() {
    const footer = document.createElement('footer');

    const h1 = document.createElement('h1');
    h1.setAttribute('id', 'ano-rodape');
    h1.textContent = '2023';

    const p = document.createElement('p');
    p.setAttribute('id', 'texto-rodape');
    p.textContent = 'ProzTech - Todos os direitos reservados';

    footer.appendChild(h1);
    footer.appendChild(p);

    document.body.appendChild(footer);
}

function createMain() {
    const main = document.createElement('main');

    const divContainer = document.createElement('div');
    divContainer.setAttribute('class', 'login-container');

    const h2 = document.createElement('h2');
    h2.setAttribute('class', 'text-center');
    h2.textContent = 'Login';

    const spanMenssage = document.createElement('span');
    spanMenssage.setAttribute('class', 'display-none');
    spanMenssage.setAttribute('id', 'menssage');
    spanMenssage.textContent = 'Usuário Inválido';

    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.setAttribute('method', 'post');
    form.setAttribute('onsubmit', 'return validarUsuario(event)');

    const divInputGroupUser = document.createElement('div');
    divInputGroupUser.setAttribute('class', 'input-group');

    const labelUser = document.createElement('label');
    labelUser.setAttribute('for', 'username');
    labelUser.textContent = 'Usuário';

    const inputUser = document.createElement('input');
    inputUser.setAttribute('type', 'text');
    inputUser.setAttribute('id', 'username');
    inputUser.setAttribute('name', 'username');
    inputUser.required = true;

    divInputGroupUser.appendChild(labelUser);
    divInputGroupUser.appendChild(inputUser);

    const divInputGroupPass = document.createElement('div');
    divInputGroupPass.setAttribute('class', 'input-group');

    const labelPass = document.createElement('label');
    labelPass.setAttribute('for', 'password');
    labelPass.textContent = 'Senha';

    const inputPass = document.createElement('input');
    inputPass.setAttribute('type', 'password');
    inputPass.setAttribute('id', 'password');
    inputPass.setAttribute('name', 'password');
    inputPass.required = true;

    const buttonShowPass = document.createElement('button');
    buttonShowPass.setAttribute('type', 'button');
    buttonShowPass.setAttribute('id', 'show-password');
    buttonShowPass.setAttribute('onclick', 'mostrarSenha()');
    buttonShowPass.textContent = 'Mostrar Senha';

    divInputGroupPass.appendChild(labelPass);
    divInputGroupPass.appendChild(inputPass);
    divInputGroupPass.appendChild(buttonShowPass);

    const buttonSubmit = document.createElement('button');
    buttonSubmit.setAttribute('type', 'submit');
    buttonSubmit.textContent = 'Entrar';

    form.appendChild(divInputGroupUser);
    form.appendChild(divInputGroupPass);
    form.appendChild(buttonSubmit);

    divContainer.appendChild(h2);
    divContainer.appendChild(spanMenssage);
    divContainer.appendChild(form);

    main.appendChild(divContainer);

    document.body.appendChild(main);

}

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

function validarUsuario(e) {
    e.preventDefault();

    var menssage = document.getElementById("menssage");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "Teste123" && password === "Teste@123") {
        alert("Usuário validado com sucesso!");
        e.target.submit();
        return true;
    } else {
        // alert("Usuário ou senha inválidos.");
        menssage.textContent = "Usuário ou senha inválidos.";
        menssage.classList.remove("display-none");
        return false;
    }
}
