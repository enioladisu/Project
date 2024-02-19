// let background = document.getElementsByTagName("body")[0]
// let nav = document.querySelector("nav")
// let a = document.querySelectorAll("a")[0]
// let a1 = document.querySelectorAll("a")[1]
// let a2 = document.querySelectorAll("a")[2]
// let a3 = document.querySelectorAll("a")[3]
// let container1 = document.querySelectorAll("div")[1]
// let btn = document.querySelectorAll("div")[0]

// btn.addEventListener("click", function(){
//     background.classList.toggle("dark")
//     nav.classList.toggle("dark")
//     a.classList.toggle("dark")
//     a1.classList.toggle("dark")
//     a2.classList.toggle("dark")
//     a3.classList.toggle("dark")
//     container1.classList.toggle("dark")
// })

let ul = document.querySelector("ul")
let open = document.querySelector(".open")
let close = document.querySelector(".close")


open.addEventListener("click", function(){
    ul.style.marginTop = "0px"
    open.style.display = "none"
    close.style.display = "block"
})
close.addEventListener("click", function(){
    ul.style.marginTop = "-300px"
    open.style.display = "block"
    close.style.display = "none"
})