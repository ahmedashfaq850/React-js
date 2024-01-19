import { useEffect, useState } from "react";

const UseGetData = () => {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const baseUrl = "https://dummyjson.com/products";

  const getData = async (url: string) => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const fetchedData = await response.json();
      setData(fetchedData.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getData(baseUrl);
  }, [baseUrl]);
  return { data, loading, error };
};

export default UseGetData;
