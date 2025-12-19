import React from 'react';
// Assume you have exported the side image from Figma as features-image.png
import FeaturesImage from '../../assets/feautures-image.png'; 

const CoreFeaturesSection = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Text Content */}
        <div className="lg:w-1/2 max-w-lg">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Core Features & Integrations
          </h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            NedTech.ai brings all your essential tools and AI employees together in one place.
          </p>
          <button className="px-8 py-3 border-2 border-gray-900 text-gray-900 font-medium rounded-full hover:bg-gray-900 hover:text-white transition-colors duration-300">
            Explore features
          </button>
        </div>

        {/* Right Side: Image from Figma */}
        <div className="lg:w-1/2 flex justify-end relative">
          {/* The image is designed to look like it's extending off the screen on the right */}
          <div className="relative z-10 translate-x-1/4 lg:translate-x-0">
            <img 
              src={FeaturesImage} 
              alt="Core Features and Integrations Interface" 
              className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default CoreFeaturesSection;