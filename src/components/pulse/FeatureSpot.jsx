import React from 'react';
// IMPORTANT: Export your pricing image from Figma and import it here
import PricingImage from '../../assets/pulse-hero.png'; 

const FeatureSpotlight = () => {
  return (
    // 1. Outer Section: WHITE background (as per your screenshot)
    <section className="w-full bg-white py-20 px-4 md:px-8">
      
      {/* 2. Inner Card: Purple Gradient + Rounded Corners */}
      <div className="container mx-auto max-w-7xl rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row min-h-[400px]">
        
        {/* --- Left Side: Text Content (Purple Gradient) --- */}
        <div className="w-full md:w-1/2 bg-gradient-to-r from-[#0F0529] to-[#5B21B6] p-10 md:p-16 flex flex-col justify-center relative z-10">
          
          <h2 className="text-4xl md:text-5xl font-normal text-white mb-6 tracking-wide">
            Pricing
          </h2>
          
          <p className="text-purple-100 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-md">
            Choose the plan that fits your business best, select a set of bespoke services to benefit you and your business.
          </p>
          
          <div>
            <button className="bg-white text-[#4c1d95] px-10 py-3 rounded-full font-medium text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Find out more
            </button>
          </div>
          
        </div>

        {/* --- Right Side: Image --- */}
        <div className="w-full md:w-1/2 relative">
          {/* 'absolute inset-0' ensures the image covers the whole right half without gaps */}
          <img 
            src={PricingImage} 
            alt="Pricing and Team" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default FeatureSpotlight;