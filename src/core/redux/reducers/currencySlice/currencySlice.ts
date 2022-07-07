import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  getLocalStorage,
  setLocalStorage,
} from "../../../helper/localStorageHelper";
import localStorageKeys from "../../../constants/localStorageKeys";
import { getCurrencies } from "../../../api/currenciesAPI";
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

const fetchCurrenciesList = createAsyncThunk(
  "currency/fetchCurrenciesList",
  async (): Promise<CurrenciesData> => {
    const result = await getCurrencies({});
    return result;
  }
);

export const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    setCurrentCurrency: (state, action: PayloadAction<string>) => {
      const newCurrent = action.payload;
      state.currentCurrency = newCurrent;
      setLocalStorage(localStorageKeys.currentCurrency, newCurrent);
    },
  },
  extraReducers: (builer) => {
    builer.addCase(
      fetchCurrenciesList.fulfilled,
      (state, action: PayloadAction<CurrenciesData>) => {
        state.currenciesList = Object.keys(action.payload.rates);
      }
    );
  },
});

export const { setCurrentCurrency } = currencySlice.actions;
export { fetchCurrenciesList };

export default currencySlice.reducer;
