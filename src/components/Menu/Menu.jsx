import React from "react";

import s from "./Menu.module.scss";

import logo from "../../images/logo.svg";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

const Menu = () => {
  return (
    <header className={s.menu}>
      <>
        <img className={s.logo} src={logo} alt="" />
      </>
      <div className={s.links}>
        <nav className={s.link}>
          <i className={`${s.icon} ${s.github}`}></i>
          <a className={s.linkA} href="https://github.com/nesorter">Github</a>
        </nav>
      </div>
      <div className={s.BurgerMenuComponent}>
        <BurgerMenu />
      </div>
    </header>
  );
};

export default Menu;
