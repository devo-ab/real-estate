import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const UpdateProfile = () => {
  const { user} = useContext(AuthContext);

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photoURL.value;

    
    
  };

  useEffect(() => {
    document.title = 'Ecomo | Update Profile';
  } ,[]);
  return (
    <div className="mt-10">
      <form onSubmit={handleUpdateProfile} className=" flex flex-col mx-auto space-y-12">
        <h1 className="text-center text-3xl font-bold">Update Your Profile</h1>
        <div className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-300">
          <div className="grid grid-cols-6 gap-4 col-span-full">
            <div className="col-span-full md:col-span-3">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder={user.displayName}
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full md:col-span-3">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder={user.email}
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75 focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <div className="col-span-full md:col-span-3">
              <label htmlFor="photoURL">PhotoURL</label>
              <input
                id="photoURL"
                type="text"
                name="photoURL"
                placeholder={user.photoURL}
                className="w-full py-2 px-4 rounded-md focus:ring focus:ring-opacity-75  focus:dark:ring-violet-600 dark:border-gray-300"
              />
            </div>
            <button type="submit" className="btn btn-ghost col-span-full">
              Update Profile
            </button>
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UpdateProfile;
