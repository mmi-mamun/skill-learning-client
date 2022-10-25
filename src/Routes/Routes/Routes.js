import { createBrowserRouter } from "react-router-dom";
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
                path: '*',
                element: <Header></Header>
            }
        ]
    }
])