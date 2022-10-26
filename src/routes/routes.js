import { createBrowserRouter } from "react-router-dom";
import Blogs from "../components/Blogs/Blogs";
import Courses from "../components/Courses/Courses";
import FAQs from "../components/FAQs/FAQs";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../layout/Main";
import CourseDetails from '../components/CourseDetails/CourseDetails';
import CheckOut from "../components/CheckOut/CheckOut";
import PrivateRoute from "./PrivateRoute";
import NotFoundPage from "../components/NotFoundPage/NotFoundPage";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/Courses',
                loader:()=>fetch('http://localhost:5000/courses'),
                element:<Courses></Courses>
            },
            {
                path:'/Courses/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)},
                element:<CourseDetails></CourseDetails>
            },
            {
                path:'/checkout/:id',
                loader: async ({params}) => {
                    return fetch(`http://localhost:5000/courses/${params.id}`)},
                element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
            },
            {
                path:'/Blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/FAQs',
                element:<FAQs></FAQs>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
            {
                path:'*',
                element: <NotFoundPage></NotFoundPage>
            }
        ]
    }
])

export default routes;