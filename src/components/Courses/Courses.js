import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CourseCard from "../courseCard/CourseCard";
import Sidebar from "../Sidebar/Sidebar";
import { FaBars } from "react-icons/fa";

const Courses = () => {
  const handleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  const [open, setOpen] = useState(true);
  const courses = useLoaderData();
  return (
    <div className="grid relative grid-cols-1 lg:grid-cols-4">
      <FaBars
        className="m-4 justify-self-end lg:hidden items-end"
        onClick={handleOpen}
      >
        open
      </FaBars>
      <div
        className={`pt-6 lg:px-8 absolute mx-auto h-screen lg:h-auto lg:static lg:col-span-1 border border-gray-400 rounded-2xl bg-gray-200 ${
          open ? "-top-full -bottom-full" : "+top-full +bottom-full"
        } `}
      >
        <div className="flex flex-col">
          <Link to="/" className="btn w-1/2 mx-auto">
            Home
          </Link>
          <Link to="/Blogs" className="btn w-1/2 mx-auto mt-3 mb-3">
            Blogs
          </Link>
          <Link to="/FAQs" className="btn w-1/2 mx-auto mb-3">
            FAQs
          </Link>
          <div className="flex justify-around">
            <Link to="/Login" className="btn">
              Login
            </Link>
            <Link to="/Register" className="btn">
              Register
            </Link>
          </div>
        </div>
        <p className="font-bold">COURSES</p>
        {courses.map((course) => (
          <Sidebar key={course.id} course={course}></Sidebar>
        ))}
      </div>
      <div className="w-11/12 mx-auto bg-gray-200 py-10 rounded-2xl col-span-3">
        <div className="grid grid-cols-2 gap-5 w-11/12 mx-auto">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
