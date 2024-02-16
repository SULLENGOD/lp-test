import { useEffect, useState } from "react";
import { fetchInputs } from "../services/fetchData";

export const useInputs = () => {
  const [inputs, setInputs] = useState(null);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getInputs = async () => {
      try {
        const res = await fetchInputs();
        setInputs(res.items);
        setIsloading(false);
      } catch (error) {
        setIsloading(false);
        setError(error);
      }
    };
    getInputs();
  }, []);

  return {
    inputs,
    isLoading,
    error
  }
};
