import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import useInput from "../../CustomHooks/useInput";
import { Input, Textarea, InputNotification, Alert } from "../../Helpers";

import "./newsCreateForm.scss";

const NewsCreateForm = () => {
  const dispatch = useDispatch();
  const [isCreated, setIsCreated] = useState(false);

  const title = useInput("", {
    isEmpty: true,
    minLength: 6,
    maxLength: 30,
  });
  const text = useInput("", { isEmpty: true, minLength: 6, maxLength: 300 });

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!title.formValid || !text.formValid) {
      const newsData = {
        id: uuidv4(),
        title: title.value,
        text: text.value,
        timestamp: new Date().toLocaleDateString(),
        isAccepted: false,
      };
      dispatch({ type: "ADD_NEWS", payload: newsData });
      setIsCreated(true);
      title.onReset();
      text.onReset();
    }
  };

  return (
    <form className="create-form" onSubmit={(event) => handleFormSubmit(event)}>
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
      {isCreated && (
        <Alert text="Новость успешно создана" variant={"alert_info"} />
      )}
    </form>
  );
};

export default NewsCreateForm;
