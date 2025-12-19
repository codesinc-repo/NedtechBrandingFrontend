import React from 'react';

const PageHero = ({ title, subtitle, buttonText, onButtonClick }) => {
  return (
    <section className="relative w-full pt-32 pb-16 px-4 bg-[#0B0518]">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <div className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-8">
            {subtitle}
          </div>
        )}

        {/* Button Logic: Renders ONLY if buttonText is provided */}
        {buttonText && (
          <div className="flex justify-center mt-8">
            <button 
              onClick={onButtonClick}
              className="px-8 py-3 rounded-full bg-[#7B5eea] text-white font-semibold hover:bg-[#6a4ce0] transition-all shadow-[0_0_20px_rgba(123,94,234,0.3)]"
            >
              {buttonText}
            </button>
          </div>
        )}
        
      </div>
    </section>
  );
};

export default PageHero;