import { useParams } from "react-router-dom";
import { useChar } from "../hooks/useChar";

const DetailPage = () => {
  const { id } = useParams("id");
  const { char, error, isLoading } = useChar(id);

  console.log(char);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error.message}</h1>;

  return (
    <>
      <div>
        <h1>{char.name}</h1>
      </div>
    </>
  );
};

export default DetailPage;
