import React from "react";
import { useSelector } from "react-redux";
import CurrencyItem from "../components/items/CurrencyItem/CurrencyItem";
import Layout from "../components/Layout/Layout";
import Query from "../components/Query";
import { getCurrencies } from "../core/api/currenciesAPI";
import useQuery from "../core/hooks/useQuery";
import CurrenciesData from "../core/interfaces/CurrenciesData";
import { selectCurrentCurrency } from "../core/redux/reducers/currencySlice/currenctSelectors";

const CurrenciesPage: React.FC = () => {
  const currentCurrency = useSelector(selectCurrentCurrency);
  const { data, isLoaded, isError } = useQuery<CurrenciesData>({
    fetcher: () => getCurrencies({ base: currentCurrency }),
    deps: [currentCurrency],
  });

  return (
    <Layout>
      <Query isError={isError} isLoaded={isLoaded}>
        {data &&
          Object.entries(data.rates).map(([name, value]: [string, number]) => (
            <CurrencyItem key={name} name={name} value={value} />
          ))}
      </Query>
    </Layout>
  );
};

export default CurrenciesPage;
