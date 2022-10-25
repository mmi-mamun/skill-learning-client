import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AboutCourse = () => {
    const course = useLoaderData();
    console.log(course)
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={course.img} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <button className="btn glass">Save as pdf</button>
                    <h1 className="text-5xl font-bold">{course.title}</h1>
                    <p className="py-6">{course.description}</p>
                    <button className="btn btn-primary">Get Premium Access</button>
                </div>
            </div>
        </div>
    );
};

export default AboutCourse;