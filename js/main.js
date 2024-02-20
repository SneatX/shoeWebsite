import {} from "./module/facturacion.js"

const menu = document.querySelector(".menu")
const menuBtn = document.querySelector(".menu-btn")

menuBtn.addEventListener("click" , (event)=>{
    menu.classList.toggle("nav-toggle")
} )