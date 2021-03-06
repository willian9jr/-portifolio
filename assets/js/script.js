const navMenu = document.querySelector(".nav-menu");
const menuMobile = document.querySelector(".menu-mobile");
const menuItem = document.querySelectorAll(".menu-item");
const contact = document.querySelector("#contact");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");
const footer = document.querySelector(".footer");
const vitrine = document.querySelector(".grid-vitrine");
const menuX = document.querySelector("#menu-x");
const larguraTela = window.screen.width;

console.log(menuItem);

navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (menuMobile.style.width == "150px") {
        menuMobile.style.width = "0";
    } else {
        menuMobile.style.width = "150px";
    }
});

function menuActive(n) {
    
    about.style.display = "none";
    contact.style.display = "none";
    projects.style.display = "none";
    setTimeout(() => {footer.style.display = 'none'}, 400);

    switch (menuItem[n]) {
        case menuItem[1]:
            if (about.style.display == "block") {
                about.style.display = "none";
            } else {
                about.style.display = "block";
            }
            break;
        case menuItem[2]:
            if (projects.style.display == "block") {
                projects.style.display = "none";
            } else {
                projects.style.display = "block";
            }
            break;
        case menuItem[3]:
            if (contact.style.display == "block") {
                contact.style.display = "none";
            } else {
                contact.style.display = "block";
            }
            break;
        default:
            footer.style.display = 'flex';
            break;
    }
}

function closeModal() {
    footer.style.display = 'flex';
    if(larguraTela < 430){
        footer.style.display = 'none'
    }
    contact.style.display = "none";
    if (contact.classList == "menu-active") {
        contact.classList.remove("menu-active");
    }

    about.style.display = "none";
    if (about.classList == "menu-active") {
        about.classList.remove("menu-active");
    }

    projects.style.display = "none";
    if (projects.classList == "menu-active") {
        projects.classList.remove("menu-active");
    }
}