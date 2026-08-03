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

    const product = document.querySelector(".header__menu-product");
    product?.classList.remove("open");

    const menuItems = document.querySelectorAll(".header__menu-item");
    menuItems.forEach((item) => item.classList.remove("item-open"));
  };

  const removeItem = (item) => {
    item.classList.remove("item-open");
  };

  const toggleSubmenu = () => {
    const menuItems = document.querySelectorAll(".header__menu-item");

    menuItems.forEach((item) => {
      const nut = item.querySelector(".header__menu-nut");
      if (!nut) return;

      nut.addEventListener("click", () => {
        const isOpen = item.classList.contains("item-open");

        menuItems.forEach((i) => removeItem(i));

        if (!isOpen) {
          item.classList.add("item-open");
        }
      });
    });
  };

  const openMenuItem = () => {
    const menuItem = document.querySelector(".header__menu-product");
    const itemButton = document.querySelector(".header__menu-product-item");

    itemButton.addEventListener("click", () => {
      menuItem.classList.toggle("open");
    });
  };
  window.matchMedia("(min-width: 1440px)").addEventListener("change", (e) => {
    if (e.matches) {
      closeMenu();
    }
  });

  openMenuItem();
  toggleSubmenu();
  burger.addEventListener("click", openMenu);
  closeBtn.addEventListener("click", closeMenu);
};

export default initBurgerMenu;
