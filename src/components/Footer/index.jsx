import React from "react";

import { Container } from "../Helpers";

const Footer = () => {
  return (
    <footer>
      <Container>
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
      </Container>
    </footer>
  );
};

export default Footer;
