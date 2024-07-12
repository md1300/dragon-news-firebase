import { Link, useLoaderData, useParams } from "react-router-dom";


const Details = () => {

    const {id}=useParams()
    const loadingDetails=useLoaderData()
    const newsDetails=loadingDetails.find(newsDetail=>newsDetail._id===id)

   
    
    
    return (
        <div>
        
          <h3 className="text-3xl mb-4">{newsDetails.title}</h3>
          <div className="mb-3">
          <img  src={newsDetails.image_url} alt="" />
          </div>
         
          <p>{newsDetails.details} </p>
          <Link to="/"><button className="btn btn-ghost"> back me</button></Link>
        </div>
    );
};

export default Details;