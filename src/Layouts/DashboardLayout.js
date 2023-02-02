import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthProvider";
import useAdmin from "../hooks/useAdmin";
import Navbar from "../Pages/Home/Shared/Navbar/Navbar";

const DashboardLayout = () => {
  const {user} = useContext(AuthContext)
  const [isAdmin] = useAdmin(user?.email)
  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content  ">
     <Outlet></Outlet>
     
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
       
       <li ><Link className="text-xl" to={'/dashboard'}>My Appointment</Link></li>
       {isAdmin &&
        <>
        <li ><Link className="text-xl" to={'/dashboard/allusers'}>All Users</Link></li>
        <li ><Link className="text-xl" to={'/dashboard/addadoctor'}>Add A Doctor</Link></li>
        </>}
        
    </ul>
  
  </div>
</div>
    </div>
  );
};

export default DashboardLayout;
