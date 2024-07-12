import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Register from "../Register/Register";
import Login from "../Pages/Login/Login";


const Routers = createBrowserRouter([
    {
       path:"/",
       element:<Home></Home>,
      
    },
    {
        path:"/news/:id",
        loader:()=>fetch('/news.json'),
        element:<Details></Details>
    },
    {
        path:"/register",
        element:<Register></Register>
    },
    {
        path:"/login",
        element:<Login></Login>
    }
])

export default Routers;