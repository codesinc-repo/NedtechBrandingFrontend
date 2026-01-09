import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // 1. Import Navigation Hook

// --- IMPORT ASSETS ---
import iconPulse from '../../assets/pulsenew.png';
import iconVector from '../../assets/management.png';
import iconHorizon from '../../assets/drift2.png'; 

const SelectedPlan = () => {
  const navigate = useNavigate(); // 2. Initialize Navigation

  // --- STATE FOR CHECKBOXES ---
  const [selectedServices, setSelectedServices] = useState(['m1']); 

  // Toggle Function
  const toggleService = (id) => {
    if (selectedServices.includes(id)) {
      setSelectedServices(selectedServices.filter(item => item !== id));
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // --- CONFIGURATION ---
  const includedServices = [
    { name: "Flux (Social media)", icon: iconPulse },
    { name: "Summit (Customer success)", icon: iconPulse },
    { name: "Drift (Email marketing)", icon: iconPulse },
    { name: "Signal (Copywriting)", icon: iconPulse },
    { name: "Atlas (Virtual assistant)", icon: iconPulse },
  ];

  const managementServices = [
    { id: 'm1', name: "Flux (Social media)", icon: iconVector },
    { id: 'm2', name: "Drift (Email marketing)", icon: iconVector },
    { id: 'm3', name: "Atlas (Virtual assistant)", icon: iconVector },
    { id: 'm4', name: "Summit (Customer success)", icon: iconVector },
    { id: 'm5', name: "Signal (Copywriting)", icon: iconVector },
  ];

  const directorServices = [
    { id: 'd1', name: "Flux (Social media)", icon: iconHorizon },
    { id: 'd2', name: "Drift (Email marketing)", icon: iconHorizon },
    { id: 'd3', name: "Atlas (Virtual assistant)", icon: iconHorizon },
    { id: 'd4', name: "Summit (Customer success)", icon: iconHorizon },
    { id: 'd5', name: "Signal (Copywriting)", icon: iconHorizon },
  ];

  // Checkbox Component (Visual Only)
  const Checkbox = ({ checked }) => (
    <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${
      checked ? 'bg-transparent border-white' : 'border-gray-600'
    }`}>
      {checked && (
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M10 2L4.5 7.5L2 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </div>
  );

  return (
    <section className="w-full bg-[#020617] pt-28 pb-24 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        
        {/* ================= SECTION 1: SELECTED PLAN CARD ================= */}
        <h2 className="text-white text-3xl font-medium mb-6">Selected plan</h2>
        
        <div className="w-full border border-[#EC4899] rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row gap-12 lg:gap-24 mb-16 bg-[#020617]">
          
          {/* --- LEFT: PLAN INFO --- */}
          <div className="flex flex-col items-start w-full lg:w-1/3 border-b lg:border-b-0 lg:border-r border-white/10 pb-8 lg:pb-0 lg:pr-8">
            <img src={iconPulse} alt="Pulse" className="w-32 h-32 mb-6 object-contain" />
            
            <h3 className="text-white text-3xl font-normal mb-2">Pulse</h3>
            <span className="text-white text-4xl font-light mb-4 block">£XXX</span>
            <p className="text-gray-400 text-sm">Automating the busywork.</p>
          </div>

          {/* --- RIGHT: INCLUDED SERVICES --- */}
          <div className="flex flex-col w-full lg:w-2/3">
            <h4 className="text-white text-lg font-light mb-8">Included services</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
              {includedServices.map((service, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-10 h-10 flex-shrink-0">
                      <img src={service.icon} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-gray-300 text-sm font-light">{service.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>


        {/* ================= SECTION 2: SELECT EXTRA SERVICES ================= */}
        <h2 className="text-white text-3xl font-medium mb-10">Select extra services</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32">
          
          {/* --- COL 1: MANAGEMENT (Teal) --- */}
          <div>
            <h3 className="text-white text-2xl font-light mb-8">Management</h3>
            <div className="flex flex-col gap-6">
              {managementServices.map((service) => {
                const isChecked = selectedServices.includes(service.id);
                return (
                  <div 
                    key={service.id} 
                    onClick={() => toggleService(service.id)}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <Checkbox checked={isChecked} />
                    <div className="w-10 h-10 flex-shrink-0">
                      <img src={service.icon} alt="" className="w-full h-full object-contain filter hue-rotate-[140deg] brightness-125" /> 
                    </div>
                    <span className={`text-sm font-light transition-colors ${isChecked ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* --- COL 2: DIRECTOR (Blue) --- */}
          <div>
            <h3 className="text-white text-2xl font-light mb-8">Director</h3>
            <div className="flex flex-col gap-6">
              {directorServices.map((service) => {
                const isChecked = selectedServices.includes(service.id);
                return (
                  <div 
                    key={service.id} 
                    onClick={() => toggleService(service.id)}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    <Checkbox checked={isChecked} />
                    <div className="w-10 h-10 flex-shrink-0">
                      <img src={service.icon} alt="" className="w-full h-full object-contain filter hue-rotate-[200deg] brightness-110" />
                    </div>
                    <span className={`text-sm font-light transition-colors ${isChecked ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'}`}>
                      {service.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* ================= SECTION 3: NEXT BUTTON ================= */}
        <div className="mt-20 flex justify-end">
          <button 
            onClick={() => navigate('/payment')} // Navigate to payment
            className="bg-[#7B5eea] hover:bg-[#6a4ed0] text-white px-10 py-3.5 rounded-full font-medium text-lg transition-all shadow-lg shadow-purple-900/40"
          >
            Proceed to Payment &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};

export default SelectedPlan;