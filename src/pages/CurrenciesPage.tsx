import React from "react";
import { useSelector } from "react-redux";
import Layout from "../components/common/Layout";
import CurrencyItem from "../components/items/CurrencyItem";
import Query from "../components/Query";
import useQuery from "../core/hooks/useQuery";
import CurrenciesData from "../core/interfaces/CurrenciesData";
import { currenciesAPI } from "../core/store/api/currenciesAPI";
import { selectCurrentCurrency } from "../core/store/reducers/currencySlice/currencySelectors";

const CurrenciesPage: React.FC = () => {
  const currentCurrency = useSelector(selectCurrentCurrency);
  const { data, isLoaded, isError } = useQuery<CurrenciesData>({
    fetcher: () => currenciesAPI.getCurrencies({ base: currentCurrency }),
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
