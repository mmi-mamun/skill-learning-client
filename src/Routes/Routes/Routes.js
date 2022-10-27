import { createBrowserRouter } from "react-router-dom";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import Blog from "../../components/Blog/Blog";
import Courses from "../../components/Courses/Courses";
import Home from "../../components/Home/Home";
import Main from "../../layout/Main";
import CheckOutPage from "../../pages/CheckOutPage/CheckOutPage";
import FAQ from "../../pages/FAQ/FAQ";
import FourOFour from "../../pages/FourOFour/FourOFour";
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
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <AboutCourse></AboutCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/test/:id',
                element: <ReactToPdf></ReactToPdf>,
                loader: ({ params }) => fetch(`http://localhost:5000/test/${params.id}`)
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    }
])