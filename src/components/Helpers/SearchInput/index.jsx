import React from "react";

import "./searchInput.scss";

const SearchInput = ({ searchQuery, setSearchQuery }) => {
  const handleInput = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchQuery(value);
  };
  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        onChange={(event) => handleInput(event)}
        value={searchQuery}
      />
      <button className="button search-input__button">Поиск</button>
    </div>
  );
};

export default SearchInput;
