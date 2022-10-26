import React from 'react';

const Courses = ({ course }) => {
    const { title, img, description } = course;
    return (
        <div className="card glass">
            <figure><img src={img} alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{title}</h2>
                <p className="justify-center  text-justify ">{description}</p>
                <div className="card-actions justify-center">
                    <button className="btn btn-primary">Learn now!</button>
                </div>
            </div>
        </div>
    );
};

export default Courses;