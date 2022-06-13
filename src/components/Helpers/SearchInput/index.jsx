import React, { useEffect, useState } from "react";

import "./searchInput.scss";

const SearchInput = ({ setSearchQuery }) => {
  const [value, setValue] = useState("");

  const handleInput = (event) => {
    const value = event.target.value.toLowerCase();
    setValue(value);
  };

  // debounce search input
  // можно вывести в небольшой кастомный хук для переиспользования
  useEffect(() => {
    const handler = setTimeout(() => setSearchQuery(value), 250);
    return () => clearTimeout(handler);
  });

  return (
    <div className="search-input">
      <input
        className="search-input__input"
        type="text"
        onChange={(event) => handleInput(event)}
        value={value}
      />
      <button className="button search-input__button">Поиск</button>
    </div>
  );
};

export default SearchInput;
