import React from 'react';
import { Outlet } from 'react-router-dom';
import CourseList from '../components/CourseList/CourseList';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const Main = () => {
    return (
        <div>
            <Header></Header>

            <div class="container mx-auto grid grid-cols-4">

                <div className="lg:col-span-1 md:col-span-4 sm:col-span-4 col-span-4">
                    <CourseList></CourseList>
                </div>

                <div className="lg:col-span-3 md:col-span-4 sm:col-span-4 col-span-4">
                    <Outlet></Outlet>
                </div>

            </div>

            <Footer></Footer>

        </div>
    );
};

export default Main;