const navMenu = document.querySelector('.nav-menu');
const menuMobile = document.querySelector('.menu-mobile')


navMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    if(menuMobile.style.width == "150px"){
        menuMobile.style.width = "0"
    }else{
        menuMobile.style.width = "150px"
    }
})

