import { useEffect, useState } from "react";
import { fetchChar } from "../services/fetchData";

export const useChar = (id) => {
  const [char, setChar] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getChar = async () => {
      try {
        const res = await fetchChar(id);
        setChar(res);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err);
      }
    };
    getChar();
  }, [id]);

  return {
    char,
    isLoading,
    error
  }
};
