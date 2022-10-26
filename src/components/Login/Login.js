import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";

const googleProvider = new GoogleAuthProvider();

const githubProvider = new GithubAuthProvider();

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [error, setError] = useState(null);

    const from = location?.state?.from.pathname || '/'

    const { login, googleLogin, githubLogin } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        navigate(from, {replace:true})
        setError('');
        alert("successfully logged in");
      })
      .catch((e) => {
        console.log(e);
        setError(e.message);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        navigate('/courses')
      })
      .catch((e) => console.error(e));
  };

  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        navigate('/courses')
      })
      .catch((e) => console.error(e));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
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
                  <Link
                    to="/Register"
                    className="label-text-alt link link-hover"
                  >
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
                <Link
                  className="btn btn-sm btn-outline"
                  onClick={handleGoogleLogin}
                >
                  Login with google
                </Link>
              </div>
              <div className="form-control">
                <Link
                  className="btn btn-sm btn-outline mt-2"
                  onClick={handleGithubLogin}
                >
                  Login with Github
                </Link>
              </div>
              <p className="text-red-600 mt-3">{error}</p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
