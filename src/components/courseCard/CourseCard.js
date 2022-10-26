import React from 'react';
import { FaStar, FaStarHalf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const courseCard = (props) => {
    const {img, courseName, rating, price, description, id} = props.course;
    return (
        <div  className='border-white p-5 rounded-xl border-2'>
            <img className='rounded' src={img} alt=''></img>
            <div>
                <h3 className='lg:text-2xl font-semibold'>{courseName}</h3>  
                <p>{description}</p> 
                <div className='flex justify-between w-11/12 mx-auto'>
                    <h4 className='text-xl'>Price:<span className='font-semibold'> {price}$</span></h4>
                    {rating == 4.5?
                        <p className='lg:flex hidden align-middle'><FaStar/><FaStar/><FaStar/><FaStar/><FaStarHalf/>{rating}</p>
                        :
                        <p className='lg:flex hidden align-middle'><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>{rating}</p>   
                    }
                </div> 
                <Link className='btn lg:btn-wide mt-2' to={`/Courses/${id}`}>Details</Link>
            </div>            
        </div>
    );
};

export default courseCard;