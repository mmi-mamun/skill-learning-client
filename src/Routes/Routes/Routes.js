import { createBrowserRouter } from "react-router-dom";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Header from "../../components/Header/Header";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

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
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <AboutCourse></AboutCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '*',
                element: <Header></Header>
            }
        ]
    }
])