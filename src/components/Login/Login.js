import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Login = () => {

    const {login} = useContext(AuthContext);

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(e => console.error(e));
    }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body" >
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                    required
                    name="email"
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                    name="password"
                />
                <label className="label text-xs">
                    Don't have an account?
                    <Link to="/Register" className="label-text-alt link link-hover">
                    Register
                    </Link>
                </label>
                <label className="label">
                    <Link to="#" className="label-text-alt link link-hover">
                    Forgot password?
                    </Link>
                </label>
                </div>
                <div className="form-control">
                <button className="btn btn-outline">Login</button>
                </div>
                <div className="flex justify-between">
                <hr className="w-2/5 m-3"></hr>
                <span className="m-0">or</span>
                <hr className="w-2/5 m-3"></hr>
                </div>
                <div className="form-control ">
                <button className="btn btn-sm btn-outline">Login</button>
                </div>
                <div className="form-control">
                <button className="btn btn-sm btn-outline">Login with Github</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
