import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import paths from "../../../core/constants/paths";
import {
  selectCurrencies,
  selectCurrentCurrency,
} from "../../../core/store/reducers/currencySlice/currencySelectors";
import { setCurrentCurrency } from "../../../core/store/reducers/currencySlice/currencySlice";
import { AppDispatch } from "../../../core/store/store";
import Select from "../../Select/Select";
import Container from "../Container";
import s from "./header.module.scss";

const Header: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const currentCurrency = useSelector(selectCurrentCurrency);
  const currenciesList = useSelector(selectCurrencies);

  const handleSetCurrentCurrency = (value: string) => {
    dispatch(setCurrentCurrency(value));
  };

  return (
    <header className={s.root}>
      <Container>
        <div className={s.content}>
          <nav className={s.nav}>
            <ul className={s.menu}>
              <li>
                <NavLink to={paths.home}>Home</NavLink>
              </li>
              <li>
                <NavLink to={paths.currencies}>Currencies</NavLink>
              </li>
            </ul>
          </nav>
          <div className={s.right}>
            <Select
              options={currenciesList}
              selectedLabel={currentCurrency}
              onChange={handleSetCurrentCurrency}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};
export default Header;
