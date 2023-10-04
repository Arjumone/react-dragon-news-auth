import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";


const Login = () => {
    const {signIn} = useContext(AuthContext);
    const location = useLocation()
    const navigate = useNavigate()
    const handleLogin =(e)=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget) 
        const email = form.get("email")
        const password = form.get("password")
        console.log(email,password);

       signIn(email,password)
        .then(result=>{
            console.log(result.user);
            
            // navigate after login
            navigate(location?.state? location.state:"/")
        })
        .catch(error=>{
            console.log(error);
        })
    }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <h2 className=" text-3xl my-4 text-center">Please Login here</h2>

        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input name="email"
              type="email"
              placeholder="Email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input name="password"
              type="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className=" text-center my-3">Do not have an account?<Link to='/register' className=" text-blue-700 font-semibold">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
