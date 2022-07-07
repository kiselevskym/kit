import React from "react";
import s from "./currency.module.scss";

interface Props {
  name: string;
  value: number;
}

const CurrencyItem: React.FC<Props> = ({ name, value }) => {
  return (
    <div className={s.root}>
      <span>{name}</span>
      <span> - </span>
      <span>{value}</span>
    </div>
  );
};

export default CurrencyItem;
