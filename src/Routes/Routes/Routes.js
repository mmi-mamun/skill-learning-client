import { createBrowserRouter } from "react-router-dom";
import Header from "../../components/Header/Header";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Header></Header>
    }
])