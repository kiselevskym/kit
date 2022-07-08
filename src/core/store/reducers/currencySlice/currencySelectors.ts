import { RootState } from "../../store";

const selectCurrentCurrency = (state: RootState) =>
  state.currencyReducer.currentCurrency;

const selectCurrencies = (state: RootState) =>
  state.currencyReducer.currenciesList;

export { selectCurrentCurrency, selectCurrencies };
