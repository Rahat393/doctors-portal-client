import { GoogleAuthProvider } from 'firebase/auth';
import React from 'react';
import   { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import useToken from '../../hooks/useToken';

const LogIn = () => {
    const {signIn, providerLogin} = useContext(AuthContext)
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [loginError, setLoginError] = useState('');
  const [loginUserEmail, setLoginUserEmail] = useState('')
  const [token] = useToken(loginUserEmail)
  
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/'

  if(token){
    navigate(from, {replace: true})
  }

  const googleProvider = new GoogleAuthProvider()
  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
        const user = result.user
        console.log(user);
        navigate(from, {replace: true}) 
    })
    .catch(err => {
        console.log(err);
    })
  }

  const handleLogin = data => {
    setLoginError('')
    signIn(data.email, data.password)
    .then(result => {
        console.log(result);
        setLoginUserEmail(data.email)
    })
    .catch(error => {
        console.log(error)
        setLoginError(error.message)
    })
     
   
  }
  return (
    <div className='h-[650px]   mx-auto flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Email</span></label>
                        <input type="text"
                            {...register("email", {
                                required: "Email Address is required"
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password", {
                                required: "Password is required",
                                // minLength: { value: 6, message: 'Password must be 6 characters or longer' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        <label className="label"> <span className="label-text">Forget Password?</span></label>
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <input className='btn btn-accent  w-4/5' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'>   {loginError}</p>}
                    </div>
                </form>
                <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
  );
};

export default LogIn;