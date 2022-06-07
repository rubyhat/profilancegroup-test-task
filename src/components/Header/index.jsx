import React, { useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { Container } from "../Helpers";
import Modal from "../Helpers/Modal";
import LoginForm from "../LoginForm";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <header>
      <Container>
        <div className="header">
          <Link to="/" className="logo">
            <img
              src="https://camo.githubusercontent.com/a2676d223d98caa2fb625d37d9fc911a8eab620ae99d6aadaad02fd26680ab67/68747470733a2f2f7374617469632e74696c646163646e2e636f6d2f74696c64333633382d333333382d343133362d623033382d3331333133323330363433382f47726f75705f3634302e737667"
              alt="Logotype"
            />
          </Link>
          <nav className="nav-list">
            <Link className="link nav-list__item" to="/">
              Добавить новость
            </Link>
            <Link className="link nav-list__item" to="/news">
              Новости
            </Link>
            <Link
              onClick={() => setIsActive(true)}
              className="button button_xl nav-list__item"
              to="/"
            >
              Вход
            </Link>
          </nav>
        </div>
      </Container>
      <Modal
        modal="auth"
        isActive={isActive}
        setIsActive={setIsActive}
        title="Форма входа"
      >
        <LoginForm />
      </Modal>
    </header>
  );
};

export default Header;
