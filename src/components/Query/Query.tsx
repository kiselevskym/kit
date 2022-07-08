import React from "react";
import Loader from "../Loader/Loader";
import QueryTypes from "./QueryTypes";

const Query: React.FC<QueryTypes> = ({ isError, isLoaded, children }) => {
  if (isError) return <div>ERROR</div>;
  if (!isLoaded) return <Loader />;

  return <div>{children}</div>;
};

export default Query;
