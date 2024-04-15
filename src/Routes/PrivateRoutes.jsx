import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({children}) => {

    const {user} = useContext(AuthContext);

    if(user){
        return children;
    }

    return <Navigate to="/signin"></Navigate>;
};

export default PrivateRoutes;