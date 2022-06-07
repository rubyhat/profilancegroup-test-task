import React from "react";

import "./loginForm.scss";

const LoginForm = () => {
  return (
    <form className="login-form">
      <label className="login-form__label">
        <input className="login-form__input" type="text" placeholder="Login" />
      </label>
      <label className="login-form__label">
        <input
          className="login-form__input"
          type="password"
          placeholder="Password"
        />
      </label>
      <button className="button button_xl" type="submit">
        Войти
      </button>
    </form>
  );
};

export default LoginForm;
