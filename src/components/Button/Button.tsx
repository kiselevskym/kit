import React from "react";
import s from "./button.module.scss";
import ButtonTypes from "./ButtonTypes";

const Button: React.FC<ButtonTypes> = ({ label, onClick }) => {
  return (
    <button className={s.root} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
