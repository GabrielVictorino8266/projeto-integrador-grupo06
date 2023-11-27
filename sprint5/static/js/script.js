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

createHeader();
createFooter();