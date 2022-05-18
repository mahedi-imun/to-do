import auth from '../../firebase.init'
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import googleLogo from '../../images/google.png'
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const [signInWithGoogle] = useSignInWithGoogle(auth);

    const handleGoogleLogin = async () => {
        await signInWithGoogle()
        navigate(from, { replace: true });

    }
    return (
            <div className='flex justify-center mt-10'>
                <div className="card w-96 bg-indigo-500 shadow-xl ">
                <div className="card-body">
                <button 
                onClick={()=>handleGoogleLogin()}
                className="btn glass">
                    <img className=' w-10' src={googleLogo} alt="" />
                    continue with google</button>
                    

                </div>
            </div>
    
            </div>
    );
};

export default Login;