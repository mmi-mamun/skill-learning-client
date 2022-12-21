import React from 'react';
import Lottie from "lottie-react";
import teach from '../../../src/images/teaching.json';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 px-20 py-12">
            <div className='w-full lg:w-2/3 mt-8 mb-2'><Lottie animationData={teach} loop={true}></Lottie></div>
            <div className='flex flex-col justify-center'>
                <p className='text-2xl font-semibold mb-3 text-orange-400'>Welcome to our Website</p>
                <h2 className='text-4xl font-medium text-black mb-3'>We are teaching about</h2>
                <h2 className='text-2xl font-medium text-white h-24'><span>
                    <Typewriter
                        words={['Android App Development 💻', 'Python with Django 💻', 'JavaScript A - Z 💻', 'MERN Stack Development 💻', 'PHP with Laravel 💻', 'Web Development Basic 💻']}
                        loop={0}
                        cursor
                        cursorStyle='|'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span></h2>

            </div>

        </div>
    );
};

export default Banner;