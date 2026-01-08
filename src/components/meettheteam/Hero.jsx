import React from 'react';

const Hero = ({ 
  title = "Standard Content", 
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma. Lorem ipsum dolor sit amet, consectetur adipiscing.",
  imageSrc = "path-to-your-team-image.jpg" // Replace with your import or URL
}) => {
  return (
    <section className="relative w-full bg-[#050511] py-16 lg:py-24 overflow-hidden mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Left Column: Text Content */}
          {/* CHANGED: Replaced margin with 'lg:-translate-y-16'
              - This forces the text block to shift UP by 64px from the center line.
              - It works even if flexbox tries to center it.
          */}
          <div className="w-full lg:w-1/2 flex flex-col items-start space-y-6 z-10 lg:-translate-y-16">
            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-semibold text-white tracking-tight leading-[1.1]">
              {title}
            </h1>
            
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-lg font-light opacity-90">
              {description}
            </p>
          </div>

          {/* Right Column: Hero Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative w-full h-[350px] md:h-[450px] lg:h-[550px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-800">
              {/* Image */}
              <img 
                src={imageSrc} 
                alt="Team collaboration" 
                className="w-full h-full object-cover"
              />
              
              {/* Optional: subtle overlay to blend edges if image is too bright */}
              <div className="absolute inset-0 bg-black/10 pointer-events-none" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;