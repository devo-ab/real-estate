import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";


const SingUp = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSingUp = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photo = e.target.photoURL.value;
    const phone = e.target.phoneNumber.value;

    if (password.length < 6) {
      return toast("Password must be 6 characters");
    } else if (!/[A-Z]/.test(password)) {
      return toast("Password must be 1 uppercase characters");
    } else if (!/[a-z]/.test(password)) {
      return toast("Password must be 1 lowercase characters");
    }

    // create user
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
          phoneNumber: phone,
        });
        toast("User create successfully");
        e.target.reset();
      })
      .catch((error) => {
        console.log(error.message);
      });

    // update profile data
  };

  return (
    <div>
      <div>
        <section className="max-w-5xl mx-auto mt-10 p-6 dark:bg-gray-200 rounded-lg dark:text-gray-900">
          <form onSubmit={handleSingUp} className=" flex flex-col mx-auto space-y-12">
            <h1 className="text-center text-3xl font-bold">Sign Up</h1>
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-300">
              <div className="grid grid-cols-6 gap-4 col-span-full">
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full md:col-span-3">
                  <label htmlFor="photoURL">PhotoURL</label>
                  <input
                    id="photoURL"
                    type="text"
                    name="photoURL"
                    placeholder="Enter your PhotoURL"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your Email"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3 relative">
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    required
                    placeholder="Enter your password"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />

                  <span className="absolute top-1/3 right-2"
                  onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye />}</span>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="userName">User Name</label>
                  <input
                    id="userName"
                    type="text"
                    name="userName"
                    placeholder="Enter your user name"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    id="phoneNumber"
                    type="text"
                    name="phoneNumber"
                    placeholder="Enter your phone number"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="city">City</label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    placeholder="Enter your city"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="state">State</label>
                  <input
                    id="state"
                    name="state"
                    type="text"
                    placeholder="Enter your state"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
                <div className="col-span-full sm:col-span-2">
                  <label htmlFor="zip">ZIP</label>
                  <input
                    id="zip"
                    name="zip"
                    type="text"
                    placeholder="Enter your ZIP code"
                    className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
                  />
                </div>
              </div>
            </fieldset>
            <button
              type="submit"
              className="btn btn-ghost text-lg font-medium text-white bg-violet-600 hover:text-black"
            >
              Sign Up
            </button>
          </form>
          <p className="mt-2">
            Already have an account? Please{" "}
            <Link className="font-medium text-violet-600 underline" to="/signin">
              Sign In
            </Link>
          </p>
        </section>
      </div>
      <ToastContainer />
    </div>
  );
};

export default SingUp;
