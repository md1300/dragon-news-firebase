
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";



const Register = () => {
    
    const {createUser}=useContext(AuthContext)

    
    
    const handleFormRegister=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value;
        const name=e.target.name.value;
        createUser(email,password)
        .then(result=>console.log(result.user))
        .catch(error=>console.log(error.message))
        console.log(email,password,name)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register here</h1>
      
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleFormRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your name</span>

          </label>
          <input type="text" placeholder="your name" className="input input-bordered" name="name" required />
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" name="email" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" name="password" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
      <div>
        <p className="p-3">if you have already account ? <Link to="/login"> <span className="btn btn-link">login</span></Link></p>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;