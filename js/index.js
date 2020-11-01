const modalButton = document.querySelector(".modal-button");
const modalMail = document.querySelector(".modal-mail");
const modalClose = modalMail.querySelector(".modal-close");
const formMail = modalMail.querySelector(".write-form");
const loginName = modalMail.querySelector(".login-name");
const email = modalMail.querySelector(".email-name");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

modalButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMail.classList.add("modal-show");

  if (storage) {
    loginName.value = storage;
    email.focus();
  } else {
    loginName.focus();
  }
});

modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalMail.classList.remove("modal-show");
  modalMail.classList.remove("modal-error");
});

formMail.addEventListener("submit", function (evt) {
  if (!loginName.value || !email.value) {
    evt.preventDefault();
    modalMail.classList.remove("modal-error");
    modalMail.offsetWidth = modalMail.offsetWidth;
    modalMail.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalMail.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMail.classList.remove("modal-show");
            modalMail.classList.remove("modal-error");
        }
    }
});



const mapButton = document.querySelector(".map-button");
const modalMap = document.querySelector(".modal-map");
const modalCloseButton = modalMap.querySelector(".modal-close-button");

mapButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalMap.classList.add("modal-show");
});

modalCloseButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    modalMap.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (modalMap.classList.contains("modal-show")) {
            evt.preventDefault();
            modalMap.classList.remove("modal-show");
        }
    }
});


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



/*const serviceButtons = document.querySelectorAll(".service-button");

for(let serviceButton of serviceButtons) {
serviceButton.addEventListener("click", function(evt) {
    console.log("Кнопка нажата");
    serviceButton.classList.toggle("button-active");
});
} */

const control = document.querySelector(".control");
const sliderContent = document.querySelector(".slider-content");

control.addEventListener("click", function (evt) {
  evt.preventDefault();
  sliderContent.classList.toggle("slider-current");
  sliderContent.classList.toggle("slider-content");
});
