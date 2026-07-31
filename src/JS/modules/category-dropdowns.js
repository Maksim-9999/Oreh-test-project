const BREAKPOINT = 1440;

const initSingleDropdown = (item) => {
  const trigger = item.querySelector(".header__menu-nut");
  const dropdown = item.querySelector(".header__menu-nuts");
  const icon = trigger?.querySelector(".header__menu-icon");

  if (!trigger || !dropdown || !icon) return;

  trigger.addEventListener("click", () => {
    trigger.classList.toggle("yellow");
    icon.classList.toggle("rotate");
    dropdown.classList.toggle("open");
  });
};

export const closeSingleDropdown = (item) => {
  const trigger = item.querySelector(".header__menu-nut");
  const dropdown = item.querySelector(".header__menu-nuts");
  const icon = trigger?.querySelector(".header__menu-icon");

  trigger?.classList.remove("yellow");
  icon?.classList.remove("rotate");
  dropdown?.classList.remove("open");
};

export const initCategoryDropdowns = () => {
  const items = document.querySelectorAll(".header__menu-item");
  items.forEach(initSingleDropdown);

  const product = document.querySelector(".header__menu-product");
  const productIcon = product?.querySelector(".header__menu-icon");
  const products = document.querySelector(".header__menu-products");

  product?.addEventListener("click", () => {
    const items = document.querySelectorAll(".header__menu-item");

    items.forEach(closeSingleDropdown);
    product.classList.toggle("yellow");
    productIcon?.classList.toggle("rotate");
    products?.classList.toggle("products__open");
  });

  const navMenu = document.querySelector(".header__nav-menu");
  const navIcon = navMenu?.querySelector(".header__menu-icon");
  const navNut = document.querySelector(".header__nav-nut");

  navMenu?.addEventListener("click", () => {
    navMenu.classList.toggle("yellow");
    navIcon?.classList.toggle("rotate");
    navNut?.classList.toggle("open");
  });

  const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`);

  const closeEverything = () => {
    items.forEach(closeSingleDropdown);
    product?.classList.remove("yellow");
    productIcon?.classList.remove("rotate");
    products?.classList.remove("products__open");
    navMenu?.classList.remove("yellow");
    navIcon?.classList.remove("rotate");
    navNut?.classList.remove("open");
  };

  mediaQuery.addEventListener("change", closeEverything);
};
