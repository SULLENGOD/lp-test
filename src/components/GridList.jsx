import CharCard from "./CharCard";
import { useEffect, useState } from "react";
import { useCharacter } from "../hooks/useCharacter";
import Spiner from '../layout/Spiner'

const GridList = () => {
  const [page, setPage] = useState(1);
  const { characters, isLoading, error } = useCharacter(page);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
          document.documentElement.offsetHeight ||
        isLoading
      )
        return;
      setPage(page + 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isLoading, page]);

  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col gap-3 m-5 p-5 ">
        {characters.map((char, index) => (
          <CharCard key={`${char.id}-${index}`} char={char} />
        ))}
        {
          isLoading ? (
            <Spiner />
          ) : (
            <></>
          )
        }
      </div>
    </>
  );
};

export default GridList;
