import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import paths from "../core/constants/paths";
const Home = React.lazy(() => import("../pages/Home/Home"));
const CurrenciesPage = React.lazy(() => import("../pages/CurrenciesPage"));

const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={paths.home} element={<Home />} />
        <Route path={paths.currencies} element={<CurrenciesPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
