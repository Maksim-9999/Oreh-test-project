import JustValidate from "just-validate";

const initFormValidation = (showThanksPopup = () => {}) => {
  try {
    const form = document.querySelector(".contact__form");
    if (!form) return;

    const status = form.querySelector("[data-form-status]");
    const submitButton = form.querySelector('[type="submit"]');
    const validator = new JustValidate(form);

    const setStatus = (message = "") => {
      if (status) status.textContent = message;
    };

    validator
      .addRequiredGroup("#radio-group", "Оберіть тип горіху")
      .addField("#name", [
        { rule: "required", errorMessage: "Введить ім’я" },
        {
          rule: "minLength",
          value: 3,
          errorMessage: "Неправильно введено ім’я",
        },
      ])
      .addField("#tel", [
        { rule: "required", errorMessage: "Введить номер телефона" },
        {
          rule: "minLength",
          value: 5,
          errorMessage: "Слишком короткий номер",
        },
        { rule: "number", errorMessage: "Только цифры" },
      ])
      .addField("#email", [
        { rule: "required", errorMessage: "Введить электрону пошту" },
        { rule: "email" },
      ])
      .addField("#select", [
        { rule: "required", errorMessage: "Оберіть тип обладнення" },
      ])
      .addField("#message", [
        { rule: "required", errorMessage: "Введить ваш коментар" },
        { rule: "minLength", value: 5 },
      ])
      .addField(
        "#checkbtn",
        [{ rule: "required", errorMessage: "Поставить галочку" }],
        {
          errorsContainer: document
            .querySelector("#checkbtn")
            .parentElement.querySelector(".checkbox__error"),
        },
      )
      .onSuccess(async (event) => {
        event?.preventDefault();
        setStatus("");

        if (submitButton) submitButton.disabled = true;

        try {
          const response = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(Object.fromEntries(new FormData(form))),
          });

          if (!response.ok) throw new Error("Request failed");

          form.reset();
          showThanksPopup();
        } catch (error) {
          console.error("Form submission failed:", error);
          setStatus("Не вдалося надіслати заявку. Спробуйте ще раз.");

          const errorModal = document.querySelector("[data-error-message]");
          if (errorModal) {
            errorModal.classList.add("show");
            setTimeout(() => {
              errorModal.classList.remove("show");
            }, 3000);
          }
        } finally {
          if (submitButton) submitButton.disabled = false;
        }
      });
  } catch (e) {
    console.error("Ошибка инициализации валидации:", e);
  }
};
export default initFormValidation;
