// Fonction qui affiche ou masque les articles du catalogue et change le nom du bouton
const hiddenArticlesElements = document.querySelectorAll(".article-news.hidden");
const discoverBtnElem = document.querySelector(".catalog-btn");

discoverBtnElem.addEventListener("click", function (event) {
    hiddenArticlesElements.forEach((article) => {
        article.classList.toggle("hidden");
    });

    if (discoverBtnElem.textContent.trim() === "Voir plus de cafés") {
        discoverBtnElem.textContent = "Voir moins de cafés";
    } else {
        discoverBtnElem.textContent = "Voir plus de cafés";
    }
});


