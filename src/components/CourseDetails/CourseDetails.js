import React from 'react';
import { Link } from 'react-router-dom';
import { FaFilePdf } from "react-icons/fa";

const CourseDetails = ({ course }) => {
    const { title, img, description } = course;
    return (
        <div className="card glass">
            <Link to={`/test/${course.id}`}>
                <button className="btn btn-xs text-orange-600">Save as pdf  <FaFilePdf></FaFilePdf> </button>
            </Link>

            <figure><img src={img} alt="car!" /></figure>

            <div className="card-body">
                <h2 className="card-title justify-center text-secondary">{title}</h2>
                <p className="justify-center  text-justify ">{description}</p>
                <div className="card-actions justify-center">
                    <Link to={`/courses/${course.id}`}><button className="btn btn-primary">SHOW MORE</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;