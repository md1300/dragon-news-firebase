import Header from "../Share/Header";
import Navbar from "../Share/Navbar";
import Sliding from "./Sliding";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <Sliding></Sliding>
            <Navbar></Navbar>
            <h3>this is home page</h3>
        </div>
    );
};

export default Home;