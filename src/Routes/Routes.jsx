import { createBrowserRouter } from "react-router-dom";
import Layouts from "../Layouts/Layouts";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
    {
        path:"/",
        element:<Layouts></Layouts>,
        children:[
            {
                path:"/",
                element:<Home></Home>
            }
        ],
    },
]);

export default routes;