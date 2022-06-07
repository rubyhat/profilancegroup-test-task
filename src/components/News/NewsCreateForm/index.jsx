import React from "react";

import useInput from "../../CustomHooks/useInput";
import { Input, Textarea, InputNotification } from "../../Helpers";

import "./newsCreateForm.scss";

const NewsCreateForm = () => {
  const title = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 30,
  });
  const text = useInput("", { isEmpty: true, minLength: 6, maxLength: 300 });
  return (
    <form className="create-form">
      <div className="create-form__field-wrap">
        <Input
          type={title}
          inputType={"text"}
          title={"Заголовок новости"}
          placeholder={"Lorem Ipsum..."}
        />
        {title.isDirty && (
          <>
            <InputNotification
              text={title.isEmpty.error}
              isValid={!title.isEmpty.is}
            />
            <InputNotification
              text={title.minLengthError.error}
              isValid={!title.minLengthError.is}
            />
          </>
        )}
      </div>
      <div className="create-form__field-wrap">
        <Textarea
          type={text}
          inputType={"textarea"}
          title={"Текст новости"}
          placeholder={"Lorem Ipsum..."}
        />
        {text.isDirty && (
          <>
            <InputNotification
              text={text.isEmpty.error}
              isValid={!text.isEmpty.is}
            />
            <InputNotification
              text={text.minLengthError.error}
              isValid={!text.minLengthError.is}
            />
          </>
        )}
      </div>
      <button
        disabled={title.formValid || text.formValid}
        className="button button_xl"
        type="submit"
      >
        Создать новость
      </button>
    </form>
  );
};

export default NewsCreateForm;
