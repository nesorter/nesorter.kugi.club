import React from "react";

import s from "./Menu.module.scss";

import logo from "../../images/logo.svg";

const Menu = () => {
  return (
    <header className={s.menu}>
      <>
        <img src={logo} alt="" />
      </>
      <div className={s.links}>
        <nav className={s.link}>
          <i className={`${s.icon} ${s.book}`}></i>
          Дока
        </nav>
        <nav className={s.link}>
          <i className={`${s.icon} ${s.cloud}`}></i>
          Облачное решение
        </nav>
        <nav className={s.link}>
          <i className={`${s.icon} ${s.github}`}></i>
          Github
        </nav>
        <button className={s.start}>начать</button>
      </div>
    </header>
  );
};

export default Menu;
