import React, { useContext } from "react";
import {FaUser} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/UserContext";
import img from '../../images/logo.png'

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);

  return (
    <div className="navbar bg-gray-300 rounded-b-2xl">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/Courses">Courses</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/Blogs" className="justify-between">
                Blogs
              </Link>
            </li>
            <li>
              <Link to="/FAQs">FAQs</Link>
            </li>
          </ul>
        </div>
        <img className="w-14 ml-2 hidden lg:block" src={img} alt=''></img>
        <Link to="" className="btn btn-ghost normal-case lg:text-2xl text-xl">
          Skill Hunter
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0 flex justify-center align-middle">
          <li>
            <Link to="/Courses">Courses</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/Blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/FAQs">FAQs</Link>
          </li>
          <li>
            <input type="checkbox" className="m-4 toggle toggle-sm" />
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user?.uid?
            <>
            <div className="tooltip tooltip-left" data-tip={user?.displayName}>
            {user?.photoURL?
              <img  className="tooltip lg:w-10 w-8 rounded-full border border-gray-200" src={user?.photoURL} alt=""></img>
              :
              <div className="tooltip tooltip-bottom tooltip-info" data-tip={`(user image unavailable)`}>
                <FaUser></FaUser>
              </div>
            }
            </div>
            <Link onClick={logOut} className="btn btn-sm mx-4">Log Out</Link>
            </>
            :
            <Link to="/login" className="btn">Log In</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
