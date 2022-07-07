import axios, { AxiosResponse } from "axios";
import ConvertCurrencyData from "../interfaces/ConvertCurrencyData";
import CurrenciesData from "../interfaces/CurrenciesData";

const API: string = "https://api.exchangerate.host";

interface ConvertCurrencyProps {
  from: string;
  to: string;
  amount: string;
}

const convertCurrency = async ({
  from,
  to,
  amount,
}: ConvertCurrencyProps): Promise<ConvertCurrencyData> => {
  const result: AxiosResponse = await axios.get<ConvertCurrencyData>(
    `${API}/convert?from=${from}&to=${to}&amount=${amount}`
  );
  return result.data;
};

interface GetCurrenciesProps {
  base?: string;
}

const getCurrencies = async ({
  base = "USD",
}: GetCurrenciesProps): Promise<CurrenciesData> => {
  const result: AxiosResponse = await axios.get<CurrenciesData>(
    `${API}/latest?base=${base}`
  );
  return result.data;
};

export { convertCurrency, getCurrencies };
