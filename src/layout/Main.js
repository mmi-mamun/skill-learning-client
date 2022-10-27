import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div class="container grid grid-cols-4">

                <div className="col-span-1">
                    <CourseList></CourseList>
                </div>

                <div className="col-span-3">
                    <Outlet></Outlet>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;