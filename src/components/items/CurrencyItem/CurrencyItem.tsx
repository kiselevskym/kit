import React from "react";
import s from "./currency.module.scss";
import CurrencyItemTypes from "./CurrencyItemTypes";

const CurrencyItem: React.FC<CurrencyItemTypes> = ({ name, value }) => {
  return (
    <div className={s.root}>
      <span>{name}</span>
      <span> - </span>
      <span>{value}</span>
    </div>
  );
};

export default CurrencyItem;
