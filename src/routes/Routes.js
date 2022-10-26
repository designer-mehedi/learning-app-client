import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Home from "../components/Home";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Layout/>,
        children: [
            {
                path: '/home',
                element: <Home/>
            },
            {
                path: '/courses',
                element: <Courses/>
            },
            {
                path: '/faq',
                element: <FAQ/>
            },
            {
                path: '/blog',
                element: <Blog/>
            }
        ]
    },
    {
        path: '*',
        element: <ErrorPage/>
    }

])