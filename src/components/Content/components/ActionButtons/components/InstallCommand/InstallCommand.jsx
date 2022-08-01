import React, { useState } from "react";

import Sort from "./Sort/Sort";

import s from "./InstallCommand.module.scss";

const InstallCommand = () => {
  return (
    <div className={s.command}>
      <Sort />
      <div className={s.container}>
        <div className={s.link}>npx create-nesorter-app@latest my-station</div>
        <i className={s.copy}></i>
      </div>
    </div>
  );
};

export default InstallCommand;
