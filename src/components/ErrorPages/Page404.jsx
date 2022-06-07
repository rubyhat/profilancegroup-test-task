import React from "react";
import { Alert, Container } from "../Helpers";

const Page404 = () => {
  return (
    <Container>
      <Alert
        text={"Ooops! Ошибка 404! Страница не найдена."}
        variant={"alert_info"}
      />
    </Container>
  );
};

export default Page404;
