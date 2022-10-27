import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';



const AboutCourse = () => {
    const course = useLoaderData();

    return (

        <div className="flex justify-center px-4 py-5 bg-base-200">
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={course.img} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{course.title}</h1>
                        <p><small>For {course.level}</small></p>
                        <p className="py-6">{course.description}</p>
                        <Link to={`/checkout/${course.id}`}><button className="btn btn-primary">Get Premium Access!</button></Link>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default AboutCourse;