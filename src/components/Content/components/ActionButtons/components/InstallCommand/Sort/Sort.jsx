import React, { useState } from "react";

import s from "./Sort.module.scss";

const Sort = ({ sort, setSort }) => {
  //   const [sort, setSort] = useState({
  //     image: s.java,
  //   });

  const [open, setOpen] = useState(false);

  const list = [
    {
      name: "NPM/Node.JS package",
      image: s.java,
      text: "npx create-nesorter-app@latest my-station",
    },
    {
      name: "Docker image",
      image: s.docker,
      text: "https://docs.docker.com/network/links/",
    },
    {
      name: "Clone Github repo",
      image: s.clone,
      text: "https://github.com/torvalds/linux",
    },
  ];

  const updateList = (index) => {
    setSort(index);
    setOpen(!open);
  };

  return (
    <div className={s.sort}>
      <div className={s.label} onClick={() => setOpen(!open)}>
        <i className={`${s.icon} ${sort.image}`}></i>

        {!open ? (
          <i className={s.arrow}></i>
        ) : (
          <i className={`${s.arrow} ${s.rotate}`}></i>
        )}
      </div>

      {open && (
        <div className={s.popup}>
          <ul>
            {list.map((obj, idx) => (
              <li
                onClick={() => updateList(obj)}
                className={sort === obj ? "active" : ""}
                key={idx}
              >
                <i key={idx} className={`${s.icon} ${obj.image}`}></i>

                <div className={s.text}>{obj.name}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
