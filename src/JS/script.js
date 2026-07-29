import "/src/sass/style.scss";
import JustValidate from "just-validate";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const burger = document.querySelector(".burger"),
  close = document.querySelector(".header__menu-close"),
  menu = document.querySelector(".header__menu"),
  product = document.querySelector(".product"),
  productIcon = document.querySelector(".header__menu-icon"),
  products = document.querySelector(".header__menu-products"),
  walnut = document.querySelector(".walnut__menu"),
  walnutIcon = document.querySelector(".walnut__icon"),
  walnutMenu = document.querySelector(".walnut"),
  hazelnut = document.querySelector(".hazelnut__menu"),
  hazelnutIcon = document.querySelector(".hazelnut__icon"),
  hazelnutMenu = document.querySelector(".hazelnut"),
  almond = document.querySelector(".almond__menu"),
  almondIcon = document.querySelector(".almond__icon"),
  almondMenu = document.querySelector(".almond"),
  domestic = document.querySelector(".domestic__menu"),
  domesticIcon = document.querySelector(".domestic__icon"),
  domesticMenu = document.querySelector(".domestic"),
  navMenu = document.querySelector(".header__nav-menu"),
  navMenuImg = document.querySelector(".header__nav-img"),
  navNut = document.querySelector(".header__nav-nut");

burger.addEventListener("click", () => {
  menu.classList.add("active");
  //   document.body.style.overflow = "hidden";
  close.addEventListener("click", () => {
    menu.classList.remove("active");
    //   document.body.style.overflow = "";
  });
});
product.addEventListener("click", () => {
  (products.classList.toggle("products__open"),
    product.classList.toggle("yellow"),
    productIcon.classList.toggle("rotate"));
});

walnut.addEventListener("click", () => {
  (walnutMenu.classList.toggle("open"),
    walnut.classList.toggle("yellow"),
    walnutIcon.classList.toggle("rotate"));
});
hazelnut.addEventListener("click", () => {
  (hazelnutMenu.classList.toggle("open"),
    hazelnut.classList.toggle("yellow"),
    hazelnutIcon.classList.toggle("rotate"));
});
almond.addEventListener("click", () => {
  (almondMenu.classList.toggle("open"),
    almond.classList.toggle("yellow"),
    almondIcon.classList.toggle("rotate"));
});
domestic.addEventListener("click", () => {
  (domesticMenu.classList.toggle("open"),
    domestic.classList.toggle("yellow"),
    domesticIcon.classList.toggle("rotate"));
});
navMenu.addEventListener("click", () => {
  (navNut.classList.toggle("open"),
    navMenuImg.classList.toggle("rotate"),
    navMenu.classList.toggle("yellow"));
});

try {
  const swiper = new Swiper(".test", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    pagination: {
      el: ".swiper-pagination.slider__swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".icon-right-open",
    //   prevEl: ".icon-left-open",
    // },
    breakpoints: {
      // when window width is >= 1200px
      1440: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // 1920: {
      //   slidesPerView: 2,
      //   spaceBetween: 35,
      // },
    },

    modules: [Navigation, Pagination],
  });
} catch (e) {}

try {
  const client__swiper = new Swiper(".swiper__client", {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination.client__swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".icon-right-open",
    //   prevEl: ".icon-left-open",
    // },
    breakpoints: {
      // when window width is >= 1200px
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1400: {
        slidesPerView: 6,
        spaceBetween: 40,
      },
      1920: {
        slidesPerView: 8,
        spaceBetween: 40,
      },
    },

    modules: [Navigation, Pagination],
  });
} catch (e) {}

try {
  const validator = new JustValidate(".contact__form");

  validator
    .addField(
      "#radio",
      [
        {
          rule: "required",
          errorMessage: "Оберіть тип горіху",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#radio")
          .parentElement.querySelector(".checkbox__error"),
      },
    )
    .addField("#name", [
      {
        rule: "required",
        errorMessage: "Введить ім’я",
      },
      {
        rule: "minLength",
        value: 3,
        errorMessage: "Неправильно введено ім’я",
      },
    ])
    .addField("#tel", [
      {
        rule: "required",
        errorMessage: "Введить номер телефона",
      },
      {
        rule: "minLength",
        value: 5,
        errorMessage: "Слишком короткий номер",
      },
      {
        rule: "number",
        errorMessage: "Только цифры",
      },
    ])
    .addField("#email", [
      {
        rule: "required",
        errorMessage: "Введить электрону пошту",
      },
      {
        rule: "email",
      },
    ])
    .addField("#select", [
      {
        rule: "required",
        errorMessage: "Оберіть тип обладнення",
      },
    ])
    .addField("#message", [
      {
        rule: "required",
        errorMessage: "Введить ваш коментар",
      },
      {
        rule: "minLength",
        value: 5,
      },
    ])
    .addField(
      "#checkbtn",
      [
        {
          rule: "required",
          errorMessage: "Поставить галочку",
        },
      ],
      {
        errorsContainer: document
          .querySelector("#checkbtn")
          .parentElement.querySelector(".checkbox__error"),
      },
    );
} catch (e) {}
