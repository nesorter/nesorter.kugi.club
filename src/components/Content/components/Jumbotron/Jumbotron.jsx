import React from "react";

import s from "./Jumbotron.module.scss";

const Jumbotron = () => {
  return (
    <div className={s.jumbotron}>
      <h1 className={s.header}>Sort and stream your music in a convient way</h1>
      <div className={s.description}>
        <span className={s.company}>nesorter</span> - is a software solution for
        sorting and streaming music in icecast. Open source, developer first.
      </div>
    </div>
  );
};

export default Jumbotron;
