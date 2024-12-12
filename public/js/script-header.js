
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


//! Fonction qui récupere le panier et ses articles

document.addEventListener('DOMContentLoaded', function() {
    const articlesCartElem = document.querySelector('.articles-cart');

    // Fonction pour récupérer la quantité du panier dans le localStorage
    function getCartQuantity() {
        let quantity = localStorage.getItem('cartQuantity');
        return quantity ? parseInt(quantity) : 0; // Si aucune valeur, retourne 0
    }

    // Fonction pour mettre à jour l'affichage du panier dans l'en-tête
    function updateCartDisplay() {
        const quantityInCart = getCartQuantity();
        articlesCartElem.textContent = quantityInCart;
    }

    // Met à jour l'affichage du panier au chargement de la page
    updateCartDisplay();
});

//! Fonction DarkMode
// Bouton darkmode
const darkModeBtnElem = document.querySelector(".darkmode-btn");
// Elements du header
const HeaderElem = document.querySelector("header");
// Elements du body
const bodyElem = document.querySelector("body");
const btnCatalogueElem = document.querySelector(".btn-catalogue");
// Elements du footer
const footerElem = document.querySelector("footer");

// Fonction
darkModeBtnElem.addEventListener("click", function (event) {

    const isDarkMode = bodyElem.classList.toggle("dark-mode");

    // Variable pour permettre le switch de nom des couleurs
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

    
    if (isDarkMode) {
        HeaderElem.style.backgroundImage = "none";

        bodyElem.style.backgroundImage = "none";
        btnCatalogueElem.style.backgroundImage = "none";
        
        
        document.documentElement.style.setProperty('--main-color', secondaryColor); 
        document.documentElement.style.setProperty('--secondary-color', mainColor);
    } else {
        
        HeaderElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";
        bodyElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";

        document.documentElement.style.setProperty('--main-color', secondaryColor);
        document.documentElement.style.setProperty('--secondary-color', mainColor);
    }
})