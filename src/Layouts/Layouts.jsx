import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Layouts = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Layouts;
