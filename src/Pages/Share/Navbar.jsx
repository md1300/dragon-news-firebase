import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const {user,logOut}=useContext(AuthContext)
  const navlink =<>
  <li><NavLink to="/">Home</NavLink></li>
  <li><NavLink to="/about">About</NavLink></li>
  <li><NavLink to="career">Career</NavLink></li>
  
  </>

  const handleLogOut=()=>{
          logOut()
  }
  console.log("he is running user",user)
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
      {navlink}
      </ul>
    </div>
    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlink}
    </ul>
  </div>
  <div className="navbar-end flex gap-3">
    {
      user ? <><div className="flex gap-3 items-center"><p>{user.email}</p> <button onClick={handleLogOut} className="btn btn-ghost">Log out</button> </div></>:<>
        <div className="avatar">
     <div className="w-14 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
     </div>
     </div>
     <div>
       <Link to="/login"><button className="btn btn-ghost">Log in</button></Link>
   
     </div>
      </>
    }
   
 
  </div>
</div>
        </div>
    );
};

export default Navbar;