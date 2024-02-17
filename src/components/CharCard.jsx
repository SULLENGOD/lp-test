import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const CharCard = ({ char }) => {
  return (
    <>
      <div className="flex flex-col">
        <Link to={`/${char.id}`}>
          <img
            src={char.image}
            alt={char.name}
            className="size-40 m-auto rounded-full hover:scale-125 hover:shadow-lg ease-in-out duration-200"
          />
        </Link>
        <div className="m-auto p-11">
          <h1 className="text-2xl">{char.name}</h1>
        </div>
      </div>
    </>
  );
};

export default CharCard;
