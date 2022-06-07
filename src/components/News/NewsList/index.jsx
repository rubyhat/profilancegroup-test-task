import React from "react";

import { Container, SearchInput } from "../../Helpers";
import NewsItem from "../NewsItem/NewsItem";

import "./newsList.scss";

const NewsList = () => {
  return (
    <Container>
      <SearchInput />
      <div className="news-list">
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
      </div>
    </Container>
  );
};

export default NewsList;
