import React from 'react';
import { useContext } from 'react';
import { useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../../Contexts/AuthProvider';

const DisplayError = () => {
  const error = useRouteError()
  const {logOut} = useContext(AuthContext)
  const handleLogOut = () => {
    logOut()
    .then(() => { })
     .catch(err => console.log(err))
}
  return (
    <div>
        <p className='text-red-600'>Something Went Wrong !!</p>
        <p className='text-red-500'>{error.statusText || error.message}</p>
        <h4 className='text-3xl'>Please <button onClick={handleLogOut}>Sign Out</button> </h4>
    </div>
  );
};

export default DisplayError;