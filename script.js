const menu = document.getElementById("Menu");
const showMenuBtn = document.getElementById("ShowMenuBtn");

const showMenu = () => {
    console.log("Kliknięto button");
    // menu.style.display = "block"
}

showMenuBtn.addEventListener("click",showMenu);