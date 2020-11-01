const buyLinks = document.querySelectorAll(".buy-link");
const modalBasket = document.querySelector(".modal-basket");
const modalCloseBasket = modalBasket.querySelector(".modal-close");
const catalogPage = modalBasket.querySelector('.catalog-page');

for(let buyLink of buyLinks) {
    buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-show");
    });
}

modalCloseBasket.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalBasket.classList.remove("modal-show");
});

catalogPage.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalBasket.classList.contains("modal-show")) {
            evt.preventDefault();
            modalBasket.classList.remove("modal-show");
        }
    }
});