import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Login = () => {
    const {login}=useContext(AuthContext)
const handleFormLogIn=e=>{
    e.preventDefault()
    const email=e.target.email.value;
    const password=e.target.password.value;
    const name=e.target.name.value;
    login(email,password)
    .then(result=>{
        // console.log(result.user)
    })
    .catch(error=>{
        console.error(error)
    })
    console.log(email,password,name)
}
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Log in</h1>
            
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleFormLogIn} className="card-body">
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
                <button className="btn btn-primary">Log in</button>
              </div>
            </form>
            <div className="flex items-center gap-1 p-3">
                <p >if you do not have already account ?</p>
                <Link to="/register"> <span className="btn btn-link">register</span></Link> 
            </div>
          </div>
        </div>
      </div>
        
    );
};

export default Login;