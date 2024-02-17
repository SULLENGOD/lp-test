import CharCard from "./CharCard";
import { useCharacter } from "../hooks/useCharacter";
import Spiner from '../layout/Spiner'

const GridList = () => {
  const { characters, isLoading, error } = useCharacter();

  if (isLoading) return <div><Spiner /></div>;
  if (error) return <h1>{error}</h1>;

  return (
    <>
      <div className="lg:grid lg:grid-cols-3 md:flex md:flex-col gap-3 m-5 p-5 ">
        {characters.results.map((char) => (
          <CharCard key={char.id} char={char} />
        ))}
      </div>
    </>
  );
};

export default GridList;
