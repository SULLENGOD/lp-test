import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CharCard = ({ char }) => {
  return (
    <>
      <Link to={`/${char.id}`}>
        <div className="flex flex-col">
          <img src={char.image} alt={char.name} className="size-40 m-auto" />
          <div className="m-auto">
            <h1 className="text-2xl">{char.name}</h1>
          </div>
        </div>
      </Link>
    </>
  );
};

export default CharCard;
