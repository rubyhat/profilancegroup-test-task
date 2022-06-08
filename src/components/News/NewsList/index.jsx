import React from "react";
import { useSelector } from "react-redux";

import { Alert, Container, SearchInput } from "../../Helpers";
import NewsItem from "../NewsItem/NewsItem";

import "./newsList.scss";

const NewsList = () => {
  const userStore = useSelector((state) => state.user);
  const newsStore = useSelector((state) => state.news);
  const newsList = newsStore.newsList;

  return (
    <Container>
      <SearchInput />
      <div className="news-list">
        {newsList.length > 0 &&
          newsList.map((item) =>
            userStore.isLogin ? (
              <NewsItem key={item.id} {...item} />
            ) : (
              item.isAccepted && <NewsItem key={item.id} {...item} />
            )
          )}
        {newsList.length === 0 && (
          <Alert
            text="Список новостей пуст! Создайте новость прямо сейчас :)"
            variant={"alert_info"}
          />
        )}
        {newsList.length > 0 && !userStore.isLogin && (
          <Alert
            text="Авторизуйтесь, возможно здесь есть новости :)"
            variant={"alert_info"}
          />
        )}
      </div>
    </Container>
  );
};

export default NewsList;
