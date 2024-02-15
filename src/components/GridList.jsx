import CharCard from "./CharCard";
import { useCharacter } from "../hooks/useCharacter";

const GridList = () => {
  const { characters, isLoading, error } = useCharacter();

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className="grid grid-cols-3 gap-3">
        {characters.results.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default GridList;
