import React from "react";
import { Badge } from "../../Helpers";

import "./newsItem.scss";

const NewsItem = () => {
  return (
    <div className="card">
      <div className="card__header">
        <h3 className="title title_sm">What is Lorem Ipsum?</h3>
        <Badge variant="accent">07.06.2022</Badge>
      </div>
      <div className="card__content">
        <p className="text text_sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default NewsItem;
