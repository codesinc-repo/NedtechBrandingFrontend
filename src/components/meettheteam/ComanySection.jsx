import React from 'react';

// --- IMPORT ASSETS ---
import founderPhoto from '../../assets/meet-card.png'; 
import helmCardDark from '../../assets/helm-dark.png';

const FoundingMembers = () => {
  
  // Data for the 3 member profiles
  const profiles = [
    {
      id: 1,
      name: "Name Name",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: founderPhoto,
      layout: "text-left", // Text Left, Image Right
    },
    {
      id: 2,
      name: "Name Name",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: founderPhoto,
      layout: "image-left", // Image Left, Text Right
    },
    {
      id: 3,
      name: "Name Name",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
      image: founderPhoto,
      layout: "text-left", // Text Left, Image Right
    },
  ];

  return (
    <section className="w-full bg-white py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl space-y-24 md:space-y-32">
        
        {/* =========================================================
            PART 1: MEMBER PROFILES (Alternating Layout)
        ========================================================== */}
        {profiles.map((profile) => (
          <div 
            key={profile.id} 
            className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 ${
              profile.layout === 'image-left' ? '' : 'md:flex-row-reverse'
            }`}
          >
            
            {/* --- IMAGE SIDE --- */}
            <div className="w-full md:w-1/2">
              <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-sm">
                <img 
                  src={profile.image} 
                  alt={profile.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* --- TEXT SIDE --- */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h3 className="text-[#0F172A] text-2xl md:text-3xl font-normal mb-6">
                {profile.name}
              </h3>
              <p className="text-[#64748B] text-sm leading-relaxed mb-6 font-light">
                {profile.bio}
              </p>
              <p className="text-[#94A3B8] text-xs leading-relaxed max-w-xs">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
            </div>

          </div>
        ))}

        {/* =========================================================
            PART 2: "THE FOUNDING 50" BLOCK (Unique Layout)
        ========================================================== */}
        <div className="flex flex-col md:flex-row items-center gap-10 lg:gap-20">
          
          {/* --- LEFT: DARK CARD IMAGE --- */}
          <div className="w-full md:w-1/2">
             <div className="w-full h-[300px] md:h-[350px] lg:h-[400px] rounded-3xl overflow-hidden shadow-xl">
               {/* Use the exported dark card image here to match the design exactly */}
               <img 
                 src={helmCardDark} 
                 alt="Helm Founding 50" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          {/* --- RIGHT: TEXT & CTA --- */}
          <div className="w-full md:w-1/2 flex flex-col items-start text-left">
            <h3 className="text-[#0F172A] text-2xl md:text-3xl font-normal mb-6">
              The Founding 50
            </h3>
            <p className="text-[#64748B] text-sm leading-relaxed mb-8 font-light max-w-sm">
              Our 50 founders shaping the future of work. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            <button className="px-8 py-3 rounded-full bg-[#7C3AED] text-white font-medium text-sm hover:bg-[#6D28D9] transition-all shadow-lg shadow-purple-500/30">
              Find out more
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default FoundingMembers;