import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";


const Routers = createBrowserRouter([
    {
       path:"/",
       element:<Home></Home>
    },
])

export default Routers;