const initThanksPopup = () => {
  const popup = document.querySelector("[data-thanks-message]");
  const closeButton = popup?.querySelector(".popup__message-close");

  if (!popup || !closeButton) return { open: () => {} };

  const close = () => {
    popup.classList.remove("show");
    document.body.style.overflow = "";
  };

  const open = () => {
    popup.classList.add("show");
    document.body.style.overflow = "hidden";
    closeButton.focus();
  };

  closeButton.addEventListener("click", close);
  popup.addEventListener("click", (event) => {
    if (event.target === popup) close();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && popup.classList.contains("show")) close();
  });

  return { open };
};

export default initThanksPopup;
