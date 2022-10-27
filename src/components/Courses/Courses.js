import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';

const Courses = () => {

    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='grid grid-cols-3 gap-2 mt-5'>
            {
                courses.map(course => <CourseDetails course={course} key={course.id} ></CourseDetails>)
            }
        </div>

    );
};

export default Courses;