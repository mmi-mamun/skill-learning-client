import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const CourseList = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://skill-learning-server-site.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='my-12 mx-5'>
            {
                courses.map(course => <li className='text-start ml-5 my-3 font-bold'><Link to={`/courses/${course.id}`}>{course.title}</Link></li>)
            }

        </div>
    );
};

export default CourseList;