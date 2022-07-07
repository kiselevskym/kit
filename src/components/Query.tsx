import React from "react";
import Loader from "./Loader/Loader";

interface Props {
  isLoaded: boolean;
  isError: boolean;
  children: React.ReactNode;
}

const Query: React.FC<Props> = ({ isError, isLoaded, children }) => {
  if (isError) return <div>ERROR</div>;
  if (!isLoaded) return <Loader />;

  return <div>{children}</div>;
};

export default Query;
