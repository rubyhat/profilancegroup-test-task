import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Badge } from "../../Helpers";

import "./newsItem.scss";

const NewsItem = (props) => {
  const { id, title, text, timestamp, isAccepted } = props;
  const userStore = useSelector((state) => state.user);
  const newsStore = useSelector((state) => state.news);
  const dispatch = useDispatch();

  const handleButtonClick = (type) => {
    dispatch({ type, payload: id });
  };
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="title title_sm">{title}</h3>
        <Badge variant="accent">{timestamp}</Badge>
      </div>
      <div className="card__content">
        <p className="text text_sm">{text}</p>
      </div>
      {userStore.isAdmin && (
        <div className="card__footer">
          {!isAccepted ? (
            <button
              onClick={(event) => handleButtonClick("ACCEPT_NEWS")}
              className="button button_md card__button card__button_accept"
            >
              Одобрить
            </button>
          ) : (
            <Badge variant="accent">Новость одобрена</Badge>
          )}
          <button
            onClick={(event) => handleButtonClick("DELETE_NEWS")}
            className="button button_md is-danger card__button"
          >
            Удалить
          </button>
        </div>
      )}
    </div>
  );
};

export default NewsItem;
