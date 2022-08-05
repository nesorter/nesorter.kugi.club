import React from "react";

import InstallCommand from "./components/InstallCommand/InstallCommand";

import s from "./ActionButtons.module.scss";

const ActionButtons = () => {
  return (
    <div className={s.container}>
      <InstallCommand />
      <div className={s.buttons}>
        <button className={`${s.demo}`}>попробовать демо</button>
        <button className={s.start}>начать</button>
      </div>
    </div>
  );
};

export default ActionButtons;
