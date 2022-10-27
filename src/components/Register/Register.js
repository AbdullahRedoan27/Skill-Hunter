import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import toast from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState();

    const {createUser, updateUserProfile} = useContext(AuthContext);

    const handleSubmit =(event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;

        if(password.length < 6){
            toast("password should contain more than 6 characters")
            return;
        }

        if(password !== confirmPassword){
            toast("password didn't match")
            return;
        }
        else{
            createUser(email, password)
            .then(result =>{
                const user = result.user;
                setError('');
                form.reset();
                toast('Succesfully Registered')
                handleProfileUpdate(name, photo)
            })
            .catch(error => {
                console.error(error)
                toast(error.message);
            });
        }
    }

    const handleProfileUpdate = (name, photo) =>{
        const profile = {
            displayName: name,
            photoURL: photo
        }
        updateUserProfile(profile)
        .then(()=>{ })
        .catch(e=>console.log(e));
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
