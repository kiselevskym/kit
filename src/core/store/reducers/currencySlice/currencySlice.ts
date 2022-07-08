import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../helper/localStorageHelper";
import localStorageKeys from "../../../constants/localStorageKeys";
import CurrenciesData from "../../../interfaces/CurrenciesData";

export interface CurrencyState {
  currentCurrency: string;
  currenciesList: string[];
}

const currentCurrency =
  getLocalStorage(localStorageKeys.currentCurrency) || "UAH";

const initialState: CurrencyState = {
  currentCurrency,
  currenciesList: [],
};

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrentCurrency: (
      state: CurrencyState,
      action: PayloadAction<string>
    ) => {
      const newCurrent = action.payload;
      state.currentCurrency = newCurrent;
      setLocalStorage(localStorageKeys.currentCurrency, newCurrent);
    },
    setCurrenciesListSuccess: (
      state: CurrencyState,
      action: PayloadAction<CurrenciesData>
    ) => {
      const list = Object.keys(action.payload.rates);
      state.currenciesList = list;
    },
    setCurrenciesListFailed: () => {},
  },
});

export const {
  setCurrentCurrency,
  setCurrenciesListSuccess,
  setCurrenciesListFailed,
} = currencySlice.actions;

export default currencySlice.reducer;
