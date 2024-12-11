// //! Fonction qui sert a faire évoluer la quantité avec les + / - !//

// document.addEventListener('DOMContentLoaded', function() {
// const qtyInputElem = document.getElementById('qty-input');
// const btnPlusElem = document.querySelector('.btn-plus');
// const btnMinusElem = document.querySelector('.btn-minus');


// btnPlusElem.addEventListener('click', function() {
//     let currentValue = parseInt(qtyInputElem.value);
//     let minValue = parseInt(qtyInputElem.getAttribute('min'));

//     if (!isNaN(currentValue)) {
//     qtyInputElem.value = currentValue + 1;
//     }
// });

// btnMinusElem.addEventListener('click', function() {
//     let currentValue = parseInt(qtyInputElem.value); 
//     let minValue = parseInt(qtyInputElem.getAttribute('min'));

//     if (!isNaN(currentValue) && currentValue > minValue) {
//     qtyInputElem.value = currentValue - 1;
//     }
// });
// });
  

//! Fonction qui sert a faire évoluer la quantité dans le panier !//

document.addEventListener('DOMContentLoaded', function() {
    const qtyInputElem = document.getElementById('qty-input');
    const btnPlusElem = document.querySelector('.btn-plus');
    const btnMinusElem = document.querySelector('.btn-minus');
    const addToCartBtn = document.querySelector('.card-add_to_cart-btn');
    const articlesCartElem = document.querySelector('.articles-cart');
    
    // Fonction pour récupérer le nombre d'articles du panier depuis le localStorage
    function getCartQuantity() {
        let quantity = localStorage.getItem('cartQuantity');
        return quantity ? parseInt(quantity) : 0; // Si aucune valeur, retourne 0
    }

    // Fonction pour mettre à jour l'affichage du panier dans l'en-tête
    function updateCartDisplay() {
        const quantityInCart = getCartQuantity();
        articlesCartElem.textContent = quantityInCart;
    }

    // Met à jour le panier dans le localStorage
    function updateCart(quantityToAdd) {
        let currentQuantity = getCartQuantity();
        currentQuantity += quantityToAdd;
        localStorage.setItem('cartQuantity', currentQuantity); // Enregistre la nouvelle quantité
        updateCartDisplay(); // Met à jour l'affichage dans l'en-tête
    }

    // Initialisation de l'affichage du panier
    updateCartDisplay();

    // Fonction pour gérer l'ajout d'articles au panier
    addToCartBtn.addEventListener('click', function() {
        const qty = parseInt(qtyInputElem.value);
        if (qty >= 1) {
            updateCart(qty);
        }
    });

    // Gérer les boutons + et - pour ajuster la quantité
    btnPlusElem.addEventListener('click', function() {
        let currentValue = parseInt(qtyInputElem.value);
        if (!isNaN(currentValue)) {
            qtyInputElem.value = currentValue + 1;
        }
    });

    btnMinusElem.addEventListener('click', function() {
        let currentValue = parseInt(qtyInputElem.value);
        if (!isNaN(currentValue) && currentValue > 1) {
            qtyInputElem.value = currentValue - 1;
        }
    });
});
