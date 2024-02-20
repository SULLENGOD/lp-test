import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCharacters } from "../features/Characters";

export const useCharacter = ( page ) => {
  const dispatch = useDispatch();
  const {data: characters, isLoading, error} = useSelector(state => state.characters)

  useEffect(() => {
    dispatch(fetchCharacters(page))
  }, [dispatch, page]);

  return {
    characters,
    isLoading,
    error,
  };
};
