import JustValidate from "just-validate";

const initFormValidation = () => {
  try {
    const validator = new JustValidate(".contact__form");
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
      );
  } catch (e) {
    console.error("Ошибка инициализации валидации:", e);
  }
};
export default initFormValidation;
