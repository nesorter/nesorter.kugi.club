import React, { useState } from "react";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className={s.menu}>
      <button onClick={handleToggle}>
        {navbarOpen ? (
          <i className={s.arrows}></i>
        ) : (
          <i className={s.burger}></i>
        )}
      </button>
      <div className={`${s.links} ${navbarOpen ? `${s.showlinks}` : ""}`}>
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
      </div>
    </nav>
  );
};

export default BurgerMenu;
