let ul = document.querySelector("ul")
let openDropDown = document.querySelector(".open")
let closeDropDown = document.querySelector(".close")
let bg = document.querySelector("body")
let off = document.querySelector(".off")
let on = document.querySelector(".on")
let off1 = document.querySelector(".off1")
let on1 = document.querySelector(".on1")
let nav = document.querySelector("nav")

function close(){
    ul.style.marginTop = "-400px"
    openDropDown.style.display = "block"
    closeDropDown.style.display = "none"
}
function open(){
    ul.style.marginTop = "0px"
    openDropDown.style.display = "none"
    closeDropDown.style.display = "block"
}
function darkMode1(){
    bg.style.backgroundColor = "black"
    bg.style.color = "white"
    ul.style.backgroundColor = "black"
    ul.style.color = "white"
    off1.style.display = "none"
    on1.style.display = "block"
}
function lightMode1(){
    bg.style.backgroundColor = "white"
    bg.style.color = "black"
    ul.style.backgroundColor = "white"
    ul.style.color = "black"
    off1.style.display = "block"
    on1.style.display = "none"
}
function darkMode(){
    bg.style.backgroundColor = "black"
    bg.style.color = "white"
    off.style.display = "none"
    on.style.display = "block"
}
function lightMode(){
    bg.style.backgroundColor = "white"
    bg.style.color = "black"
    off.style.display = "block"
    on.style.display = "none"
}

openDropDown.addEventListener("click", open)
closeDropDown.addEventListener("click", close)
off.addEventListener("click", darkMode)
on.addEventListener("click", lightMode)
off1.addEventListener("click", darkMode1)
on1.addEventListener("click", lightMode1)
