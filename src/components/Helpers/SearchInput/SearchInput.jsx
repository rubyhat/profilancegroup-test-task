import React from "react";

import "./searchInput.scss";

const SearchInput = () => {
  const handleInput = (event) => {
    console.log(event.target.value);
  };
  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        onChange={(event) => handleInput(event)}
      />
      <button className="button search-input__button">Поиск</button>
    </div>
  );
};

export default SearchInput;
