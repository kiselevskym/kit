import React, { Suspense } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader/Loader";
import paths from "./core/constants/paths";
import { fetchCurrenciesList } from "./core/redux/reducers/currencySlice/currencySlice";
import { AppDispatch } from "./core/redux/store";

const Home = React.lazy(() => import("./pages/Home/Home"));
const CurrenciesPage = React.lazy(() => import("./pages/CurrenciesPage"));

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  React.useEffect(() => {
    dispatch(fetchCurrenciesList());
  }, [null]);

  return (
    <Suspense fallback={<Loader />}>
      <div className="App">
        <Routes>
          <Route path={paths.home} element={<Home />} />
          <Route path={paths.currencies} element={<CurrenciesPage />} />
        </Routes>
      </div>
    </Suspense>
  );
};

export default App;
