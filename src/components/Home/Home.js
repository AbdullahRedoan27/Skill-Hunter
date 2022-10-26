import React from 'react';
import img from '../../images/logo.png';

const Home = () => {
    return (
        <div className='grid grid-cols-2 w-11/12 mx-auto bg-gray-200 m-10 p-5 rounded-xl'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-3xl'>Wellcome, Our prestigious visitor.</h1>
                <p>This is a skill sharing platform where educators and learners meet. We are glad to become a way to spread knowledge.</p>
            </div>
            <div>
                <img src={img} alt=''></img>
            </div>
        </div>
    );
};

export default Home;