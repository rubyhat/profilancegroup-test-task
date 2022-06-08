import { useState } from "react";
import { useDispatch } from "react-redux";

import useInput from "../CustomHooks/useInput";
import { Input, InputNotification } from "../Helpers";

import "./loginForm.scss";

const LoginForm = ({ setIsActive }) => {
  const dispatch = useDispatch();
  const [failLogin, setFailLogin] = useState(false);

  const users = [
    {
      login: "user@mail.com",
      password: "useruser",
      isAdmin: false,
      isLogin: true,
    },
    {
      login: "admin@mail.com",
      password: "adminadmin",
      isAdmin: true,
      isLogin: true,
    },
  ];

  const email = useInput("", {
    isEmpty: true,
    minLength: 6,
    isEmail: true,
    maxLength: 30,
  });

  const password = useInput("", { isEmpty: true, minLength: 6, maxLength: 30 });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const [user, admin] = users;

    // Костыльная проверка костыльных пользователей, как сказано в ТЗ - пользователей забить в константу :)
    const isValidUser = (user, admin) => {
      setFailLogin(false);
      if (user.login === email.value && user.password === password.value) {
        dispatch({
          type: "ADD_USER",
          payload: { ...user },
        });
        email.onReset();
        password.onReset();
        setIsActive(false);
      } else if (
        admin.login === email.value &&
        admin.password === password.value
      ) {
        dispatch({
          type: "ADD_USER",
          payload: { ...admin },
        });
        email.onReset();
        password.onReset();
        setIsActive(false);
      } else {
        setFailLogin(true);
      }
    };
    isValidUser(user, admin);
  };

  return (
    <form
      className={failLogin ? "login-form login-form_fail" : "login-form"}
      onSubmit={(event) => {
        handleFormSubmit(event);
      }}
    >
      <div className="login-form__input-wrap">
        <Input
          type={email}
          inputType={"email"}
          title={"Email"}
          placeholder={"email@mail.com"}
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

      {failLogin && (
        <InputNotification
          text={"Неверный логин или пароль"}
          isValid={!failLogin}
        />
      )}
    </form>
  );
};

export default LoginForm;
