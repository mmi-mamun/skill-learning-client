import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {
    const [courses, setCourses] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/courses')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <h2 className="card-title">Total courses :: {courses.length}</h2>
            <div>
                {
                    courses.map(course => <li key={course.id} course={course}>
                        <Link to={`/courses/${course.id}`}>{course.title}</Link>
                    </li>)
                }
            </div>

        </div>
    );
};

export default Courses;