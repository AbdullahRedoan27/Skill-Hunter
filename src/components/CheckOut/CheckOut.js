import React from 'react';
import { useLoaderData } from 'react-router-dom';
import {BiFastForward} from 'react-icons/bi';

const CheckOut = () => {
    const courseData = useLoaderData();
    const{img, courseName, price, details, id} = courseData;
    const bulletPonits = details.advantages;
    return (
        <div className='w-11/12 mx-auto p-5'>
            <img className='w-1/3 rounded-lg' src={img} alt=''></img>
            <div>
                <h2 className='text-2xl text-left font-bold'>{courseName}</h2>
                {
                    bulletPonits.map(p => 
                        <div>
                            <p key={id}  className='flex items-center mb-1 ml-3'><BiFastForward/>{p}</p>
                        </div>
                    )
                }
                <h2 className='text-xl mt-3 text-left font-bold'>Price: {price}$</h2>
                <button className='btn flex mt-3'>Proceed to pay</button>
            </div>
        </div>
    );
};

export default CheckOut;