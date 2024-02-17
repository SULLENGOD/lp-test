import { useParams } from "react-router-dom";
import { useChar } from "../hooks/useChar";
import Spiner from "../layout/Spiner";

const DetailPage = () => {
  const { id } = useParams("id");
  const { char, error, isLoading } = useChar(id);

  if (isLoading) return <div className="flex justify-center"><Spiner /></div>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <div className="flex flex-col text-center max-w-96 m-auto p-5">
        <div>
          <div>
            <img src={char.image} alt={char.name} className="m-auto rounded-full" />
          </div>
          <div className="p-5">
            <h1 className="p-5 text-3xl">{char.name}</h1>
            <h2>{`Status: ${char.status}`}</h2>
            <h2>{`Species: ${char.species}`}</h2>
            <h2>{`Location: ${char.location.name}`}</h2>
          </div>
          <a href={char.url} className="m-5">{char.url}</a>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
