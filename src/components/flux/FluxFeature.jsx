import React from 'react';
import PropTypes from 'prop-types';

const ServiceFeature = ({ 
  icon, 
  serviceName, 
  accentColor, 
  headline, 
  description, 
  corePromise, 
  features 
}) => {
  return (
    <section className="w-full bg-[#020617] py-20 px-6 md:px-12 flex justify-center border-b border-white/5">
      <div className="container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        
        {/* ================= LEFT SIDE: ICON & LINK ================= */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-center">
          
          {/* Large Wireframe Icon */}
          <div className="w-64 h-64 md:w-80 md:h-80 mb-8 relative transition-transform duration-700 hover:scale-105">
            <img 
              src={icon} 
              alt={`${serviceName} Illustration`} 
              className="w-full h-full object-contain"
            />
          </div>

          {/* Dynamic Link with Dynamic Color */}
          <a 
            href="#" 
            style={{ color: accentColor, textDecorationColor: accentColor }}
            className="text-lg font-light underline underline-offset-8 decoration-1 hover:text-white transition-colors"
          >
            Discover {serviceName}
          </a>
        </div>

        {/* ================= RIGHT SIDE: CONTENT CARD ================= */}
        <div className="w-full lg:w-2/3 bg-[#F1F5F9] rounded-[40px] p-8 md:p-12 lg:p-16 text-[#0F172A] shadow-2xl">
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#0F172A]">
            {headline}
          </h2>

          <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-6">
            {description}
          </p>

          <p className="text-[#475569] text-base md:text-lg leading-relaxed mb-10">
            <strong className="text-[#0F172A] font-semibold">Core promise:</strong> {corePromise}
          </p>

          {/* Bullet Points Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 bg-[#0F172A] rounded-full flex-shrink-0"></span>
                <span className="text-[#0F172A] font-semibold text-sm md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

ServiceFeature.propTypes = {
  icon: PropTypes.string.isRequired,
  serviceName: PropTypes.string.isRequired,
  accentColor: PropTypes.string, // Hex code like '#EC4899'
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  corePromise: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceFeature;