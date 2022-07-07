import React from "react";
import s from "./button.module.scss";

interface Props {
  label: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ label, onClick }) => {
  return (
    <button className={s.root} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
