//* Focntion qui permet d'afficher les filtres 
const filterOptionsElem = document.querySelector(".filter-options")
const filterButtonOptionEleme = document.querySelector(".filter-button-option")

filterOptionsElem.addEventListener("click", function (event) {
  event.preventDefault();
  filterButtonOptionEleme.classList.toggle("hidden4");
});


function toggleFilters() {
    const filterOptions = document.getElementById('filterOptions');
    filterOptions.classList.toggle('active'); // Active/désactive la classe "active"
}


//* Focntion qui permet d'afficher la liste de filtre 
const toggleButtonCara = document.getElementById('toggleButtonCara');
const dropdownCara = document.getElementById('dropdownCara');

toggleButtonCara.addEventListener('click', () => {
 
    dropdownCara.classList.toggle('visible');
    dropdownCara.classList.toggle('hidden5');
});

const toggleButtonDispo = document.getElementById('toggleButtonDispo');
const dropdownDispo = document.getElementById('dropdownDispo');

toggleButtonDispo.addEventListener('click', () => {
   
    dropdownDispo.classList.toggle('visible');
    dropdownDispo.classList.toggle('hidden5');
});

