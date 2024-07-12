import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const MainNews = () => {
    const [news,setNews]=useState([])
    useEffect(()=>{
        fetch('/news.json')
        .then(res=>res.json())
        .then(data=>setNews(data))
        .catch(error=>console.error(error))
    },[])
         
    return (
        <div>
            <h1>Dragon news home</h1>
            {/* <h2>news amount {news.length}</h2> */}
            {
            news.map(anews=><div key={anews._id}>
            <h1>{anews.title}</h1>
            <img src={anews.image_url} alt="" />
            {
              anews.details.length>150 ? <p>{anews.details.slice(0,150)} <Link to={`/news/${anews._id}`}>see more.....</Link></p> : <p>{anews.details} </p> 
            }
           </div>
             
            
            )
            
            }
           
        </div>
    );
};

export default MainNews;