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

modalCloseButton.addEventListener("click", function (evt) {
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
const catalogPage = modalBasket.querySelector(".catalog-page");

for (let buyLink of buyLinks) {
  buyLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalBasket.classList.add("modal-show");
  });
}

modalCloseBasket.addEventListener("click", function (evt) {
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

// фунция для табов слайдера
function toggleTabSlides() {
  const serviceButtons = document.querySelectorAll(".service-button");
  const slides = document.querySelectorAll(".tabs-slide");

  // перебор кнопок
  for (let serviceButton of serviceButtons) {
    // клик по кнопке
    serviceButton.addEventListener("click", function (evt) {
      console.log("Кнопка нажата");
      const btnActive = document.querySelector(".button-active");

      btnActive.classList.remove("button-active");
      serviceButton.classList.add("button-active");
      const activeSlide = document.querySelector(".active-slide");

      // перебор слайдов
      slides.forEach((slide) => {
        activeSlide.classList.remove("active-slide");
        if (slide.id === `slide-for-${serviceButton.id}`) {
          slide.classList.add("active-slide");
        }
      });
    });
  }
}
toggleTabSlides();

// функция переключения слайдеров в промо-слайдере
function togglePromo() {
  const controls = document.querySelectorAll(".slide-btn");
  const slidersContent = document.querySelectorAll(".slider-content");

  // перебор кнопок
  controls.forEach((btn) => {
    // клик по кнопке
    btn.addEventListener("click", (evt) => {
      evt.preventDefault();
      const activeSlide = document.querySelector(".slider-current");
      const nextSlide = activeSlide.nextElementSibling;
      const prevSlide = activeSlide.previousElementSibling;

      if (btn.classList.contains("slide-btn--next") && nextSlide !== null) {
        activeSlide.classList.remove("slider-current");
        nextSlide.classList.add("slider-current");
      }
      if (btn.classList.contains("slide-btn--prev") && prevSlide !== null) {
        activeSlide.classList.remove("slider-current");
        prevSlide.classList.add("slider-current");
      }
    });
  });
}
togglePromo();
