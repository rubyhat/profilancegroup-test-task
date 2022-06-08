import React from "react";
import { useSelector } from "react-redux";

import { Container } from "../Helpers";

const Home = () => {
  const userStore = useSelector((state) => state.user);

  return (
    <Container>
      <h1 className="title title_xl">Привет, {userStore.login}</h1>
    </Container>
  );
};

export default Home;
