import React from "react";

import { Container } from "../../Helpers";
import NewsCreateForm from "../NewsCreateForm";

const NewsCreate = () => {
  return (
    <Container>
      <h2 className="title title_md">Форма добавления новой новости</h2>
      <NewsCreateForm />
    </Container>
  );
};

export default NewsCreate;
