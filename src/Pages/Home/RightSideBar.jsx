import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";



const RightSideBar = () => {
   const {LogInWithGoogle}=useContext(AuthContext)

   const handleGoogleLogIn=()=>{
    LogInWithGoogle()
    .then(result=>{
        console.log(result.user)
    })
    .catch(error=>console.log(error.message))
   }
   
    return (
        <div>
            <h1>logIn With</h1>
            <div className="text-xl border p-2">
                <button onClick={handleGoogleLogIn} >Login With Google</button>
            </div>
            <div className="text-xl border p-2">
                <h3>Login With Github</h3>
            </div>
        </div>
    );
};

export default RightSideBar;