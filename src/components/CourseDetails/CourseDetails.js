import React from "react";
import { FaSpaceShuttle, FaStarHalf, FaStar, FaFileDownload } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const courseData = useLoaderData();
  const { img, courseName, rating, price, details, id } = courseData;
  const bulletPonits = details.advantages;

  return (
    <div>
        <div className="lg:flex lg:justify-around flex justify-between lg:mb-4 lg:mt-4 mb-4 mt-4 p-4 bg-gray-200">
            <div className="w-3/4">
                <h2 className="lg:text-xl">In this page, you will know details about our {courseName}. If needed, you can also download this page in PDF format. To Download this page, you will need to click on the download button in the right corner.</h2>
            </div>
            <div className="lg:mt-8 mt-2 flex flex-col items-center">
                <Link to={`/pdf/${id}`}><FaFileDownload className="h-10 w-10"></FaFileDownload></Link>
                <small className="text-center">Click to Download PDF</small>
            </div>
        </div>



      <div>
        <div className="lg:w-4/6 mx-auto text-left bg-gray-200 p-5 rounded-2xl">
          <img className="mx-auto mb-4 w-1/2 rounded-xl" src={img} alt=""></img>
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold mb-4">{courseName}</h1>
            {rating == 4.5 ? (
              <p className="lg:flex hidden align-middle">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStarHalf />
              </p>
            ) : (
              <p className="lg:flex hidden align-middle">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </p>
            )}
          </div>
          <p className="mb-3">{details.description}</p>
          {bulletPonits.map((p) => (
            <div>
              <p key={id} className="flex items-center ml-4 lg:ml-2 mb-1">
                <FaSpaceShuttle className="hidden lg:flex" />
                {p}
              </p>
            </div>
          ))}
          <h2 className="text-2xl font-bold mt-3">
            Price: <b>{price}$</b>
          </h2>
          <Link to={`/checkout/${id}`} className="btn btn-md mt-3">
            CheckOut
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
