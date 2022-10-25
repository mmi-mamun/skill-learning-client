import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div class="container mx-auto">
                <Outlet></Outlet>
                <Courses></Courses>
            </div>

        </div>
    );
};

export default Main;