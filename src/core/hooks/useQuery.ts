import React from "react";

interface UseQueryReturnType<Data> {
  data: Data | null;
  isLoaded: boolean;
  isError: boolean;
  refreshData: () => void;
}

interface UseQueryParams<Data> {
  fetcher: () => Promise<Data>;
  deps?: unknown[];
}

const useQuery = <Data>({
  fetcher,
  deps,
}: UseQueryParams<Data>): UseQueryReturnType<Data> => {
  const [data, setData] = React.useState<Data | null>(null);
  const [error, setError] = React.useState<boolean>(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const loadData = () => {
    setIsLoaded(false);
    fetcher()
      .then((data) => setData(data))
      .catch(() => setError(true))
      .finally(() => setIsLoaded(true));
  };

  React.useEffect(() => {
    loadData();
  }, deps || []);

  return { data, isLoaded, isError: error, refreshData: loadData };
};

export default useQuery;
