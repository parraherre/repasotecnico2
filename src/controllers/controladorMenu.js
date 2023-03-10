let menu = document.getElementById("menu")

window.addEventListener("scroll",function(){

    if(document.documentElement.scrollTop>100){

        menu.classList.add("menuSegundario")
        menu.classList.remove("menuPrincipal")

    }else{

        menu.classList.remove("menuSegundario")
        menu.classList.add("menuPrincipal")

    }
})