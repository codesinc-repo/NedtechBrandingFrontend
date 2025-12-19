import React from 'react';
// IMPORTANT: Make sure this path points to your actual image file
import integrationLogos from '../../assets/integrations-logos.png'; 

const IntegrationCard = () => {
  return (
    <div className="w-full rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
      
      {/* Left Side: Purple Gradient */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1e1b4b] to-[#5b21b6] p-10 md:p-14 flex flex-col justify-center">
        <h3 className="text-white text-3xl md:text-4xl font-normal mb-6 leading-tight">
          All-in-One AI Team for <br /> Your Business
        </h3>
        <p className="text-purple-200 text-sm md:text-base leading-relaxed max-w-md">
          We've got every role covered - from social media and customer service to copywriting, email marketing.
        </p>
      </div>

      {/* Right Side: Logos Grid */}
      <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-0">
        <img 
          src={integrationLogos} 
          alt="Integration Partners" 
          className="max-w-[80%] h-auto object-contain"
        />
      </div>

    </div>
  );
};

export default IntegrationCard;