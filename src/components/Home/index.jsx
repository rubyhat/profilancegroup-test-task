import React from "react";
import { useSelector } from "react-redux";

import { Container } from "../Helpers";

const Home = () => {
  const userStore = useSelector((state) => state.user);

  return (
    <Container>
      <h1 className="title title_xl">Привет, {userStore.login}</h1>
      <p className="text text_sm">
        p.s. Логин сделал в виде email для чуть более интересной валидации при
        авторизации.
      </p>
    </Container>
  );
};

export default Home;
