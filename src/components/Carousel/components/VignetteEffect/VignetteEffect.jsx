import React from "react";

import s from "./VignetteEffect.module.scss";

const VignetteEffect = () => {
  return (
    <div className={s.vignettes}>
      <div className={s.vignetteLeft}></div>
      <div className={s.vignetteRight}></div>
    </div>
  );
};

export default VignetteEffect;
