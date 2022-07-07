import React from "react";
import s from "./loader.module.scss";

const Loader: React.FC = () => (
  <div className={s.wrapper}>
    <div className={s.root} />
  </div>
);

export default Loader;
