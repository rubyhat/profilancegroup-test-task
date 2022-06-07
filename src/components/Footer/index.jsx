import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p className="text text-md">
          Тестовое задание разработано{" "}
          <a
            className="link link_active"
            href="https://github.com/rubyhat"
            target="_blank"
            rel="noreferrer"
          >
            @rubyhat
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
