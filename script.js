let lineTop = document.getElementById("line-top");
let lineBottom = document.getElementById("line-bottom");
let burger = document.getElementById("burger-svg")
let burgerMenu = document.querySelector(".burger-menu")


let isOpen = true;

function animate() {
    if(isOpen) {
        lineTop.setAttribute("transform", "translate(16 -10) rotate(45)");
        lineBottom.setAttribute("transform", "translate(2 18) rotate(-45)");
        lineTop.style.transition = "transform 0.5s ease";
        lineBottom.style.transition = "transform 0.5s ease";
        lineTop.style.stroke = "#F4F4EA";
        lineBottom.style.stroke = "#F4F4EA";
        burgerMenu.style.display = "flex"

    }else {
        lineTop.setAttribute("transform", "");
        lineBottom.setAttribute("transform", "");
        lineTop.style.transition = "transform 0.5s ease";
        lineBottom.style.transition = "transform 0.5s ease";
        lineTop.style.stroke = "#4E2A1E";
        lineBottom.style.stroke = "#4E2A1E";
        burgerMenu.style.display = "none"
    }
    isOpen = !isOpen
    


}
document.querySelector(".burger-svg").addEventListener("click", animate);