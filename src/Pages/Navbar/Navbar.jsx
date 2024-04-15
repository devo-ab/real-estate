import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)

  const navLinks = (
    <div className="lg:space-x-5 space-y-2 md:space-y-0 flex flex-col lg:flex-row items-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "text-[#706F6F] text-lg font-medium border border-[#706F6F] rounded-md px-3 py-1 text-center"
            : "text-[#131313CC] text-center text-lg"
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive
            ? "text-[#706F6F] text-lg font-medium border border-[#706F6F] rounded-md px-3 py-1 text-center"
            : "text-[#131313CC] text-center text-lg"
        }
      >
        About
      </NavLink>
    </div>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-3xl text-[#131313] font-bold">Ecomo</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      <div className="navbar-end gap-2">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            {
              user ? <img src={user.photoURL} alt="" /> : <img src="https://i.ibb.co/0J3qGzk/user.png" alt="" />
            }
          </div>
        </div>

        {
          user ? <button onClick={logOut} className="bg-violet-600 px-8 text-white hover:text-black text-xl font-semibold btn">Sign Out</button> :
           <Link to="/signin">
          <button className="bg-violet-600 px-8 text-white hover:text-black text-xl font-semibold btn">Sign In</button>
        </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
