//! Tests non concluant sur le darkmode

// // ! Test de mode sombre

// const darkModeBtnElem = document.querySelector(".darkmode-btn");
// const HeaderElem = document.querySelector("header");
// const bodyElem = document.querySelector("body");
// const btnCatalogueElem = document.querySelector("#btn-catalogue");


// function applyDarkMode(isDarkMode) {
  
//     const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
//     const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

//     if (isDarkMode) {
        
//         bodyElem.classList.add("dark-mode");
//         HeaderElem.style.backgroundImage = "none";
//         bodyElem.style.backgroundImage = "none";
//         if (btnCatalogueElem) btnCatalogueElem.style.backgroundImage = "none";

        
//         document.documentElement.style.setProperty('--main-color', secondaryColor);
//         document.documentElement.style.setProperty('--secondary-color', mainColor);
//     } else {
       
//         bodyElem.classList.remove("dark-mode");
//         HeaderElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";
//         bodyElem.style.backgroundImage = "url('../images/images-background/planche.jpg')";
//         if (btnCatalogueElem) btnCatalogueElem.style.backgroundImage = "url('../images/cafe-client/256505890.png')";

        
//         document.documentElement.style.setProperty('--main-color', secondaryColor);
//         document.documentElement.style.setProperty('--secondary-color', mainColor);
//     }
// }
// darkModeBtnElem.addEventListener("click", function () {
//     const isDarkMode = !bodyElem.classList.contains("dark-mode");
//     applyDarkMode(isDarkMode);
 
//     localStorage.setItem("darkMode", isDarkMode);
// });

// const savedDarkMode = localStorage.getItem("darkMode") === "true";
// applyDarkMode(savedDarkMode);


//* Test

// const darkModeBtnElem = document.querySelector(".darkmode-btn");
// const HeaderElem = document.querySelector("header");
// const bodyElem = document.querySelector("body");
// const btnCatalogueElem = document.querySelector("#btn-catalogue");

// const mainColor = getComputedStyle(document.documentElement).getPropertyValue('--main-color').trim();
// const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-color').trim();

// document.addEventListener("DOMContentLoaded", function () {
//     darkModeBtnElem.addEventListener("click", function (event) {
//         event.preventDefault();

//         HeaderElem.classList.add("dark-mode");
//         bodyElem.classList.add("dark-mode");
//         btnCatalogueElem.classList.add("dark-mode");

//         document.documentElement.style.setProperty('--main-color', secondaryColor);
//         document.documentElement.style.setProperty('--secondary-color', mainColor);
    
//     });
// });
// const savedDarkMode = localStorage.getItem("darkMode") === "true";
// applyDarkMode(savedDarkMode);




