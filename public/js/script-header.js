
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



// ! Test de mode sombre

const darkModeBtnElem = document.querySelector(".darkmode-btn");
const HeaderElem = document.querySelector("header");
const bodyElem = document.querySelector("body");
const btnCatalogueElem = document.querySelector("#btn-catalogue");


function applyDarkMode(isDarkMode) {
  
    const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

    if (isDarkMode) {
        
        bodyElem.classList.add("dark-mode");
        HeaderElem.style.backgroundImage = "none";
        bodyElem.style.backgroundImage = "none";
        if (btnCatalogueElem) btnCatalogueElem.style.backgroundImage = "none";

        
        document.documentElement.style.setProperty('--main-color', secondaryColor);
        document.documentElement.style.setProperty('--secondary-color', mainColor);
    } else {
       
        bodyElem.classList.remove("dark-mode");
        HeaderElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";
        bodyElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";
        if (btnCatalogueElem) btnCatalogueElem.style.backgroundImage = "url('../images/cafe-client/256505890.png')";

        
        document.documentElement.style.setProperty('--main-color', secondaryColor);
        document.documentElement.style.setProperty('--secondary-color', mainColor);
    }
}

const savedDarkMode = localStorage.getItem("darkMode") === "true";
applyDarkMode(savedDarkMode);

darkModeBtnElem.addEventListener("click", function () {
    const isDarkMode = !bodyElem.classList.contains("dark-mode");
    applyDarkMode(isDarkMode);

    localStorage.setItem("darkMode", isDarkMode);
});









//! Fonction pour réinitialiser le panier à 0
const emptyCartElem = document.querySelector(".empty-cart");

emptyCartElem.addEventListener("click", function (event) {
    event.preventDefault();

    localStorage.setItem('cartQuantity', '0');

    const cartQuantityElem = document.querySelector('.articles-cart');
    if (cartQuantityElem) {
        cartQuantityElem.textContent = '0';
    }

    // Afficher une notification à l'utilisateur (optionnel)
    alert("Votre panier a été vidé");
});
