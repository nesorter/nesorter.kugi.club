import React from "react";

import s from "./../styles/Header.module.scss";

import logo from "./../images/logo.svg";

const Header = () => {
  return (
    <header className={s.header}>
      <>
        <img src={logo} alt="" />
      </>
      <div className={s.menu}>
        <nav>
          <i className={`${s.icon} ${s.book}`}></i>
          Дока
        </nav>
        <nav>
          <i className={`${s.icon} ${s.cloud}`}></i>
          Облачное решение
        </nav>
        <nav>
          <i className={`${s.icon} ${s.github}`}></i>
          Github
        </nav>
        <button className={s.start}>начать</button>
      </div>
    </header>
  );
};

export default Header;
