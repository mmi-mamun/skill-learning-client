import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Courses from '../Courses/Courses';

const CourseDetails = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-2 mt-5'>
            {
                courses.map(course => <Courses course={course} key={course.id} ></Courses>)
            }
        </div>

    );
};

export default CourseDetails;