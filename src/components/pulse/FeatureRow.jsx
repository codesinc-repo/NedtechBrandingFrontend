import React from 'react';
import { Link } from 'react-router-dom';

const FeatureRow = ({ 
  title, 
  subtitle, 
  description, 
  corePromise, 
  linkText, 
  linkUrl = "#", 
  imageSrc, 
  imageAlt, 
  imageOnLeft = false 
}) => {
  return (
    <div className="w-full py-16 md:py-24 border-b border-white/5 last:border-0">
      <div className={`
        container mx-auto px-4 md:px-8 max-w-7xl 
        flex flex-col-reverse md:flex-row items-center gap-10 lg:gap-20
        ${imageOnLeft ? 'md:flex-row-reverse' : ''} 
      `}>
        
        {/* --- TEXT SECTION (Kept exactly 60% as per your design) --- */}
        <div className="w-full md:w-[60%] flex flex-col justify-center">
          
          <h2 className="text-3xl md:text-5xl font-normal text-white mb-6 leading-tight">
            {title}
          </h2>

          {subtitle && (
            <h3 className="text-xl md:text-2xl font-bold text-white mb-5">
              {subtitle}
            </h3>
          )}

          <p className="text-slate-400 text-lg md:text-xl leading-relaxed mb-8">
            {description}
          </p>

          {corePromise && (
            <p className="text-slate-300 text-lg md:text-xl mb-10">
              <span className="font-bold text-white">Core promise: </span>
              {corePromise}
            </p>
          )}

          {linkText && (
            <Link 
              to={linkUrl} 
              className="inline-flex items-center text-[#d946ef] text-lg font-medium underline underline-offset-8 hover:text-[#f0abfc] transition-colors"
            >
              {linkText}
            </Link>
          )}
        </div>

        {/* --- IMAGE SECTION (Kept exactly 40% as per your design) --- */}
        <div className="w-full md:w-[40%] flex justify-center relative">
          
          {/* LOGIC ADDED: Wrapped img in Link. 
              Added 'cursor-pointer' to the image class so it feels clickable. 
          */}
          <Link to={linkUrl} className="contents">
            <img 
              src={imageSrc} 
              alt={imageAlt || title} 
              className="w-full max-w-sm md:max-w-md h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02] cursor-pointer" 
            />
          </Link>

        </div>

      </div>
    </div>
  );
};

export default FeatureRow;