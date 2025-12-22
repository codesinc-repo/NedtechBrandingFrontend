import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react'; // Optional: for the dropdown arrow
// Import the asset you exported
import signupWave from '../assets/signup-wave.png';

const Signup = () => {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row mt-40">
      
      {/* ================= LEFT SIDE: FORM (Purple) ================= */}
      <div className="w-full lg:w-1/2 bg-[#7C3AED] p-6 lg:p-12 flex flex-col justify-center min-h-screen">
        <div className="max-w-md mx-auto w-full">
          
          <h1 className="text-white text-3xl font-medium mb-6">Signup</h1>

          {/* Form Container */}
          <div className="w-full border border-white/20 rounded-3xl p-6 md:p-8">
            <form className="flex flex-col gap-5">
              
              {/* First Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-sm font-light">First Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your first name" 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm"
                />
              </div>

              {/* Last Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-sm font-light">Last Name</label>
                <input 
                  type="text" 
                  placeholder="Enter your last name" 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-sm font-light">Email</label>
                <input 
                  type="email" 
                  placeholder="name@email.com" 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm"
                />
              </div>

              {/* Company Size (Select) */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-white text-sm font-light">Company Size</label>
                <div className="relative">
                  <select className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-500">Select company size</option>
                    <option value="1-10" className="text-gray-900">1-10 employees</option>
                    <option value="11-50" className="text-gray-900">11-50 employees</option>
                    <option value="50+" className="text-gray-900">50+ employees</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Industry (Select) */}
              <div className="flex flex-col gap-1.5 relative">
                <label className="text-white text-sm font-light">Industry</label>
                <div className="relative">
                  <select className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm appearance-none cursor-pointer">
                    <option value="" disabled selected className="text-gray-500">Select industry</option>
                    <option value="tech" className="text-gray-900">Technology</option>
                    <option value="marketing" className="text-gray-900">Marketing</option>
                    <option value="finance" className="text-gray-900">Finance</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 w-4 h-4 pointer-events-none" />
                </div>
              </div>

              {/* Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-sm font-light">Password</label>
                <input 
                  type="password" 
                  placeholder="Create a password" 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm"
                />
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-white text-sm font-light">Confirm Password</label>
                <input 
                  type="password" 
                  placeholder="Confirm password" 
                  className="w-full bg-transparent border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white focus:bg-white/5 transition-all text-sm"
                />
              </div>

              {/* Submit Button */}
              <Link to="/freetrial">
                <button className="w-full bg-white text-[#0F172A] font-bold py-3 rounded-lg hover:bg-gray-100 transition-all shadow-lg mt-4 text-sm">
                  Create account
                </button>
              </Link>

              {/* Footer Link */}
              <div className="text-center mt-2">
                <p className="text-white/80 text-xs">
                  Already have an account?{' '}
                  <Link to="/login" className="text-white font-bold hover:underline">
                    Login
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* ================= RIGHT SIDE: CONTENT (Dark) ================= */}
      <div className="hidden lg:flex w-1/2 bg-[#020617] relative flex-col justify-center px-16 xl:px-24">
        
        {/* Text Content */}
        <div className="relative z-10 max-w-lg mb-20">
          <h2 className="text-white text-4xl xl:text-5xl font-bold leading-tight mb-6">
            Grow Smarter, <br />
            Work Faster, <br />
            Spend Less.
          </h2>
          <p className="text-[#94A3B8] text-lg font-light leading-relaxed">
            Empowering small businesses around the world to work smarter, scale faster, and compete with confidence.
          </p>
        </div>

        {/* Wave Graphic */}
        {/* Positioned at bottom right as per design */}
        <img 
          src={signupWave} 
          alt="Abstract Wave" 
          className="absolute bottom-0 right-0 w-[60%] max-w-[600px] object-contain opacity-100 pointer-events-none"
        />

      </div>

    </div>
  );
};

export default Signup;