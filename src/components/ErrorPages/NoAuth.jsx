import React from "react";

import { Alert, Container } from "../Helpers";

const NoAuth = () => {
  return (
    <Container>
      <Alert
        text={"Для просмотра данной страницы необходимо авторизоваться."}
        variant={"alert_warning"}
      />
    </Container>
  );
};

export default NoAuth;
