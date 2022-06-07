import React from "react";

import "./input.scss";

const Input = (props) => {
  const { type, title, inputType, placeholder } = props;
  return (
    <div className="field">
      <label className="text text_md">{title}</label>
      <div className="field__control">
        <input
          value={type.value}
          onChange={(event) => type.onChange(event)}
          onBlur={() => type.onBlur()}
          name={title}
          className="field__input"
          type={inputType}
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default Input;
