import { closeSingleDropdown } from "./category-dropdowns";
const initBurgerMenu = () => {
  const burger = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const closeBtn = document.querySelector(".header__menu-close");

  if (!burger || !menu || !closeBtn) return;

  const openMenu = () => {
    menu.classList.add("active");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.remove("active");
    document.body.style.overflow = "";
    const items = document.querySelectorAll(".header__menu-item");

    items.forEach(closeSingleDropdown);

    const product = document.querySelector(".header__menu-product");
    const productIcon = product?.querySelector(".header__menu-icon");
    const products = document.querySelector(".header__menu-products");
    product?.classList.remove("yellow");
    productIcon?.classList.remove("rotate");
    products?.classList.remove("products__open");
  };
  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
};
export default initBurgerMenu;
