const navMenu = document.querySelector('.nav-menu');
const menuMobile = document.querySelector('.menu-mobile')
const menuItem = document.querySelectorAll('.menu-item');
const contact = document.querySelector("#contact");
const about = document.querySelector("#about");
const projects = document.querySelector("#projects");


navMenu.addEventListener("click", () =>{
    navMenu.classList.toggle("active");
    if(menuMobile.style.width == "230px"){
        menuMobile.style.width = "0"
    }else{
        menuMobile.style.width = "230px"
    }
})

function menuActive(n){

    if(menuItem[n] == menuItem[1]){
        contact.style.display = "none";
        projects.style.display = "none";
        if(about.style.display == "block"){
            about.style.display = "none";
        }else{
            about.style.display = "block";
        }  
    }else if(menuItem[n] == menuItem[2]){ 
        contact.style.display = "none";
        about.style.display = "none";
        if(projects.style.display == "block"){
            projects.style.display = "none";
        }else{
            projects.style.display = "block";
        }
    }else if(menuItem[n] == menuItem[3]){
        about.style.display = "none";
        projects.style.display = "none";
        if(contact.style.display == "block"){
            contact.style.display = "none";
        }else{
            contact.style.display = "block";
        }
    }else{
        contact.style.display = "none";
        about.style.display = "none";
        projects.style.display = "none";
    }


    for(let i in menuItem){
        if(menuItem[i] !== menuItem[n]){
            menuItem[i].classList.remove("menu-active");
        }else{
            menuItem[n].classList.add("menu-active");
        }
    }
}

function close(){
    contact.style.display = "none";
    about.style.display = "none";
    projects.style.display = "none";
}

