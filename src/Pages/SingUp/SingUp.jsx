import { Link } from "react-router-dom";

const SingUp = () => {
  return (
    <section className="max-w-5xl mx-auto mt-10 p-6 dark:bg-gray-200 rounded-lg dark:text-gray-900">
      <form  className=" flex flex-col mx-auto space-y-12">
        <h1 className="text-center">Sign Up</h1>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-300">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <div className="col-span-full md:col-span-3">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Enter your name"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full md:col-span-3">
              <label htmlFor="photoURL" className="text-sm">
                PhotoURL
              </label>
              <input
                id="photourl"
                type="text"
                placeholder="Enter your PhotoURL"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full">
              <label htmlFor="address" className="text-sm">
                Address
              </label>
              <input
                id="address"
                type="text"
                placeholder="Enter your address"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm">
                City
              </label>
              <input
                id="city"
                type="text"
                placeholder="Enter your city"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="state" className="text-sm">
                State
              </label>
              <input
                id="state"
                type="text"
                placeholder="Enter your state"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="zip" className="text-sm">
                ZIP
              </label>
              <input
                id="zip"
                type="text"
                placeholder="Enter your ZIP code"
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
          </div>
        </fieldset>
        
      </form>
      <p className="mt-2">Already have an account? Please <Link className="font-medium text-violet-600 underline" to="/signin">Sign In</Link></p>
    </section>
  );
};

export default SingUp;
