import React from 'react';
import PropTypes from 'prop-types';
import footerWaveGraphic from '../assets/footer-wave.png'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Footer = ({ withCTA = true }) => {
  
  // Data structure for footer links
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
      
      {/* =========================================================
          SECTION 1: CALL TO ACTION (CTA)
          Only renders if withCTA is true
      ========================================================== */}
      {withCTA && (
        <div className="bg-[linear-gradient(135deg,_#7C3AED_0%,_#4F46E5_100%)] py-24 px-6">
          <div className="container mx-auto flex flex-col items-center text-center">
            <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
              Start your free trial
            </h2>
            <p className="text-purple-100 text-lg max-w-xl mb-10 leading-relaxed">
              Everything you need to accept card payments and grow your business anywhere on the planet.
            </p>
            <Link to="/signup">
  <button className="bg-white text-[#4F46E5] px-8 py-3.5 rounded-full font-semibold text-sm 
                     hover:bg-[#27227a] hover:text-white transition-colors shadow-lg">
    Start your free trial
  </button>
</Link>

          </div>
        </div>
      )}

      {/* =========================================================
          SECTION 2: FOOTER LINKS
          Always renders
      ========================================================== */}
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
        <div className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none opacity-80 mix-blend-lighten">
           <img 
             src={footerWaveGraphic} 
             alt="" 
             className="absolute bottom-0 right-0 w-full max-w-2xl object-contain object-bottom" 
           /> 
        </div>
      </div>
    </footer>
  );
};

// Define PropTypes for safety
Footer.propTypes = {
  withCTA: PropTypes.bool,
};

export default Footer;