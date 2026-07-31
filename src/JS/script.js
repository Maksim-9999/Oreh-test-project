import "/src/sass/style.scss";
import initFormValidation from "./modules/validator";
import slider from "./modules/slider";
import initBurgerMenu from "./modules/burger-menu";
import { initCategoryDropdowns } from "./modules/category-dropdowns";

window.addEventListener("DOMContentLoaded", () => {
  initFormValidation();
  initBurgerMenu();
  initCategoryDropdowns();
  slider();
});
