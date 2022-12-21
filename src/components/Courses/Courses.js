import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('https://skill-learning-server-site.vercel.app/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='grid lg:grid-cols-2  md:grid-cols-1 sm:grid-cols-1 gap-5 mt-5'>
            {
                courses.map(course => <CourseDetails course={course} key={course.id} ></CourseDetails>)
            }
        </div>

    );
};

export default Courses;