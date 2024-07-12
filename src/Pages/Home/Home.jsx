import Header from "../Share/Header";
import Navbar from "../Share/Navbar";
import LeftSideBar from "./LeftSideBar";
import MainNews from "./MainNews";
import RightSideBar from "./RightSideBar";
import Sliding from "./Sliding";


const Home = () => {
    return (
        <div className="mx-auto">
            <Header></Header>
            <Sliding></Sliding>
            <Navbar></Navbar>
            <div className="grid grid-cols-4">
                <div><LeftSideBar></LeftSideBar></div>
                <div className="col-span-2"> <MainNews></MainNews></div>
                <div> <RightSideBar></RightSideBar></div>   
            </div>
            
        </div>
    );
};

export default Home;