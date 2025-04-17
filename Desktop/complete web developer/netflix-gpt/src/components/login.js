import React, { useState } from 'react';
import Header from './header.js';
const Login = () => {
  const [isSignInForm,setisSignInForm] =useState(true);
  const toggleSignInForm = () => {
        setisSignInForm(!isSignInForm);
  };
  return <div>
    <Header/>
    <img className='absolute'
    src='https://assets.nflxext.com/ffe/siteui/vlv3/fc2c345e-5991-4917-be24-cd328b62cc3f/web_tall_panel/IN-en-20250414-TRIFECTA-perspective_0f1fb403-6efb-4223-8f10-cfd1a902f22c_medium.jpg' alt='Netflix Background' />
    <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm? "Sign In" : "Sign Up"}</h1>
         {!isSignInForm && <input type='text' placeholder='Full Name' className='pl-3 py-3 my-3 w-full bg-[#4A4B4B]'/>}
        <input type='text' placeholder='Email Address' className='p-3 my-3 w-full bg-[#4A4B4B]'/>
        <input type='text' placeholder='Password' className='pl-3 py-3 my-3 w-full bg-[#4A4B4B]'/>
        <button className='p-3 my-3 bg-red-700 w-full rounded-lg'>{isSignInForm? "Sign In" : "Sign Up"}</button>
        <p className='py-2 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}
        
        </p>
    </form>
  </div>;
};

export default Login;
