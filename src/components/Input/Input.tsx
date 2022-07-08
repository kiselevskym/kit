import React from "react";
import s from "./input.module.scss";
import InputTypes from "./InputTypes";

const Input: React.FC<InputTypes> = ({
  placeholder,
  label,
  setState,
  state,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState(e.currentTarget.value);
  };

  return (
    <span className={s.root}>
      <label htmlFor={label}>{label}</label>
      <input
        onChange={handleChange}
        placeholder={placeholder}
        value={state}
        type="text"
        id={label}
      />
    </span>
  );
};

export default Input;
