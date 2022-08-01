import React from "react";

import s from "./../styles/Header.module.scss";

import logo from "./../images/logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <img src={logo} alt="" />
    </header>
  );
};

export default Header;
