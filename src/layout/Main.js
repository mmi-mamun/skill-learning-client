import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;