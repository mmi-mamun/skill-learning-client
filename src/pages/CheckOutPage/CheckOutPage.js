import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheckOutPage = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className="mockup-window border bg-base-300">
            <div className="flex justify-center px-4 py-16 bg-base-200">
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={course.img} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold">{course.title}</h1>

                            <button className="btn btn-primary">Get Premium Access</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CheckOutPage;