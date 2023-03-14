import React from "react";

import ActionButtons from "./components/ActionButtons/ActionButtons";
import Jumbotron from "./components/Jumbotron/Jumbotron";

import s from "./Content.module.scss";

const Content = () => {
  return (
    <div className={s.content}>
      <Jumbotron />
      <ActionButtons />
    </div>
  );
};

export default Content;
