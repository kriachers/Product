// menu-burger

let headerRight = document.querySelector(".header__right");
let Burger = document.querySelector(".nav__burger");

Burger.addEventListener("click", () => {
    Burger.classList.toggle("active");
    headerRight.classList.toggle("active");
});




let switchMode = document.getElementById("change-theme");

switchMode.onclick = function () {
    let theme = document.getElementById("theme");

    if(theme.getAttribute("href") == "../Product/css/theme-light.css") {
        theme.href = "../Product/css/theme-dark.css";
    } else {
        theme.href = "../Product/css/theme-light.css";
    }
}

