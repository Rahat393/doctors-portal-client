import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-day-picker';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';
import './Navbar.css'

const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(() => { })
         .catch(err => console.log(err))
    }

    const menuItem = <React.Fragment  >
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/appointment'>Appoinment</Link></li>
        
        { user?.uid ?
            <>
            <li><Link to='/dashboard'>Dashboard</Link></li>
            <li> <button onClick={handleLogOut}>Sign Out</button> </li>
            </>
            :
        <li><Link to='/login'>LogIn</Link></li>}
        
    </React.Fragment>
    return (
        <div>
            <div className="navbar bg-base-100 flex justify-between">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItem}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-2xl font-bold">Doctors Portal</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {menuItem}
                    </ul>
                </div>
                <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
            </div>
            
        </div>
    );
};

export default Navbar;