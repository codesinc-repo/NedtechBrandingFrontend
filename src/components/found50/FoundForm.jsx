import React from 'react';
// IMPORTANT: Export the man's photo from Figma and place it in assets
import TestimonialMan from '../../assets/testimonial-man.png'; 

const FoundingFormSection = () => {
  return (
    <div className="w-full flex flex-col">

      {/* =========================================================
          PART 1: TESTIMONIAL SLIDER (Light Section)
      ========================================================== */}
      <section className="bg-white pb-24 px-4 md:px-8">
        <div className="container mx-auto max-w-6xl">
            
            {/* Card Container: Rounded corners and light gray bg */}
            <div className="bg-[#F3F4F6] rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-lg min-h-[500px]">
                
                {/* Left: Text Content */}
                <div className="w-full md:w-[55%] p-10 md:p-16 flex flex-col justify-center relative">
                    {/* Large Quote Icon */}
                    <div className="text-6xl text-[#0F172A] font-serif mb-6">“</div>
                    
                    {/* Quote Text */}
                    <h3 className="text-3xl md:text-4xl text-[#0F172A] font-light leading-snug mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
                    </h3>
                    
                    {/* Author */}
                    <p className="text-[#7B5eea] font-medium text-lg mb-12">
                        John Doe, MD of Blank
                    </p>
                    
                    {/* Pagination Dots (Visual Only) */}
                    <div className="flex gap-3 mt-auto">
                        <span className="w-2.5 h-2.5 border border-[#7B5eea] rounded-full cursor-pointer hover:bg-[#7B5eea]"></span>
                        <span className="w-2.5 h-2.5 border border-[#7B5eea] rounded-full cursor-pointer hover:bg-[#7B5eea]"></span>
                        <span className="w-2.5 h-2.5 border border-[#7B5eea] rounded-full cursor-pointer hover:bg-[#7B5eea]"></span>
                        <span className="w-2.5 h-2.5 bg-[#7B5eea] rounded-full cursor-pointer"></span> {/* Active Dot */}
                    </div>
                </div>

                {/* Right: Image */}
                <div className="w-full md:w-[45%] h-64 md:h-auto relative">
                    <img 
                        src={TestimonialMan} 
                        alt="Testimonial Author" 
                        className="absolute inset-0 w-full h-full object-cover object-top"
                    />
                </div>
            </div>

        </div>
      </section>


      {/* =========================================================
          PART 2: APPLICATION FORM (Dark Section)
      ========================================================== */}
      <section className="bg-[#0B0518] py-24 px-4 md:px-8">
         <div className="container mx-auto max-w-4xl">
            
            {/* Header Text */}
            <div className="mb-16">
                <h2 className="text-4xl md:text-5xl font-normal text-white mb-6">
                    Apply to join the Founding 50
                </h2>
                <p className="text-slate-400 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </div>

            {/* The Form */}
            <form className="space-y-6">
                
                {/* Row 1: Name & Company */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="text" 
                        placeholder="Name*" 
                        className="w-full h-14 px-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all" 
                    />
                    <input 
                        type="text" 
                        placeholder="Company*" 
                        className="w-full h-14 px-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all" 
                    />
                </div>

                {/* Row 2: Role & Source */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="text" 
                        placeholder="What is your roll in the company*" 
                        className="w-full h-14 px-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all" 
                    />
                    
                    {/* Select Dropdown with custom styling */}
                    <div className="relative">
                         <select className="w-full h-14 px-5 rounded-lg bg-white text-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] appearance-none cursor-pointer transition-all">
                            <option>How did you hear about us?</option>
                            <option>LinkedIn</option>
                            <option>Twitter</option>
                            <option>Referral</option>
                         </select>
                         {/* Chevron Icon */}
                         <div className="absolute top-1/2 right-4 -translate-y-1/2 pointer-events-none text-gray-400">
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                             </svg>
                         </div>
                    </div>
                </div>

                {/* Row 3: Email & Phone */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input 
                        type="email" 
                        placeholder="Email address*" 
                        className="w-full h-14 px-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all" 
                    />
                    <input 
                        type="tel" 
                        placeholder="Telephone number*" 
                        className="w-full h-14 px-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all" 
                    />
                </div>

                {/* Message Text Area */}
                <textarea 
                    rows="8" 
                    placeholder="Message*" 
                    className="w-full p-5 rounded-lg bg-white text-gray-900 placeholder-gray-500 outline-none focus:ring-2 focus:ring-[#7B5eea] transition-all resize-none"
                ></textarea>

                {/* Submit Button */}
                <div className="pt-6">
                    <button 
                        type="submit" 
                        className="bg-[#7B5eea] text-white px-10 py-3.5 rounded-full font-medium hover:bg-[#6a4ce0] transition-all shadow-[0_0_20px_rgba(123,94,234,0.4)]"
                    >
                        Send message
                    </button>
                </div>

            </form>
         </div>
      </section>

    </div>
  );
};

export default FoundingFormSection;