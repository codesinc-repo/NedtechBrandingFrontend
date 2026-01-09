import React from "react";

// --- Asset Imports ---
// This assumes you have exported your Figma assets to these paths.
// If you haven't exported them yet, these lines will need the actual files to work.

// Pulse Assets
import PulseHero from "../../assets/pulsenew.png";
import PulseFlux from "../../assets/fluxnew.png";
import PulseSummit from "../../assets/summitnew.png";
import PulseDrift from "../../assets/driftnew.png";
import PulseSignal from "../../assets/signalnew.png";
import PulseAtlas from "../../assets/atlasnew.png";

// Management Assets
import MgmtHero from "../../assets/management.png";
import MgmtFlux from "../../assets/fluxnew.png";
import MgmtSummit from "../../assets/summitnew.png";
import MgmtDrift from "../../assets/driftnew.png";
import MgmtSignal from "../../assets/signalnew.png";
import MgmtAtlas from "../../assets/atlasnew.png";

// Director Assets
import DirectorHero from "../../assets/director.png";
import DirectorFlux from "../../assets/flux2.png";
import DirectorSummit from "../../assets/summit2.png";
import DirectorDrift from "../../assets/drift2.png";
import DirectorSignal from "../../assets/signal2.png";
import DirectorAtlas from "../../assets/altas2.png";

// --- Data Configuration ---
const SECTIONS = [
  {
    id: "pulse",
    title: "Pulse",
    heroImage: PulseHero,
    ctaText: "Discover Automation",
    themeColor: "text-fuchsia-300 border-fuchsia-300", // Tailwind color for the Pink/Purple
    features: [
      { icon: PulseFlux, label: "Flux", sub: "Social media" },
      { icon: PulseSummit, label: "Summit", sub: "Customer success" },
      { icon: PulseDrift, label: "Drift", sub: "Email marketing" },
      { icon: PulseSignal, label: "Signal", sub: "Copywriting" },
      { icon: PulseAtlas, label: "Atlas", sub: "Virtual assistant" },
    ],
  },
  {
    id: "management",
    title: "Management",
    heroImage: MgmtHero,
    ctaText: "Launching soon",
    themeColor: "text-cyan-400 border-cyan-400", // Tailwind color for the Cyan
    features: [
      { icon: MgmtFlux, label: "Flux", sub: "Social media" },
      { icon: MgmtSummit, label: "Summit", sub: "Customer success" },
      { icon: MgmtDrift, label: "Drift", sub: "Email marketing" },
      { icon: MgmtSignal, label: "Signal", sub: "Copywriting" },
      { icon: MgmtAtlas, label: "Atlas", sub: "Virtual assistant" },
    ],
  },
  {
    id: "director",
    title: "Director",
    heroImage: DirectorHero,
    ctaText: "Launching soon",
    themeColor: "text-indigo-400 border-indigo-400", // Tailwind color for the Blue
    features: [
      { icon: DirectorFlux, label: "Flux", sub: "Social media" },
      { icon: DirectorSummit, label: "Summit", sub: "Customer success" },
      { icon: DirectorDrift, label: "Drift", sub: "Email marketing" },
      { icon: DirectorSignal, label: "Signal", sub: "Copywriting" },
      { icon: DirectorAtlas, label: "Atlas", sub: "Virtual assistant" },
    ],
  },
];

// --- Components ---

const FeatureItem = ({ icon, label, sub }) => (
  <div className="flex items-center gap-5 group cursor-pointer">
    {/* Icon Container - Fixed width to ensure alignment */}
    <div className="w-10 h-10 flex-shrink-0 flex items-center justify-center">
      <img 
        src={icon} 
        alt={label} 
        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
      />
    </div>
    
    {/* Text Content */}
    <div className="flex flex-col">
      <div className="text-gray-200 text-sm font-medium tracking-wide">
        {label} <span className="text-gray-500 font-normal mx-1">|</span> <span className="text-gray-500 font-normal">{sub}</span>
      </div>
    </div>
  </div>
);

const SectionBlock = ({ data }) => {
  return (
    <div className="w-full border-b border-white/10 py-16 last:border-none">
      <div className="flex flex-col md:flex-row">
        
        {/* LEFT COLUMN: Title & Hero */}
        <div className="w-full md:w-1/3 flex flex-col items-start pr-8">
          {/* Section Title */}
          <h2 className="text-3xl font-light text-white tracking-wide mb-10">
            {data.title}
          </h2>

          {/* Hero Image */}
          <div className="mb-10 w-full max-w-[200px]">
             <img 
               src={data.heroImage} 
               alt={`${data.title} Hero`} 
               className="w-full h-auto object-contain animate-spin-slow" 
               style={{ animationDuration: '40s' }} // Slow rotation effect matches the vibe
             />
          </div>

          {/* Call to Action Link */}
          <a 
            href="#" 
            className={`text-sm uppercase tracking-widest border-b pb-1 ${data.themeColor} opacity-90 hover:opacity-100 transition-opacity`}
          >
            {data.ctaText}
          </a>
        </div>

        {/* RIGHT COLUMN: Feature Grid */}
        <div className="w-full md:w-2/3 mt-12 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-12 gap-x-8">
            {data.features.map((feature, idx) => (
              <FeatureItem 
                key={idx} 
                icon={feature.icon} 
                label={feature.label} 
                sub={feature.sub} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main App Component ---

const App = () => {
  return (
    <div className="min-h-screen bg-[#080811] px-6 py-12 font-sans antialiased selection:bg-white/20">
      <div className="max-w-6xl mx-auto">
        {SECTIONS.map((section) => (
          <SectionBlock key={section.id} data={section} />
        ))}
      </div>
    </div>
  );
};

export default App;