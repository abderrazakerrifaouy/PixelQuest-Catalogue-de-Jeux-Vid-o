let menu = document.querySelector("#menu");
let bergerMenu = document.querySelector("#bergerMenu")

let aficherMenu = false


bergerMenu.addEventListener("click" , ()=>{
    if(aficherMenu){
        menu.classList.remove("flex")
        menu.classList.add("hidden")
        aficherMenu = false
    }else{
        menu.classList.remove("hidden")
        menu.classList.add("flex")
        aficherMenu = true
    }
})