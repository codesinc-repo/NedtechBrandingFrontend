import React from 'react';
// IMPORTANT: Export the team meeting image from Figma and save it as about-banner.jpg
import AboutImage from '../../assets/about-banner.png'; 

const AboutSpotlight = () => {
  return (
    // Outer Section: White background
    <section className="w-full bg-white py-20 px-4 md:px-8">
      
      {/* Inner Card: Rounded corners + Shadow + Flex Layout */}
      <div className="container mx-auto max-w-7xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]">
        
        {/* --- LEFT SIDE: Text Content (Purple Gradient) --- */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-[#0F0529] to-[#6d28d9] p-10 md:p-16 flex flex-col justify-center relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 tracking-wide">
            About us
          </h2>
          
          <p className="text-purple-100 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
            Empowering small businesses around the world to work smarter, scale faster, and compete with confidence.
          </p>
          
          <div>
            <button className="bg-white text-[#5B21B6] px-10 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Find out more
            </button>
          </div>
          
        </div>

        {/* --- RIGHT SIDE: Image --- */}
        <div className="w-full md:w-1/2 relative">
          {/* 'absolute inset-0' ensures the image covers the entire right side properly */}
          <img 
            src={AboutImage} 
            alt="Team meeting in office" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSpotlight;