import React, { useRef, useState } from "react";

import { useClipboard } from "use-clipboard-copy";
import { useDetectOutsideClick } from "../../../../../../hooks/useDetectOutsideClick/useDetectOutsideClick";

import Sort from "./Sort/Sort";

import s from "./InstallCommand.module.scss";

const InstallCommand = () => {
  const [sort, setSort] = useState({
    image: s.java,
    text: "npx create-nesorter-app@latest my-station",
  });

  const dropdownRef = useRef(null);

  const [click, setClick] = useDetectOutsideClick(dropdownRef, false);

  const HandleClick = () => {
    setClick(clipboard.copy(url));
    setClick(!click);
  };

  const clipboard = useClipboard();
  const url = sort.text;

  return (
    <div className={s.command}>
      <Sort sort={sort} setSort={setSort} />
      <div className={s.container}>
        <div className={s.link}>{url}</div>
        <i ref={dropdownRef} className={s.copy} onClick={HandleClick}></i>
        {click && <i className={s.popover}></i>}
      </div>
    </div>
  );
};

export default InstallCommand;
