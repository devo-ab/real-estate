import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";

const HomeDataCard = ({ data }) => {
  const { id, estate_title, segment_name, price, status, location, image } = data;

  return (
    <div className="flex flex-col md:flex-row gap-10 border rounded-md border-violet-600 p-5">
      <div className="w-72">
        <img className="rounded-md" src={image} alt="" />
      </div>

      <div>
        <h3 className="text-xl font-medium">{estate_title}</h3>
        <p className="font-medium mt-1">Segment : {segment_name}</p>
        <p className="mt-1">Price : {price}</p>
        <p className="font-bold mt-1">Status : {status}</p>
        <p className="flex items-center gap-2 mt-1"><CiLocationOn />{location}</p>
      <Link to={`/home-details/${id}`} className="btn btn-ghost mt-1 text-white font-semibold bg-violet-600">
        <button>View Property</button>
      </Link>
      </div>
    </div>
  );
};

HomeDataCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default HomeDataCard;
