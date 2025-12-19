import React from 'react';
// Make sure to import the exported graphic here
 import footerWaveGraphic from '../assets/footer-wave.png';

const Footer = () => {
  // Data structure for footer links to ensure reusability and clean code
  const footerSections = [
    {
      title: "FOOTER SUB LINK",
      links: ["Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar"]
    },
    {
      title: "FOOTER SUB LINK",
      links: ["Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar"]
    },
    {
      title: "FOOTER SUB LINK",
      links: ["Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar"]
    },
    {
      title: "FOOTER SUB LINK",
      links: ["Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar", "Lorem ipsum dolar"]
    },
  ];

  return (
    <footer className="w-full">
      {/* --- TOP SECTION: CTA --- */}
      {/* Using a specific purple gradient to match the design image */}
      <div className="bg-[linear-gradient(135deg,_#7C3AED_0%,_#4F46E5_100%)] py-24 px-6">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            Start your free trial
          </h2>
          <p className="text-purple-100 text-lg max-w-xl mb-10 leading-relaxed">
            Everything you need to accept card payments and grow your business anywhere on the planet.
          </p>
          <button className="bg-white text-[#4F46E5] px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors shadow-lg">
            Start your free trial
          </button>
        </div>
      </div>

      {/* --- BOTTOM SECTION: LINKS --- */}
      {/* Background is the deep navy color #020617 matching the site theme */}
      <div className="bg-[#020617] relative overflow-hidden pt-20 pb-32 px-6">
        <div className="container mx-auto relative z-10">
          {/* 4-Column Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-8 lg:gap-12">
            {footerSections.map((section, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-white text-xs font-bold uppercase tracking-widest mb-6">
                  {section.title}
                </h3>
                <ul className="flex flex-col space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-[#94A3B8] text-sm hover:text-white transition-colors duration-200"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* --- Background Graphic Asset --- */}
        {/* Replace inner div with: <img src={footerWaveGraphic} alt="" className="..." /> */}
        <div 
          className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none opacity-80 mix-blend-lighten"
          style={{
             // Temporary placeholder to show where the image goes.
             // Replace this style block with the actual img tag and source.
             backgroundImage: 'radial-gradient(circle at bottom right, rgba(124, 58, 237, 0.4) 0%, transparent 60%)',
          }}
        >
            <img src={footerWaveGraphic} alt="" className="absolute bottom-0 right-0 w-full max-w-2xl object-contain object-bottom" /> 
        </div>
      </div>
    </footer>
  );
};

export default Footer;