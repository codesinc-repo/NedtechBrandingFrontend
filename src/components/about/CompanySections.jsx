import React from 'react';

// --- IMPORT ASSETS ---
// Make sure these match the filenames you exported
import imgTeam from '../../assets/team.png';
import imgJourney from '../../assets/journey.png';
import imgCaseStudies from '../../assets/casestudy.png';
import imgTestimonials from '../../assets/testimonials.png';
import integrationLogos from '../../assets/integrations-logos.png';
import IntegrationCard from '../home/IntegrationCard';

const CompanySections = () => {
  
  // Data for the alternating sections to keep code clean and maintainable
  const sections = [
    {
      id: 1,
      title: "Meet the team",
      text: "Meet the dedicated team driving us forward.",
      btnText: "Meet the team",
      image: imgTeam,
      layout: "text-left", // Text on Left, Image on Right
    },
    {
      id: 2,
      title: "Our Journey",
      text: "Discover how we started, grew, and continue to make an impact.",
      btnText: "Discover more",
      image: imgJourney,
      layout: "image-left", // Image on Left, Text on Right
    },
    {
      id: 3,
      title: "Case Studies",
      text: "Explore our projects and see the results we've achieved for our clients.",
      btnText: "Explore more",
      image: imgCaseStudies,
      layout: "text-left",
    },
    {
      id: 4,
      title: "Testimonials",
      text: "See what our customers are saying about their experiences with us.",
      btnText: "Read our testimonials",
      image: imgTestimonials,
      layout: "image-left",
    },
  ];

  return (
    <div className="w-full bg-white overflow-hidden">
      
      {/* =========================================================
          PART 1: ALTERNATING FEATURE SECTIONS
      ========================================================== */}
      <div className="container mx-auto max-w-6xl px-6 py-20 space-y-24 md:space-y-32">
        
        {sections.map((section) => (
          <div 
            key={section.id} 
            className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${
              section.layout === 'image-left' ? '' : 'md:flex-row-reverse'
            }`}
          >
            
            {/* --- IMAGE SIDE --- */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg">
                <img 
                  src={section.image} 
                  alt={section.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>

            {/* --- TEXT SIDE --- */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h2 className="text-[#0F172A] text-3xl md:text-4xl lg:text-5xl font-normal mb-6">
                {section.title}
              </h2>
              <p className="text-[#475569] text-lg font-light leading-relaxed mb-10 max-w-md">
                {section.text}
              </p>
              <button className="px-8 py-2.5 rounded-full border border-[#94A3B8] text-[#0F172A] font-medium text-sm hover:bg-[#0F172A] hover:text-white transition-colors duration-300">
                {section.btnText}
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* =========================================================
          PART 2: BOTTOM BANNER (All-in-One Team)
      ========================================================== */}
     <IntegrationCard/>

    </div>
  );
};

export default CompanySections;