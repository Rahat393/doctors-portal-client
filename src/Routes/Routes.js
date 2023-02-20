import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layouts/DashboardLayout";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Appointment from "../Pages/Appointment/Appointment";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageDoctor from "../Pages/Dashboard/ManageDoctor/ManageDoctor";
 import MyAppointment from "../Pages/Dashboard/MyAppointment/MyAppointment";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Home from "../Pages/Home/Home";
import DisplayError from "../Pages/Home/Shared/DisplayError/DisplayError";
import LogIn from "../Pages/LogIn/LogIn";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute/AdminRoute";
 import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <DisplayError></DisplayError>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "login",
        element: <LogIn></LogIn>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },

      {
        path: "/appointment",
        element: (
          <PrivateRoute>
            <Appointment></Appointment>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    errorElement: <DisplayError></DisplayError>,
    element: 
      <PrivateRoute>
         
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ,
    children: [
      {
        path: "/dashboard",
        element:  <MyAppointment></MyAppointment> ,
      },
      {
        path: "/dashboard/allusers",
        element:   <AdminRoute><AllUsers></AllUsers></AdminRoute> ,
      },
      {
        path: "/dashboard/addadoctor",
        element:   <AdminRoute> <AddDoctor></AddDoctor></AdminRoute> ,
      },
      {
        path: "/dashboard/managedoctors",
        element:   <AdminRoute>  <ManageDoctor></ManageDoctor></AdminRoute> ,
      },
      {
        path: "/dashboard/payment/:id",
        element:   <AdminRoute>  <Payment></Payment></AdminRoute> ,
        loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
      },
    ],
  },
]);
