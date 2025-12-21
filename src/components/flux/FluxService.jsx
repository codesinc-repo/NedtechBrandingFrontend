import React from 'react';
import { Link } from 'react-router-dom';

// --- IMPORT ASSETS ---
// Ensure you export the PINK versions of these icons from Figma
import iconFlux from "../../assets/flux.png";
import iconSummit from "../../assets/summit.png";
import iconDrift from "../../assets/drift.png";
import iconSignal from "../../assets/signal.png";
import iconAtlas from "../../assets/altas.png";

const PulseRelatedServices = () => {
  
  const services = [
    {
      id: 1,
      name: "Drift (Email marketing)",
      icon: iconDrift,
      path: "/product/pulse/drift" // Example route
    },
    {
      id: 2,
      name: "Atlas (Virtual assistant)",
      icon: iconAtlas,
      path: "/product/pulse/atlas"
    },
    {
      id: 3,
      name: "Summit (Customer success)",
      icon: iconSummit,
      path: "/product/pulse/summit"
    },
    {
      id: 4,
      name: "Signal (Copywriting)",
      icon: iconSignal,
      path: "/product/pulse/signal"
    }
  ];

  return (
    <section className="w-full bg-[#020617] py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- ICONS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={service.path}
              className="flex flex-col items-center group cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-32 h-32 md:w-40 md:h-40 mb-6 transition-transform duration-500 group-hover:scale-110">
                <img 
                  src={service.icon} 
                  alt={service.name} 
                  className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(236,72,153,0.2)]" 
                />
              </div>
              
              {/* Service Name */}
              <h3 className="text-white text-lg md:text-xl font-light text-center group-hover:text-[#EC4899] transition-colors">
                {service.name}
              </h3>
            </Link>
          ))}

        </div>

        {/* --- BOTTOM LINK --- */}
        <div className="flex justify-center">
          <Link 
            to="/product/pulse"
            className="text-white text-lg font-light border-b border-[#EC4899] pb-1 hover:text-[#EC4899] transition-colors"
          >
            Discover Pulse
          </Link>
        </div>

      </div>
    </section>
  );
};

export default PulseRelatedServices;