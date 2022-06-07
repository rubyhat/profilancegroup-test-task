import React from "react";
import useInput from "../CustomHooks/useInput";
import { Input, InputNotification } from "../Helpers";

import "./loginForm.scss";

const LoginForm = () => {
  const email = useInput("", {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 30,
  });
  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });

  return (
    <form className="login-form">
      <div className="login-form__input-wrap">
        <Input
          type={email}
          inputType={"email"}
          title={"Email"}
          placeholder={"email@mail.com as login"}
        />
        {email.isDirty && (
          <>
            <InputNotification
              text={email.emailError.error}
              isValid={!email.emailError.is}
            />
            <InputNotification
              text={email.isEmpty.error}
              isValid={!email.isEmpty.is}
            />
            <InputNotification
              text={email.minLengthError.error}
              isValid={!email.minLengthError.is}
            />
          </>
        )}
      </div>
      <div className="login-form__input-wrap">
        <Input
          type={password}
          inputType={"password"}
          title={"Password"}
          placeholder={"Type your password"}
        />
        {password.isDirty && (
          <>
            {!password.isEmpty.is &&
              !password.minLengthError.is &&
              !password.maxLengthError.is && (
                <InputNotification
                  text={"Пароль введен корректно"}
                  isValid={!password.isEmpty.is}
                />
              )}

            <InputNotification
              text={password.isEmpty.error}
              isValid={!password.isEmpty.is}
            />
            <InputNotification
              text={password.minLengthError.error}
              isValid={!password.minLengthError.is}
            />
            <InputNotification
              text={password.maxLengthError.error}
              isValid={!password.maxLengthError.is}
            />
          </>
        )}
      </div>
      <button
        disabled={password.formValid || email.formValid}
        className="button button_xl"
        type="submit"
      >
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
