// src/components/pricing/PlanSelection.jsx
import React, { useState } from 'react';

// --- IMPORT ASSETS ---
import iconPulse from '../../assets/pulsenew.png';
import iconVector from '../../assets/management.png'; // Assuming this is Nexus/Vector
import iconHorizon from '../../assets/drift2.png';

// --- IMPORT THE CHILD COMPONENT ---
import SelectedPlan from './SelectedPlan'; 

const PlanSelection = () => {
  // State to track which plan is selected
  // null = show list, object = show details
  const [selectedPlan, setSelectedPlan] = useState(null);

  // Data for the plans
  const plans = [
    {
      id: 'pulse',
      name: 'Pulse',
      price: '£XXX', // You can change this to a number like 500 for calculation logic
      desc: 'Automating the busywork.',
      icon: iconPulse,
      color: 'border-[#EC4899]', // Pink
    },
    {
      id: 'vector',
      name: 'Vector',
      price: '£XXX',
      desc: 'Organises and manages the operational flow.',
      icon: iconVector,
      color: 'border-[#2DD4BF]', // Teal
    },
    {
      id: 'horizon',
      name: 'Horizon',
      price: '£XXX',
      desc: 'Elevates the business to strategic clarity and leverage.',
      icon: iconHorizon,
      color: 'border-[#60A5FA]', // Blue
    },
  ];

  // --- LOGIC: IF A PLAN IS SELECTED, SHOW THE DETAILS SCREEN ---
  if (selectedPlan) {
    return (
      <SelectedPlan 
        plan={selectedPlan} 
        onBack={() => setSelectedPlan(null)} 
      />
    );
  }

  // --- LOGIC: IF NO PLAN SELECTED, SHOW THE GRID ---
  return (
    <section className="w-full bg-[#020617] py-24 px-6 md:px-12 mt-10 min-h-screen flex flex-col justify-center">
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADER --- */}
        <div className="mb-16">
          <h2 className="text-white text-4xl md:text-5xl font-normal mb-4">
            Choose your plan
          </h2>
          <p className="text-[#94A3B8] text-lg font-light">
            Select the perfect plan for your business needs
          </p>
        </div>

        {/* --- CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {plans.map((plan) => (
            <div 
              key={plan.id}
              // CLICK HANDLER: Sets the plan and switches view
              onClick={() => setSelectedPlan(plan)}
              className={`
                rounded-3xl border ${plan.color} p-8 md:p-10 flex flex-col 
                bg-[#020617] relative group hover:bg-white/5 transition-all duration-300 
                cursor-pointer hover:scale-[1.02] hover:shadow-2xl
              `}
            >
              {/* Icon Area */}
              <div className="w-full flex justify-center mb-8 relative">
                <img src={plan.icon} alt={plan.name} className="w-24 h-24 object-contain" />
              </div>

              {/* Content */}
              <div className="mt-auto">
                <h3 className="text-white text-3xl font-normal mb-3">{plan.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 min-h-[40px]">
                  {plan.desc}
                </p>
                <span className="text-white text-4xl font-light">{plan.price}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PlanSelection;