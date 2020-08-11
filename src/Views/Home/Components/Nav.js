import React, { useEffect } from "react";
import "Assets/scss/pages/nav.scss";
import { useState } from "reactn";

export default () => {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.addEventListener("scroll");
    };
  }, []);

  return (
    <div className={`p-3 nav ${show && "nav__black"}`}>
      <div className="nav__logo">NETFLIXPLASH</div>
      <div className="nav__avatar">PD</div>
    </div>
  );
};
