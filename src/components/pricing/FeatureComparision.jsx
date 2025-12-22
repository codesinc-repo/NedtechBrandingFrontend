import React from 'react';

// --- IMPORT ASSETS ---
import iconPulse from '../../assets/pulse.png';
import iconVector from '../../assets/management.png';
import iconHorizon from '../../assets/drift2.png'; 

const FeatureComparison = () => {
  
  const Check = ({ color }) => (
    <div className="flex justify-center items-center w-full h-full">
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className={`w-5 h-5 ${color}`}>
        <path d="M2 8L7 13L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </div>
  );

  const features = [
    { name: "Core automations", pulse: true, vector: true, horizon: true },
    { name: "Daily task execution", pulse: true, vector: true, horizon: true },
    { name: "Standard AI workforce role", pulse: true, vector: true, horizon: true },
    { name: "Basic scheduling and posting", pulse: true, vector: true, horizon: true },
    { name: "Single workflow stream", pulse: true, vector: true, horizon: true },
    { name: "Insights lite", pulse: true, vector: true, horizon: true },
    { name: "Email support", pulse: true, vector: true, horizon: true },
    { name: "Workflow orchestration", pulse: false, vector: true, horizon: true },
    { name: "Multi-channel operations", pulse: false, vector: true, horizon: true },
    { name: "Team coordination tools", pulse: false, vector: true, horizon: true },
    { name: "SLAs, rules and triggers", pulse: false, vector: true, horizon: true },
    { name: "Reporting and dashboards", pulse: false, vector: true, horizon: true },
    { name: "Optimisation suggestions", pulse: false, vector: true, horizon: true },
    { name: "Priority email/ chat support", pulse: false, vector: true, horizon: true },
    { name: "Strategic decision support", pulse: false, vector: false, horizon: true },
    { name: "Forecasting and scenario modelling", pulse: false, vector: false, horizon: true },
    { name: "Director-level AI role capabilities", pulse: false, vector: false, horizon: true },
    { name: "Custom workflows", pulse: false, vector: false, horizon: true },
    { name: "Cross-role coordination", pulse: false, vector: false, horizon: true },
    { name: "Full analytics suite", pulse: false, vector: false, horizon: true },
    { name: "White-glove onboarding", pulse: false, vector: false, horizon: true },
    { name: "Dedicated account support", pulse: false, vector: false, horizon: true },
  ];

  return (
    <section className="w-full bg-[#020617] py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        
        {/* ================= SCROLLABLE CONTAINER ================= */}
        <div className="w-full overflow-x-auto pb-6 relative">
          
          {/* GRID LAYOUT: 
              - [180px fixed left column] 
              - [3 flexible columns for plans] 
              - Min-width ensures it doesn't crush on mobile 
          */}
          <div className="min-w-[900px] grid grid-cols-[200px_1fr_1fr_1fr] gap-4">

            {/* ================= HEADER ROW ================= */}
            
            {/* 1. Sticky Title Column */}
            <div className="sticky left-0 bg-[#020617] z-20 flex items-end pb-8 pl-2 border-r border-white/5 md:border-none shadow-[4px_0_24px_-2px_rgba(0,0,0,0.5)] md:shadow-none">
              <h3 className="text-white text-lg font-medium">Features</h3>
            </div>

            {/* 2. Pulse Card */}
            <div className="border border-[#EC4899] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
              <img src={iconPulse} alt="Pulse" className="w-10 h-10 mb-4 object-contain" />
              <h3 className="text-white text-xl font-normal mb-1">Pulse</h3>
              <p className="text-gray-400 text-[10px] mb-4 h-8 leading-tight">Automating the busywork.</p>
              <span className="text-white text-2xl font-light">£XXX</span>
            </div>

            {/* 3. Vector Card */}
            <div className="border border-[#2DD4BF] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
              <img src={iconVector} alt="Vector" className="w-10 h-10 mb-4 object-contain" />
              <h3 className="text-white text-xl font-normal mb-1">Vector</h3>
              <p className="text-gray-400 text-[10px] mb-4 h-8 leading-tight">Organises operational flow.</p>
              <span className="text-white text-2xl font-light">£XXX</span>
            </div>

            {/* 4. Horizon Card */}
            <div className="border border-[#60A5FA] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
              <img src={iconHorizon} alt="Horizon" className="w-10 h-10 mb-4 object-contain" />
              <h3 className="text-white text-xl font-normal mb-1">Horizon</h3>
              <p className="text-gray-400 text-[10px] mb-4 h-8 leading-tight">Strategic clarity & leverage.</p>
              <span className="text-white text-2xl font-light">£XXX</span>
            </div>


            {/* ================= DATA ROWS LOOP ================= */}
            {features.map((item, index) => (
              <React.Fragment key={index}>
                
                {/* 1. Feature Name (STICKY LEFT) */}
                <div className="sticky left-0 bg-[#020617] z-10 flex items-center py-4 pr-4 border-b border-white/5 border-r md:border-r-0 shadow-[4px_0_10px_-5px_rgba(0,0,0,0.5)] md:shadow-none">
                  <span className="text-gray-300 text-sm font-light leading-snug">{item.name}</span>
                </div>

                {/* 2. Pulse Check */}
                <div className="flex items-center justify-center border-b border-white/5 py-4 bg-[#020617]/50 hover:bg-white/5 transition-colors">
                  {item.pulse ? <Check color="text-[#EC4899]" /> : <span className="text-white/10">-</span>}
                </div>

                {/* 3. Vector Check */}
                <div className="flex items-center justify-center border-b border-white/5 py-4 bg-[#020617]/50 hover:bg-white/5 transition-colors">
                  {item.vector ? <Check color="text-[#2DD4BF]" /> : <span className="text-white/10">-</span>}
                </div>

                {/* 4. Horizon Check */}
                <div className="flex items-center justify-center border-b border-white/5 py-4 bg-[#020617]/50 hover:bg-white/5 transition-colors">
                  {item.horizon ? <Check color="text-[#60A5FA]" /> : <span className="text-white/10">-</span>}
                </div>

              </React.Fragment>
            ))}

          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-gray-600 text-[10px] uppercase tracking-wider px-2">
          * T&Cs Apply
        </div>

      </div>
    </section>
  );
};

export default FeatureComparison;