import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setShow(true);
      } else {
        setShow(false);
      }
      return () => {
        window.removeEventListener("scroll");
      };
    });
  }, []);

  return (
    <div className={`header ${show && "header-black"}`}>
      <img className="header-logo" src={logo} alt="" />
    </div>
  );
};

export default Header;
