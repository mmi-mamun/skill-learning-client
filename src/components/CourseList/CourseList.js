import React from 'react';
import { Link } from 'react-router-dom';

const CourseList = ({ course }) => {
    const { id, title } = course;
    return (
        <div className='my-5'>
            <Link to={`/courses/${id}`}>{title}</Link>
        </div>
    );
};

export default CourseList;