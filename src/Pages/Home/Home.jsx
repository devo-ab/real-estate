import "animate.css";
import { useLoaderData } from "react-router-dom";
import HomeDataCard from "../HomeDataCard/HomeDataCard";
import "animate.css";

const Home = () => {
  const homeData = useLoaderData();
  console.log(homeData);

  return (
    <div>
      <div className="bg-home-banner bg-center mt-10 rounded-lg py-10 lg:py-48 lg:px-40">
        <h1 className="animate__animated animate__jackInTheBox text-5xl text-center font-bold text-white">
          Welcome to Ecomo
        </h1>

        <h1 className="text-white text-center font-bold text-2xl lg:text-5xl mt-4">
          Experience Luxury Living at Our Rental Properties.
        </h1>

        <p className="text-white text-center lg:text-xl mt-4">
          At Pagupone, we offer "Effortless Property Rental Solutions" for all your housing needs.
          Our mission is to make the rental process as easy and stress-free as possible for our
          clients.We have a wide range of properties available for rent, including houses,
          apartments and rooms, in various locations to suit your lifestyle and budget.
        </p>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-center animate__animated animate__shakeX">
          Estates
        </h1>
        <div className="mt-10 grid grid-cols-2 gap-5">
          {homeData.map((data) => (
            <HomeDataCard key={data.id} data={data}></HomeDataCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
