import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        if(password !== confirmPassword){
            alert("password didn't match")
        }
        else{
            createUser(email, password)
            .then(result =>{
                const user = result.user;
                form.reset();
            })
            .catch(error => console.error(error));
        }
    }

  return (
    <div>
      <div className="hero bg-base-300">
        <div className="m-3 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Full Name</span>
                </label>
                <input
                    type="text"
                    placeholder="Full Name"
                    className="input input-bordered"
                    name="name"
                    required
                />
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoURL</span>
                </label>
                <input
                    type="text"
                    placeholder="PhotoURL"
                    className="input input-bordered"
                    name="photourl"
                />
                </div>
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
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Confirm Password</span>
                </label>
                <input
                    type="password"
                    placeholder="confirm password"
                    className="input input-bordered"
                    required
                    name="confirm"
                />
                <label className="label text-xs">
                    Already have an account?
                    <Link to="/login" className="label-text-alt link link-hover">
                    Login
                    </Link>
                </label>
                </div>
                <div className="form-control">
                <button className="btn btn-outline">Register</button>
                </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
