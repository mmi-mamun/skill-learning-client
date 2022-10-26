import { createBrowserRouter } from "react-router-dom";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import Blog from "../../components/Blog/Blog";
import CourseDetails from "../../components/CourseDetails/CourseDetails";
import Courses from "../../components/Courses/Courses";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import ReactToPdf from "../../pages/ReactToPdf/ReactToPdf";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../privateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/courses',
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/courses/:id',
                element: <PrivateRoute><AboutCourse></AboutCourse></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/test/:id',
                element: <ReactToPdf></ReactToPdf>,
                loader: ({ params }) => fetch(`http://localhost:5000/test/${params.id}`)
            },
            {
                path: '*',
                element: <Header></Header>
            }
        ]
    }
])