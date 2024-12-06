
// Fonction qui affiche ou masque le menu de droite au clic sur le menu burger
const menuElemBtn = document.querySelector(".menu-container");
const burgerMenuElem = document.querySelector(".header-burger-menu-button");

burgerMenuElem.addEventListener("click", function (event) {
    event.preventDefault();
    menuElemBtn.classList.toggle("hidden-menu");
});


// Fonction qui ferme le menu de gauche au click sur la croix
const crossElem = document.querySelector(".cross");

crossElem.addEventListener("click", function (event) {
    event.preventDefault();
    menuElemBtn.classList.add("hidden-menu");
});