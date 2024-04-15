import { useLoaderData, useParams } from "react-router-dom";

const HomeDetails = () => {

  const homeData = useLoaderData();
  const { id } = useParams();

  return (
    <div>
      <h1>update coming</h1>
    </div>
  );
};

export default HomeDetails;
