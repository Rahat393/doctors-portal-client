import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Appointment from "../Pages/Appointment/Appointment";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>
            }
        ]
    }
])