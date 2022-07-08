import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import CurrenciesData from "../../../interfaces/CurrenciesData";
import { currenciesAPI } from "../../api/currenciesAPI";
import { AppDispatch } from "../../store";
import {
  CurrencyState,
  setCurrenciesListFailed,
  setCurrenciesListSuccess,
} from "./currencySlice";

export type CurrencyThunkDispatch = ThunkDispatch<
  CurrencyState,
  null,
  AnyAction
>;

const fetchCurrenciesList = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result: CurrenciesData = await currenciesAPI.getCurrencies({});
      return dispatch(setCurrenciesListSuccess(result));
    } catch (e) {
      return dispatch(setCurrenciesListFailed);
    }
  };
};

export const currencyActions = { fetchCurrenciesList };
