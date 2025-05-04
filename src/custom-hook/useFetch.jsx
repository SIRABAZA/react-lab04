import axios from "axios";
import { useEffect, useState } from "react";

export function useFetch(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(url);
      setData({ ...response.data });
    } catch (error) {
      setIsError(error);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  return { data, isLoading, isError };
}
