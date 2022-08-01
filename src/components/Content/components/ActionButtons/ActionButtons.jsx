import React from "react";

import InstallCommand from "./components/InstallCommand/InstallCommand";

import s from "./ActionButtons.module.scss";

const ActionButtons = () => {
  return (
    <div className={s.container}>
      <InstallCommand />
    </div>
  );
};

export default ActionButtons;
