import "/src/sass/style.scss";
import initFormValidation from "./modules/validator";
import slider from "./modules/slider";
import initBurgerMenu from "./modules/burger-menu";
import initThanksPopup from "./modules/popup";

window.addEventListener("DOMContentLoaded", () => {
  const thanksPopup = initThanksPopup();
  initFormValidation(thanksPopup.open);
  initBurgerMenu();
  slider();
});
