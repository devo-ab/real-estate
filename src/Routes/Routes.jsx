import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";
import HomeDetails from "../Pages/HomeDetails/HomeDetails";
import UserProfile from "../Pages/UserProfile/UserProfile";
import ProfileUpdate from "../Pages/ProfileUpdate/ProfileUpdate";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layouts></Layouts>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:() => fetch('/data.json')
            },
            {
                path:"/about",
                element:<About></About>
            },
            {
                path:"/signin",
                element:<SingIn></SingIn>
            },
            {
                path:"/signup",
                element:<SingUp></SingUp>
            },
            {
                path:"/home-details/:id",
                element:<PrivateRoutes><HomeDetails></HomeDetails></PrivateRoutes>,
                loader:() => fetch('/data.json')
            },
            {
                path:"/update-profile",
                element:<PrivateRoutes><ProfileUpdate></ProfileUpdate></PrivateRoutes>
            },
            {
                path:"/user-profile",
                element:<PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            }
        ],
    },
]);

export default routes;