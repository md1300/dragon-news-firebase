import { useEffect, useState } from "react";


const LeftSideBar = () => {
    const [categories,setCategory]=useState([])

    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategory(data))
        .catch(error=>console.error(error))

    },[])
    
    return (
        <div>
            <h1 className="mb-4">all categories</h1>
            {
                categories.map(category=><div className="mb-4" key={category.id}>
                    <h3>{category.name}</h3>
                </div>)
            }
        </div>
    );
};

export default LeftSideBar;