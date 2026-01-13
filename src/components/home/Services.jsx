import React from 'react';
// Import the 3 icons you exported
import iconPulse from '../../assets/pulsenew.png';
import iconNexus from '../../assets/nexusnew.png';
import iconHorizon from '../../assets/horizonnew.png';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  return (
    <div className="w-full flex flex-col">
      
      {/* ==============================================
          PART 1: FOUNDER STORY (Light Section)
      =============================================== */}
      <section className="w-full bg-[#E5E5E5] py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <h2 className="text-[#0F172A] text-3xl md:text-5xl font-normal leading-tight mb-8">
              Born from the chaos of scaling a small business.
            </h2>
            <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed mb-10 max-w-2xl">
              Created by NedTech AI, Helm combines deep startup experience, 
              technical expertise, and a human understanding of what makes small 
              businesses thrive.
            </p>
            <Link to="/meet">
              <button className="px-8 py-3 rounded-full border border-[#94A3B8] text-[#0F172A] font-medium text-sm hover:bg-[#0F172A] hover:text-white transition-colors duration-300">
                Find out more
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ==============================================
          PART 2: EXPLORE SERVICES (Dark Section)
      =============================================== */}
      <section className="w-full bg-[#020617] py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          
          {/* Header Row */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-20 gap-6">
            <h2 className="text-white text-3xl md:text-5xl font-normal">
              Explore our services.
            </h2>
            <Link to="/services">
              <button className="px-8 py-3 rounded-full border border-[#334155] text-white font-medium text-sm hover:bg-white hover:text-[#020617] transition-colors duration-300">
                Explore all services
              </button>
            </Link>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 text-center">
            
            {/* Service 1: Pulse */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 mb-8 transition-transform duration-500 group-hover:scale-110">
                <img src={iconPulse} alt="Pulse" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]" />
              </div>
              <h3 className="text-white text-2xl font-normal mb-4">Pulse</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-[280px]">
                Automate your daily workflows instantly. Pulse handles the repetitive tasks so your team can focus on what matters.
              </p>
             <Link 
                to="/product/pulse" 
                className="text-[#EC4899] text-sm underline underline-offset-4 hover:text-white transition-colors"
              >
                Discover Automation
              </Link>
            </div>

            {/* Service 2: Nexus */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 mb-8 transition-transform duration-500 group-hover:scale-110">
                <img src={iconNexus} alt="Nexus" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]" />
              </div>
              <h3 className="text-white text-2xl font-normal mb-4">Nexus</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-[280px]">
                The central intelligence hub. Nexus unifies your data, documents, and tools into one searchable brain for your business.
              </p>
              <a href="#" className="text-[#2DD4BF] text-sm underline underline-offset-4 hover:text-white transition-colors">
                Launching soon
              </a>
            </div>

            {/* Service 3: Horizon */}
            <div className="flex flex-col items-center group cursor-pointer">
              <div className="w-32 h-32 mb-8 transition-transform duration-500 group-hover:scale-110">
                <img src={iconHorizon} alt="Horizon" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
              </div>
              <h3 className="text-white text-2xl font-normal mb-4">Horizon</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 max-w-[280px]">
                See around corners with predictive AI. Horizon analyzes market trends to help you plot your next strategic move.
              </p>
              <a href="#" className="text-[#60A5FA] text-sm underline underline-offset-4 hover:text-white transition-colors">
                Launching soon
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ==============================================
          PART 3: CORE FEATURES (White Section)
      =============================================== */}
      <section className="w-full bg-white py-24 px-6 md:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h2 className="text-[#0F172A] text-4xl md:text-5xl font-normal leading-tight mb-6">
              Core Features <br />
              & Integrations
            </h2>
            <p className="text-[#475569] text-lg md:text-xl font-light leading-relaxed mb-10">
              NedTech.ai brings all your essential tools and AI employees 
              together in one place.
            </p>
            <Link to="/features">
              <button className="px-8 py-3 rounded-full border border-[#0F172A] text-[#0F172A] font-medium text-sm hover:bg-[#0F172A] hover:text-white transition-colors duration-300">
                Explore features
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ServicesSection;