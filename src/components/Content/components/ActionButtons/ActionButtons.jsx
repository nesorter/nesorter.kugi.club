import React from "react";

import InstallCommand from "./components/InstallCommand/InstallCommand";

import s from "./ActionButtons.module.scss";

const ActionButtons = () => {
  return (
    <div className={s.container}>
      <InstallCommand />
      <div className={s.buttons}>
        <button className={`${s.demo}`} onClick={() => {
          // eslint-disable-next-line no-restricted-globals
          location.href = 'https://neformat.kugi.club';
        }}>try demo</button>
      </div>
    </div>
  );
};

export default ActionButtons;
