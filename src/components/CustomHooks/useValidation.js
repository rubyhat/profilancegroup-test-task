import { useEffect, useState } from "react";

// Передаем в хук значение и объект валидаций, затем применяем необходимые проверки.
// Хук возвращает состояние проверки и сообщение.
const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLengthError] = useState(false);
  const [maxLengthError, setMaxLengthError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [formValid, setFormValid] = useState(false);

  // Form validate
  useEffect(() => {
    const states = [isEmpty, minLengthError, maxLengthError, emailError];
    let flag = false;
    states.forEach((state) => {
      if (state.is) flag = true;
    });
    setFormValid(flag);
  }, [isEmpty, minLengthError, maxLengthError, emailError]);

  // Each field validate
  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLength":
          value.length < validations[validation]
            ? setMinLengthError({
                is: true,
                error: `Минимальная длина ${validations.minLength} символов`,
              })
            : setMinLengthError({
                is: false,
                error: "",
              });
          break;
        case "maxLength":
          value.length > validations[validation]
            ? setMaxLengthError({
                is: true,
                error: `Максимальная длина ${validations.maxLength} символов`,
              })
            : setMaxLengthError({
                is: false,
                error: "",
              });
          break;
        case "isEmpty":
          value
            ? setIsEmpty({
                is: false,
                error: "",
              })
            : setIsEmpty({
                is: true,
                error: `Поле не может быть пустым`,
              });
          break;
        case "isEmail":
          const re =
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
          re.test(String(value).toLowerCase())
            ? setEmailError({
                is: false,
                error: "Логин введен корректно",
              })
            : setEmailError({
                is: true,
                error: "Некорректный е-майл",
              });
          break;
        default:
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError, maxLengthError, emailError, formValid };
};

export default useValidation;
