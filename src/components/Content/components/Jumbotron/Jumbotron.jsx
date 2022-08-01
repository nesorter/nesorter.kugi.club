import React from "react";

import s from "./Jumbotron.module.scss";

const Jumbotron = () => {
  return (
    <div className={s.jumbotron}>
      <h1 className={s.header}>Сортируй и стримь музыку в удобном виде</h1>
      <div className={s.description}>
        <span className={s.company}>nesorter</span> - это софтверное решение для
        сортировки и стриминга музыки в icecast. OpenSource, developer-first.
      </div>
    </div>
  );
};

export default Jumbotron;
