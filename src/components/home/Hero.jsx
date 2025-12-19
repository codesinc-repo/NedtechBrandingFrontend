import React from 'react';
import WaveBg from '../../assets/wave-bg.png'; 

const HeroSection = ({
  title,
  subtitle,
  primaryBtnText,
  secondaryBtnText,
  align = 'left',
  rightContent = null
}) => {

  const isCentered = align === 'center';

  return (
    // FIX 1: Changed 'px-6' to 'px-6 lg:pl-24'. 
    // This gives the text a solid margin from the left on desktop, aligning it better with your Logo.
    <section className="relative w-full max-w-8xl mx-auto px-6 lg:pl-24 pt-36 pb-32 flex flex-col justify-center min-h-[85vh]">

      <div className={`flex flex-col lg:flex-row items-start ${isCentered ? 'justify-center text-center' : 'justify-between text-left'} gap-12 z-10`}>

        {/* --- LEFT SIDE (Content) --- */}
        <div className={`flex flex-col ${isCentered ? 'items-center w-full max-w-4xl' : 'items-start w-full lg:w-1/2'}`}>

          <h1 className="text-4xl lg:text-6xl font-normal text-white leading-tight mb-8">
            {title}
          </h1>

          {subtitle && (
            <p className="text-gray-300 text-lg lg:text-xl max-w-2xl mb-10 leading-relaxed">
              {subtitle}
            </p>
          )}

          {(primaryBtnText || secondaryBtnText) && (
            <div className="flex flex-wrap gap-4">
              {primaryBtnText && (
                <button className="bg-[#7B5eea] hover:bg-[#6a4ed0] text-white px-8 py-3.5 rounded-full font-medium transition shadow-lg shadow-purple-900/40">
                  {primaryBtnText}
                </button>
              )}
              {secondaryBtnText && (
                <button className="border border-gray-600 text-white px-8 py-3.5 rounded-full font-medium hover:border-[#7B5eea] hover:bg-white/5 transition">
                  {secondaryBtnText}
                </button>
              )}
            </div>
          )}
        </div>

        {/* --- RIGHT SIDE (Content/Card) --- */}
        {!isCentered && rightContent && (
          <div className="w-full lg:w-5/12 flex justify-center lg:justify-end mt-12 lg:mt-24">
            {rightContent}
          </div>
        )}

      </div>

      {/* --- WAVE BACKGROUND (FIXED) --- 
         FIX 2: 'bottom-0' and 'right-0'. 
         Removed margins/translates. This snaps it to the exact corner.
         Adjusted width to 'w-[50vw]' to ensure it looks balanced.
      */}
      <div className={`absolute z-0 pointer-events-none opacity-80 mix-blend-lighten
        ${isCentered
          ? 'bottom-0 left-0 right-0 flex justify-center'
          : 'bottom-0 right-0' 
        }
      `}>
        <img 
          src={WaveBg} 
          alt="Wave" 
          // 'object-right-bottom' ensures the corner of the image hits the corner of the screen
          className={`object-contain object-right-bottom 
            ${isCentered 
              ? 'max-h-[500px]' 
              : 'w-[50vw] max-h-[75vh]' 
            }`} 
        />
      </div>

    </section>
  );
};

export default HeroSection;