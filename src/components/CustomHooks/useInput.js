import { useState } from "react";
import useValidation from "./useValidation";

// Передаем стартовое значение и объект валидаций.
// Хук возвращает данные и функции обработчики, которые затем применяются к input
const useInput = (initialValue, validations) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setIsDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (event) => {
    const value = event.target.value;
    setValue(value);
  };

  const onBlur = () => {
    setIsDirty(true);
  };

  const onReset = () => {
    setValue("");
    setIsDirty(false);
  };

  return {
    value,
    onChange,
    onBlur,
    onReset,
    isDirty,
    ...valid,
  };
};

export default useInput;
