const hamburgerMenu = document.querySelector(".hamburger-menu")
const navigationContainer = document.querySelector(".nvaigation-container")
const headerNavigation = document.querySelector(".header-navigation")
const overlay = document.querySelector(".overlay")

const dropDownMenuButton = document.querySelectorAll(".nav-list-item")
const dropDownMenu = document.querySelectorAll(".list")
const arrows = document.querySelectorAll(".arrow")




for(let i = 0; i < 2; i++){
    dropDownMenuButton[i].addEventListener("click", ()=>{
        dropDownMenu[i].classList.toggle("show-menu")
        arrows[i].classList.toggle("rotate-arrow")
    })
}

let isMenuClosed = true
hamburgerMenu.addEventListener("click", ()=> {

    const hambugerMenuClass = hamburgerMenu.classList
    const headerNavigationClass = headerNavigation.classList
    const overlayClass = overlay.classList

    hambugerMenuClass.toggle("open-hamburger-menu")
    headerNavigationClass.toggle("open-header-navigation")
    overlayClass.toggle("show-overlay")
})


// window.addEventListener("resize", ()=>{
//     const screenWidth = window.innerWidth;
//     console.log(screenWidth)
// })