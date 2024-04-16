import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlineAreaChart } from "react-icons/ai";

const HomeDetails = () => {
  const homeData = useLoaderData();
  console.log(homeData);
  const { id } = useParams();
  const homeIdInt = parseInt(id);
  const home = homeData.find((home) => home.id === homeIdInt);

  const {
    estate_title,
    segment_name,
    description,
    price,
    area,
    location,
    facilities,
    image,
  } = home;

  return (
    <div className="mt-10 max-w-3xl mx-auto rounded-md border border-violet-600 p-5">
      <div>
        <img className="w-[600px] mx-auto rounded-md" src={image} alt="" />
      </div>
      <div className="md:px-16 lg:px-16">
        <h1 className="mt-2 text-xl font-medium">{estate_title}</h1>
        <p>Segment : {segment_name}</p>
        <p>Details : {description}</p>
        <div className="flex flex-col md:flex-row md:gap-3">
          <p>Price : {price}</p>
          <p className="flex gap-1 items-center"><AiOutlineAreaChart />Area : {area}</p>
          <p className="flex gap-1 items-center"><CiLocationOn />{location}</p>
        </div>
        <div>Facilities : {facilities[0]}, {facilities[1]}, {facilities[2]}</div>
      </div>
    </div>
  );
};

export default HomeDetails;
