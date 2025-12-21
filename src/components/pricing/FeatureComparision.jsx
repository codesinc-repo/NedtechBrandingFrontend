import React from 'react';

// --- IMPORT ASSETS ---
import iconPulse from '../../assets/pulse.png';
import iconVector from '../../assets/management.png';
import iconHorizon from '../../assets/drift2.png';  

const FeatureComparison = () => {
  
  // --- CONFIGURATION ---
  // Simple checkmark component that changes color based on the plan
  const Check = ({ color }) => (
    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" className={`w-5 h-5 ${color}`}>
      <path d="M2 8L7 13L18 2" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  // The full list of features exactly as shown in the image
  const features = [
    { name: "Core automations", pulse: true, vector: true, horizon: true },
    { name: "Daily task execution", pulse: true, vector: true, horizon: true },
    { name: "Standard AI workforce role", pulse: true, vector: true, horizon: true },
    { name: "Basic scheduling and posting", pulse: true, vector: true, horizon: true },
    { name: "Single workflow stream", pulse: true, vector: true, horizon: true },
    { name: "Insights lite", pulse: true, vector: true, horizon: true },
    { name: "Email support", pulse: true, vector: true, horizon: true },
    // Divider line usually appears here in design logic, but we'll stick to a continuous list with spacing
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
    <section className="w-full bg-[#020617] py-24 px-4 md:px-8 lg:px-12">
      <div className="container mx-auto max-w-6xl">
        
        {/* ================= HEADER ROW (Cards) ================= */}
        <div className="grid grid-cols-4 gap-4 mb-12">
          
          {/* Empty First Col */}
          <div className="hidden md:flex flex-col justify-end pb-8">
            <h3 className="text-white text-lg font-medium">Features</h3>
          </div>

          {/* Pulse Card */}
          <div className="col-span-1 border border-[#EC4899] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
            <img src={iconPulse} alt="Pulse" className="w-12 h-12 mb-4 object-contain" />
            <h3 className="text-white text-2xl font-normal mb-2">Pulse</h3>
            <p className="text-gray-400 text-xs mb-6 h-10">Automating the busywork.</p>
            <span className="text-white text-3xl font-light">£XXX</span>
          </div>

          {/* Vector Card */}
          <div className="col-span-1 border border-[#2DD4BF] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
            <img src={iconVector} alt="Vector" className="w-12 h-12 mb-4 object-contain" />
            <h3 className="text-white text-2xl font-normal mb-2">Vector</h3>
            <p className="text-gray-400 text-xs mb-6 h-10">organises and manages the operational flow</p>
            <span className="text-white text-3xl font-light">£XXX</span>
          </div>

          {/* Horizon Card */}
          <div className="col-span-1 border border-[#60A5FA] rounded-2xl p-6 flex flex-col items-start bg-[#020617] relative">
            <img src={iconHorizon} alt="Horizon" className="w-12 h-12 mb-4 object-contain" />
            <h3 className="text-white text-2xl font-normal mb-2">Horizon</h3>
            <p className="text-gray-400 text-xs mb-6 h-10">Elevates the business to strategic clarity and leverage.</p>
            <span className="text-white text-3xl font-light">£XXX</span>
          </div>
        </div>

        {/* ================= TABLE ROWS ================= */}
        <div className="flex flex-col">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="grid grid-cols-4 gap-4 border-b border-white/10 py-5 items-center hover:bg-white/5 transition-colors"
            >
              {/* Feature Name */}
              <div className="col-span-4 md:col-span-1 pl-2">
                <span className="text-gray-300 text-sm font-light">{item.name}</span>
              </div>

              {/* Pulse Check */}
              <div className="col-span-1 flex justify-center md:justify-start md:pl-8">
                {item.pulse && <Check color="text-[#EC4899]" />}
              </div>

              {/* Vector Check */}
              <div className="col-span-1 flex justify-center md:justify-start md:pl-8">
                {item.vector && <Check color="text-[#2DD4BF]" />}
              </div>

              {/* Horizon Check */}
              <div className="col-span-1 flex justify-center md:justify-start md:pl-8">
                {item.horizon && <Check color="text-[#60A5FA]" />}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-gray-600 text-[10px] uppercase tracking-wider">
          T&Cs Apply
        </div>

      </div>
    </section>
  );
};

export default FeatureComparison;