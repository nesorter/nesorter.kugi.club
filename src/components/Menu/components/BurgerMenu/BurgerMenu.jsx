import React, { useRef, useState } from "react";
import { useDetectOutsideClick } from "../../../../hooks/useDetectOutsideClick/useDetectOutsideClick";

import s from "./BurgerMenu.module.scss";

const BurgerMenu = () => {
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
          <i className={`${s.icon} ${s.github}`}></i>
          <a className={s.linkA} href="https://github.com/nesorter">Github</a>
        </nav>
      </div>
    </nav>
  );
};

export default BurgerMenu;
