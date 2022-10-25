import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import CourseDetails from '../CourseDetails/CourseDetails';
import CourseList from '../CourseList/CourseList';
import './Courses.css'

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className='mx-5'>
            <h2 className="card-title">Total courses :: {courses.length}</h2>
            <div className="grid-course">
                <div className="">
                    {
                        courses.map(course => <CourseList key={course.id} course={course}>

                        </CourseList>)
                    }

                </div>
                <div className="grid-css">
                    {
                        courses.map(course => <CourseDetails key={course.id} course={course}>

                        </CourseDetails>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Courses;