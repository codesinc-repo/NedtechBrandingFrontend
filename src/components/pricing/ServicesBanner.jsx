import React from 'react';

// --- IMPORT ASSETS ---
import iconPulse from '../../assets/pulse.png';
import iconVector from '../../assets/management.png';
import iconHorizon from '../../assets/drift2.png';

const ServicesBanner = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* Main Card Container */}
        <div className="w-full rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl h-auto md:h-[400px]">
          
          {/* --- LEFT SIDE: Purple Content --- */}
          <div className="w-full md:w-1/2 bg-[#5540C7] p-10 md:p-16 flex flex-col justify-center text-left relative">
            {/* Optional subtle gradient overlay to match depth */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-5xl font-normal mb-6">
                Our services
              </h2>
              
              <p className="text-[#E0D9F9] text-base md:text-lg font-light leading-relaxed mb-10 max-w-md">
                Choose the plan that fits your business best, select a set of 
                bespoke services to benefit you and your business.
              </p>
              
              <button className="px-8 py-3 bg-white text-[#5540C7] rounded-full font-medium text-sm hover:bg-gray-100 transition-colors shadow-lg">
                Find out more
              </button>
            </div>
          </div>

          {/* --- RIGHT SIDE: Black Background & Icons --- */}
          <div className="w-full md:w-1/2 bg-black flex items-center justify-center gap-6 lg:gap-10 p-10">
            
            {/* Icon 1: Pulse */}
            <div className="w-20 h-20 md:w-24 md:h-24 transition-transform hover:scale-110 duration-500">
              <img src={iconPulse} alt="Pulse Service" className="w-full h-full object-contain" />
            </div>

            {/* Icon 2: Vector */}
            <div className="w-20 h-20 md:w-24 md:h-24 transition-transform hover:scale-110 duration-500">
              <img src={iconVector} alt="Vector Service" className="w-full h-full object-contain" />
            </div>

            {/* Icon 3: Horizon */}
            <div className="w-20 h-20 md:w-24 md:h-24 transition-transform hover:scale-110 duration-500">
              <img src={iconHorizon} alt="Horizon Service" className="w-full h-full object-contain" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesBanner;