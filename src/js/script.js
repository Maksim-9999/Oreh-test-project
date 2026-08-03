import "/src/sass/style.scss";
import initFormValidation from "./modules/validator";
import slider from "./modules/slider";
import initBurgerMenu from "./modules/burger-menu";

window.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initBurgerMenu();

  slider();
});
