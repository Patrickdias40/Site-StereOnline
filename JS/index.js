let menu = false;

function abremenu(){
    const abreMenu = document.querySelector(".menuLateral");
    const btabre = document.querySelector(".bt-menu");
    const btfecha = document.querySelector("#bt-menu-fecha");
    if(menu == false) {
        abreMenu.style.display = "flex";
        btabre.style.display = "none";
        btfecha.style.display = "flex";
        menu = true;
    } else {
        abreMenu.style.display = "none";
        btabre.style.display = "flex";
        btfecha.style.display = "none";
        menu = false;
    }
}

let modo = false;
function modoescuro(){
    const geral = document.querySelector(".geral");
    const iconsol = document.querySelector("#sol");
    const iconlua = document.querySelector("#lua");
    if(modo == true) {
        /* Modo Escuro */
        geral.style.color = "#ffffff";
        document.body.style.backgroundColor = "#c0c0c0";
        geral.style.backgroundColor = "#2B2B2B";
        iconsol.style.display = "none";
        iconlua.style.display = "flex";
        modo = false;
    } else {
        /* Modo Claro */
        geral.style.color = "black";
        document.body.style.backgroundColor = "#ffffff";
        geral.style.backgroundColor = "#c0c0c0";
        iconsol.style.display = "flex";
        iconlua.style.display = "none";
        modo = true;
    }
}