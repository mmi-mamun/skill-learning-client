import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Courses from '../components/Courses/Courses';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>
            {/* <Outlet></Outlet> */}


            <div class="container grid grid-cols-4">

                <div className="col-span-1">
                    <CourseList></CourseList>
                </div>

                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>

            </div>

        </div>
    );
};

export default Main;