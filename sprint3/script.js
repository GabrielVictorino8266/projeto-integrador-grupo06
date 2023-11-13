// Codigo JS

const fotoPerfilPostagens = document.querySelectorAll('img')

fotoPerfilPostagens[0].alt = ''
fotoPerfilPostagens[1].alt = ''
fotoPerfilPostagens[2].alt = ''

// const nav = document.querySelector(".nav");
// const btnMenu = document.querySelector(".btn-menu");
// const menu = document.querySelector(".menu");

// function handleButtonClick(event){
//     if(event.type === "touchstart") event.preventDefault(); // Interrompe o comportamento padrao no mobile.
//     event.stopPropagation();
//     nav.classList.toggle("active");
//     handleClickOutside (menu, () => {
//         nav.classList.remove("active");
//     }) 
// }

// function handleClickOutside(targetElement, callback){
//     const html = document.documentElement;
//     function handdleHTMLClick(event){
//         if(!targetElement.contains(event.target)){
//             targetElement.removeAttribute("data-target");
//             html.removeEventListener("click", handdleHTMLClick);
//             html.removeEventListener("touchstart", handdleHTMLClick);
//             callback()
//         }
//     }

//     if (!targetElement.hasAttribute("data-target")){
//         html.addEventListener("click", handdleHTMLClick);
//         html.addEventListener("touchstart", handdleHTMLClick);
//         targetElement.setAttribute("data-target", "");
//     }
// }

// function setAria() {
//     const isActive = nac.classList.contains("active");
//     btnMenu.setAttribute("aria-expander", isActive);
//     if (isActive){
//         btnMenu.setAttribute("aria-label", "Fechar Menu");
//     } else {
//         btnMenu.setAttribute("aria-label", "Abrir Menu");
//     }
// }

// btnMenu.addEventListener("click", handleButtonClick);
// btnMenu.addEventListener("touchstart", handleButtonClick);