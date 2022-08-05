import React, { useRef, useState } from "react";
import { useDetectOutsideClick } from "../../../../hooks/useDetectOutsideClick/useDetectOutsideClick";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
  // const [navbarOpen, setNavbarOpen] = useState(false);

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);

  const onClick = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className={s.menu}>
      <button ref={dropdownRef} onClick={onClick}>
        {isActive ? <i className={s.arrows}></i> : <i className={s.burger}></i>}
      </button>
      <div className={`${s.links} ${isActive ? `${s.showlinks}` : ""}`}>
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
