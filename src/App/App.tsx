import React from "react";
import { useDispatch } from "react-redux";
import {
  currencyActions,
  CurrencyThunkDispatch,
} from "../core/store/reducers/currencySlice/currencyActions";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  const dispatch = useDispatch<CurrencyThunkDispatch>();

  React.useEffect(() => {
    dispatch(currencyActions.fetchCurrenciesList());
  }, []);
  // раньше IDE подчеркивал пустую зависимость как warning, это осталось как привычка, хотя и не обязательно так делать.

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
