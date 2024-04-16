import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="md:w-1/2 mx-auto mt-10">
      <div className="flex items-center gap-4">
        <p>Name:</p>
        <p className="border border-violet-600 px-3 py-2 rounded-md w-full">{user.displayName}</p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <p>Email:</p>
        <p className="border border-violet-600 px-3 py-2 rounded-md w-full">{user.email}</p>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <p>PhotoURL:</p>
        <p className="border border-violet-600 px-3 py-2 rounded-md w-full">{user.photoURL}</p>
      </div>
    </div>
  );
};

export default UserProfile;
