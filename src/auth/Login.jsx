import React from 'react';
import { Link } from 'react-router-dom';
// Import the image you exported
import loginHeroImage from '../assets/login-hero.png'; 

const Login = () => {
  return (
    <div className="min-h-screen w-full bg-[#020617] flex items-center justify-center p-4 lg:p-0">
      
      <div className="container mx-auto max-w-7xl h-full flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

        {/* ================= LEFT SIDE: FORM ================= */}
        <div className="w-full lg:w-1/2 flex flex-col items-start max-w-md">
          
          <h1 className="text-white text-4xl font-normal mb-8">Login</h1>

          {/* Login Card Container */}
          <div className="w-full border border-white/10 rounded-2xl p-8 bg-transparent">
            
            <form className="flex flex-col gap-6">
              
              {/* Email Field */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm">Email address*</label>
                <input 
                  type="email" 
                  placeholder="Please enter your email" 
                  className="w-full bg-[#0B0F19] border border-[#2B3040] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>

              {/* Password Field */}
              <div className="flex flex-col gap-2">
                <label className="text-gray-300 text-sm">Password*</label>
                <input 
                  type="password" 
                  placeholder="Please enter your password" 
                  className="w-full bg-[#0B0F19] border border-[#2B3040] rounded-lg px-4 py-3 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-[#7C3AED] transition-colors"
                />
              </div>

              {/* Forgot Password Link */}
              <div className="flex justify-start">
                <a href="#" className="text-[#94A3B8] text-xs hover:text-white transition-colors">
                  Forgot Password?
                </a>
              </div>

              {/* Submit Button */}
              <button className="w-full bg-[#7C3AED] text-white font-medium py-3 rounded-lg hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-500/20 mt-2">
                Login
              </button>

            </form>

            {/* Separator / Footer */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-xs">
                Don't have an account?{' '}
                <Link to="/signup" className="text-white font-medium hover:underline">
                  Sign Up
                </Link>
              </p>
            </div>

          </div>
        </div>

        {/* ================= RIGHT SIDE: IMAGE ================= */}
        <div className="hidden lg:block w-full lg:w-1/2 h-[600px] lg:h-[800px] rounded-l-[40px] overflow-hidden relative">
           {/* The Image */}
           <img 
             src={loginHeroImage} 
             alt="Team Collaboration" 
             className="w-full h-full object-cover"
           />
        </div>

      </div>
    </div>
  );
};

export default Login;