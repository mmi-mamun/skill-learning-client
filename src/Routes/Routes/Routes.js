import { createBrowserRouter } from "react-router-dom";
import AboutCourse from "../../components/AboutCourse/AboutCourse";
import Banner from "../../components/Banner/Banner";
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
                element: <Banner></Banner>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/user',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>
            },
            {
                path: '/courses/:id',
                element: <AboutCourse></AboutCourse>,
                loader: ({ params }) => fetch(`https://skill-learning-server-site.vercel.app/courses/${params.id}`)
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoute><CheckOutPage></CheckOutPage></PrivateRoute>,
                loader: ({ params }) => fetch(`https://skill-learning-server-site.vercel.app/courses/${params.id}`)
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
                loader: ({ params }) => fetch(`https://skill-learning-server-site.vercel.app/test/${params.id}`)
            },
            {
                path: '*',
                element: <FourOFour></FourOFour>
            }
        ]
    }
])