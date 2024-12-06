
// Fonction qui affiche ou masque le menu de droite au click sur le menu burger
const menuElemBtn = document.querySelector(".menu-container");
const burgerMenuElem = document.querySelector(".header-logo-oCoffee");

burgerMenuElem.addEventListener("click", function (event) {
    event.preventDefault();
    menuElemBtn.classList.toggle("hidden-menu");
});


// Fonction qui ferme le menu de gauche au click sur la croix
const leftMenuForCrossElem = document.querySelector(".left-menu-container");
const crossElem = document.querySelector(".cross");

crossElem.addEventListener("click", function (event) {
    event.preventDefault();
    leftMenuForCrossElem.classList.add("hidden2");
});


// Fonction qui modifie la couleur du panier au passage de la souris
const cartImgElem = document.querySelector("#cart");

cartImgElem.addEventListener("mouseenter", function () {
    cartImgElem.src = "/images/logo/panier-header-third-color.svg";
});
cartImgElem.addEventListener("mouseleave", function () {
    cartImgElem.src = "/images/logo/panier-header-main-color.svg";
});


// Fonction qui modifie la couleur du du login au passage de la souris
const logElem = document.querySelector("#log");

logElem.addEventListener("mouseenter", function () {
    logElem.src = "/images/logo/user5.1.svg";
});
logElem.addEventListener("mouseleave", function () {
    logElem.src = "/images/logo/user5.svg";
});


// Fonction qui modifie la couleur du burger menu au passage de la souris
const menuElem = document.querySelector("#menu");

menuElem.addEventListener("mouseenter", function () {
    menuElem.src = "/images/logo/burger-menu-third-color.svg";
});
menuElem.addEventListener("mouseleave", function () {
    menuElem.src = "/images/logo/burger-menu-main-color.svg";
});


// Fonction qui modifie la couleur logo facebook au passage de la souris
const logoFacebookElem = document.querySelector(".logo-facebook");

logoFacebookElem.addEventListener("mouseenter", function () {
    logoFacebookElem.src = "/images/logo/facebook-third-color.svg";
});
logoFacebookElem.addEventListener("mouseleave", function () {
    logoFacebookElem.src = "/images/logo/facebook-main-color.svg";
});


// Fonction qui modifie la couleur logo pinterest au passage de la souris
const logoPinterestElem = document.querySelector(".logo-pinterest");

logoPinterestElem.addEventListener("mouseenter", function () {
    logoPinterestElem.src = "/images/logo/pinterest-third-color.svg";
});
logoPinterestElem.addEventListener("mouseleave", function () {
    logoPinterestElem.src = "/images/logo/pinterest-main-color.svg";
});


// Fonction qui modifie la couleur logo youtube au passage de la souris
const logoYoutubeElem = document.querySelector(".logo-youtube");

logoYoutubeElem.addEventListener("mouseenter", function () {
    logoYoutubeElem.src = "/images/logo/youtube-third-color.svg";
});
logoYoutubeElem.addEventListener("mouseleave", function () {
    logoYoutubeElem.src = "/images/logo/youtube-main-color.svg";
});


// Fonction qui modifie la couleur logo instagram au passage de la souris
const logoInstagramElem = document.querySelector(".logo-instagram");

logoInstagramElem.addEventListener("mouseenter", function () {
    logoInstagramElem.src = "/images/logo/instagram-third-color.svg";
});
logoInstagramElem.addEventListener("mouseleave", function () {
    logoInstagramElem.src = "/images/logo/instagram-main-color.svg";
});


// Fonction qui modifie la couleur logo linkedin au passage de la souris
const logoLinkedinElem = document.querySelector(".logo-linkedin");

logoLinkedinElem.addEventListener("mouseenter", function () {
    logoLinkedinElem.src = "/images/logo/linkedin-third-color.svg";
});
logoLinkedinElem.addEventListener("mouseleave", function () {
    logoLinkedinElem.src = "/images/logo/linkedin-main-color.svg";
});


//! En test
// Fonction qui permet l'affichage de la fenetre au survol du login
const loginElem = document.querySelector(".for-log-window");
const loginWindowElem = document.querySelector(".login-hover-container");
const triangleElem = document.querySelector(".triangle");


//! En test Fonction de delai d'apparition et masquage au survol de login
loginElem.addEventListener("mouseenter", showLoginHover);
loginElem.addEventListener("mouseleave", hideLoginHover);

loginWindowElem.addEventListener("mouseenter", showLoginHover);
loginWindowElem.addEventListener("mouseleave", hideLoginHover);

let hoverTimeout; // Pour gérer le délai d'activation
let hideTimeout; // Pour gérer le délai de masquage

function showLoginHover() {
    // Annule le masquage si l'utilisateur revient rapidement
    clearTimeout(hideTimeout);

    // Délai avant d'afficher
    hoverTimeout = setTimeout(() => {
        loginWindowElem.classList.remove("hidden3");
        triangleElem.classList.remove("hidden3");
    }, 500); // Délai d'activation
}

function hideLoginHover() {
    // Annule l'affichage si l'utilisateur quitte rapidement
    clearTimeout(hoverTimeout);

    // Délai avant de masquer
    hideTimeout = setTimeout(() => {
        loginWindowElem.classList.add("hidden3");
        triangleElem.classList.add("hidden3");
    }, 500); // Temps d'affichage
}