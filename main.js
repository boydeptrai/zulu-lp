const menuToggle = document.querySelector(".header__menu-bars");
const menu = document.querySelector(".header__menu");

menuToggle.addEventListener("click", function(){
    menu.classList.add("is-active");
});

document.addEventListener("click", function(e){
    if (!menu.contains(e.target) && !e.target.matches(".header__menu-bars")) {
        menu.classList.remove("is-active")
    }
})