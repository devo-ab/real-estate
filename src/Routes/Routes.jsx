import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import SingIn from "../Pages/SingIn/SingIn";
import SingUp from "../Pages/SingUp/SingUp";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layouts></Layouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
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
            }
        ],
    },
]);

export default routes;