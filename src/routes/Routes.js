import { createBrowserRouter } from "react-router-dom";
import AllCourse from "../components/AllCourse";
import Blog from "../components/Blog";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import ErrorPage from "../components/ErrorPage";
import FAQ from "../components/FAQ";
import Login from "../components/Login";
import Register from "../components/Register";
import Title from "../components/Title";
import Layout from "../layout/Layout";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				loader: () =>
					fetch(
						"https://learning-app-server-khaki.vercel.app/courses"
					),
				element: <Courses />,
			},
			{
				path: "/courses",
				loader: () =>
					fetch(
						"https://learning-app-server-khaki.vercel.app/courses"
					),
				element: <Courses />,
			},
			{
				path: "/course",
				element: <AllCourse />,
			},
			{
				path: "/course/:id",
				element: <CourseDetails />,
				loader: ({ params }) =>
					fetch(
						`https://learning-app-server-khaki.vercel.app/course/${params.id}`
					),
			},
			{
				path: "/title",
				element: <Title />,
			},
			{
				path: "/faq",
				element: <FAQ />,
			},
			{
				path: "/blog",
				element: <Blog />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/register",
				element: <Register />,
			},
		],
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
]);