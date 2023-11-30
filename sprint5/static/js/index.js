// Codigo JS
let btnClicked = false

const btnLike = document.querySelector(".like-btn")
const btnUnlike = document.querySelector(".unlike-btn")


function like() {
    if (btnClicked === false) {
        btnLike.innerHTML = `
        <i class="fa-solid fa-thumbs-up"></i>
        `;
        btnClicked = true;

    }
    else if (btnClicked === true) {

        btnLike.innerHTML = `
        <i class="fa-regular fa-thumbs-up"></i>
        `;
        btnClicked = false;
    }
}

function unlike() {
    if (btnClicked === false) {
        btnUnlike.innerHTML = `
        <i class="fa-solid fa-thumbs-down"></i>
        `;
        btnClicked = true;

    }
    else if (btnClicked === true) {

        btnUnlike.innerHTML = `
        <i class="fa-regular fa-thumbs-down"></i>
        `;
        btnClicked = false;
    }
}

btnLike.addEventListener(click, like)
btnUnlike.addEventListener(click, unlike)