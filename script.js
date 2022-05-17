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


navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    if (menuMobile.style.width == "150px") {
        menuMobile.style.width = "0";
        // vitrine.style.visibility= 'visible';
    } else {
        menuMobile.style.width = "150px";
        // vitrine.style.visibility="hidden";
    }
});

function menuActive(n) {
    switch (menuItem[n]) {
        case menuItem[1]:
            contact.style.display = "none";
            projects.style.display = "none";
            footer.style.display = 'none';
            if (about.style.display == "block") {
                about.style.display = "none";
            } else {
                about.style.display = "block";
            }
            break;
        case menuItem[2]:
            contact.style.display = "none";
            about.style.display = "none";
            footer.style.display = 'none';
            if (projects.style.display == "block") {
                projects.style.display = "none";
            } else {
                projects.style.display = "block";
            }
            break;
        case menuItem[3]:
            about.style.display = "none";
            projects.style.display = "none";
            footer.style.display = 'none';
            if (contact.style.display == "block") {
                contact.style.display = "none";
            } else {
                contact.style.display = "block";
            }
            break;
        default:
            contact.style.display = "none";
            about.style.display = "none";
            projects.style.display = "none";
            break;
    }

    // for (let i in menuItem) {
    //     if (menuItem[i] !== menuItem[n]) {
    //         menuItem[i].classList.remove("menu-active");
    //     } else {
    //         menuItem[n].classList.add("menu-active");
    //     }
    // }
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