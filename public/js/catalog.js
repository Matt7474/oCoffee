//! Fonction qui permet l'affichage du menu filtre et passe les cartes de 3 à 4 colonnes.

const filterBtnElem = document.querySelector(".filter-btn");
const filterLeftElem = document.querySelector(".filter-left-container");
const catalogCardsContainer = document.querySelector('.catalog-cards-container');

function updateGridLayout() {

  if (filterLeftElem.classList.contains("hidden")) {
    catalogCardsContainer.style.gridTemplateColumns = 'repeat(4, 1fr)';
    catalogCardsContainer.style.width = '100%';
  } else {
    catalogCardsContainer.style.gridTemplateColumns = 'repeat(3, 1fr)';
  }
}

filterBtnElem.addEventListener("click", function (event) {
  event.preventDefault();
  console.log('click ok !');
  
  filterLeftElem.classList.toggle("hidden");
  
  updateGridLayout();
});

updateGridLayout();


const filterOriginBtnElem = document.querySelector(".filter-origin-btn");
const filterCaracteristicBtnElem = document.querySelector(".filter-caracteristic-btn");
const filterDisponibilityBtnElem = document.querySelector(".filter-disponibility-btn");

const filterCheckboxOriginElem = document.querySelector(".filter-checkbox-origin");
const filterCheckboxCaracteristicElem = document.querySelector(".filter-checkbox-caracteristic");
const filterCheckboxDisponibilityElem = document.querySelector(".filter-checkbox-disponibility");

filterOriginBtnElem.addEventListener("click", function (event) {
  event.preventDefault();
  filterCheckboxOriginElem.classList.toggle("hidden");
});
filterCaracteristicBtnElem.addEventListener("click", function (event) {
  event.preventDefault();
  filterCheckboxCaracteristicElem.classList.toggle("hidden");
});
filterDisponibilityBtnElem.addEventListener("click", function (event) {
  event.preventDefault();
  filterCheckboxDisponibilityElem.classList.toggle("hidden");
});


//! Fonction pour le filtrage des cafés

document.addEventListener("DOMContentLoaded", () => {
  // Récupérer toutes les cases à cocher pour chaque filtre
  const checkboxesOrigin = document.querySelectorAll('.filter-checkbox-origin input');
  const checkboxesCarac = document.querySelectorAll('.filter-checkbox-caracteristic input');
  const checkboxesDispo = document.querySelectorAll('.filter-checkbox-disponibility input');

  // Récupérer toutes les cartes de café
  const coffeeCards = document.querySelectorAll('.catalog-card');

  // Fonction pour appliquer les filtres
  const applyFilters = () => {
      const selectedOrigins = getSelectedValues(checkboxesOrigin);
      const selectedCaracs = getSelectedValues(checkboxesCarac);
      const selectedDispos = getSelectedValues(checkboxesDispo);

      coffeeCards.forEach(card => {
          const origin = card.querySelector('.card-origine').textContent.trim().replace("Origine : ", "");
          const carac = card.querySelector('.card-carac').textContent.trim().replace("Caractéristique : ", "");
          const dispo = card.querySelector('.card-disponibility').textContent.trim().replace("Disponible : ", "");

          // Vérifier si la carte correspond à tous les filtres sélectionnés
          const matchesOrigin = selectedOrigins.length === 0 || selectedOrigins.includes(origin);
          const matchesCarac = selectedCaracs.length === 0 || selectedCaracs.includes(carac);
          const matchesDispo = selectedDispos.length === 0 || selectedDispos.includes(dispo);

          if (matchesOrigin && matchesCarac && matchesDispo) {
              card.style.display = "block";  // Afficher la carte
          } else {
              card.style.display = "none";  // Cacher la carte
          }
      });
  };

  // Fonction pour obtenir les valeurs des checkboxes sélectionnées
  const getSelectedValues = (checkboxes) => {
      const values = [];
      checkboxes.forEach(checkbox => {
          if (checkbox.checked) {
              values.push(checkbox.id);  // On prend l'ID comme valeur
          }
      });
      return values;
  };

  // Ajouter un événement de changement pour chaque checkbox
  checkboxesOrigin.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
  });

  checkboxesCarac.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
  });

  checkboxesDispo.forEach(checkbox => {
      checkbox.addEventListener('change', applyFilters);
  });

  // Appliquer les filtres au chargement initial
  applyFilters();
});


//! Fonction pour le tri des cafés

document.addEventListener("DOMContentLoaded", () => {
  const sortMenu = document.getElementById("sortMenu");
  const coffeeCards = Array.from(document.querySelectorAll('.catalog-card'));  // Transformer la NodeList en Array

  // Fonction pour trier les cafés en fonction de l'option sélectionnée
  const sortCoffees = () => {
    const selectedOption = sortMenu.value;

    // Trier les cartes de café selon le critère sélectionné
    coffeeCards.sort((a, b) => {
      const nameA = a.querySelector('.card-title').textContent.trim();
      const nameB = b.querySelector('.card-title').textContent.trim();
      const priceA = parseFloat(a.querySelector('.card-price').textContent.trim().replace(/[^\d.-]/g, '')); // Convertir en nombre
      const priceB = parseFloat(b.querySelector('.card-price').textContent.trim().replace(/[^\d.-]/g, ''));
      const dateA = a.querySelector('.card-date').textContent.trim(); // Supposons qu'il y a une date, si non, ajoute-la dans ton HTML
      const dateB = b.querySelector('.card-date').textContent.trim();

      switch (selectedOption) {
        case "alphabetic-asc":
          return nameA.localeCompare(nameB);  // Tri alphabétique A-Z
        case "alphabetic-desc":
          return nameB.localeCompare(nameA);  // Tri alphabétique Z-A
        case "price-asc":
          return priceA - priceB;  // Tri par prix croissant
        case "price-desc":
          return priceB - priceA;  // Tri par prix décroissant
        case "date-asc":
          return new Date(dateA) - new Date(dateB);  // Tri par date la plus ancienne
        case "date-desc":
          return new Date(dateB) - new Date(dateA);  // Tri par date la plus récente
        default:
          return 0;  // Aucun tri
      }
    });

    // Réorganiser les cartes dans le DOM en fonction du tri
    const catalogCardsContainer = document.querySelector('.catalog-cards-container');
    coffeeCards.forEach(card => catalogCardsContainer.appendChild(card));  // Reajouter les cartes triées
  };

  // Ajouter l'événement de changement pour le menu de tri
  sortMenu.addEventListener("change", sortCoffees);
});
