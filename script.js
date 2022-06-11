const menu = document.getElementById("Menu");
const showMenuBtn = document.getElementById("ShowMenuBtn");
const hideMenuBtn = document.getElementById("CloseMenuBtn");

// const showMenu = () => {
//     console.log("Kliknięto button");
//     // menu.style.display = "block"
//     // menu.style.transform = "translateX(0)";
//     menu.classList.add("menuOn");
// }

// const hideMenu = () => {
//     menu.classList.remove("menuOn");
// }


const toggleMenu = () => menu.classList.toggle("menuOn")

showMenuBtn.addEventListener("click",toggleMenu);
hideMenuBtn.addEventListener("click",toggleMenu);