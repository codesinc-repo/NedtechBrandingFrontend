import React from 'react';
// Import the logo grid image you exported
import integrationLogos from '../../assets/integrations-logos.png';

const PricingSection = ({ theme = 'dark' }) => {
  // --- THEME CONFIGURATION ---
  const isDark = theme === 'dark';

  // Define colors based on the theme prop
  const styles = {
    sectionBg: isDark ? 'bg-[#020617]' : 'bg-[#F3F4F6]', // Navy vs Light Gray
    heading: isDark ? 'text-white' : 'text-[#0F172A]',
    subheading: isDark ? 'text-slate-400' : 'text-slate-600',
    
    // Standard Card (Pulse/Horizon) Styles
    cardBg: isDark ? 'bg-transparent' : 'bg-white',
    cardBorder: isDark ? 'border border-slate-700' : 'border border-slate-200',
    cardTextMain: isDark ? 'text-white' : 'text-[#0F172A]',
    cardTextMuted: isDark ? 'text-slate-400' : 'text-slate-500',
    btnBorder: isDark ? 'border-slate-600 text-white hover:bg-white/5' : 'border-slate-300 text-[#0F172A] hover:bg-slate-50',
  };

  const plans = [
    {
      name: "Pulse",
      priceMonth: "75",
      priceYear: "4",
      highlight: false,
    },
    {
      name: "Nexus",
      priceMonth: "16",
      priceYear: "65",
      highlight: true, // This is the middle purple card
    },
    {
      name: "Horizon",
      priceMonth: "99",
      priceYear: "999",
      highlight: false,
    },
  ];

  return (
    <section className={`w-full py-20 px-6 overflow-hidden ${styles.sectionBg} transition-colors duration-300`}>
      <div className="container mx-auto max-w-6xl">
        
        {/* --- HEADINGS --- */}
        <div className="text-center mb-16">
          <h2 className={`text-3xl md:text-4xl font-normal mb-4 ${styles.heading}`}>
            Simple, transparent pricing
          </h2>
          <p className={`text-lg ${styles.subheading}`}>
            One plan with everything you need to supercharge your business
          </p>
        </div>

        {/* --- PRICING CARDS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-24 relative z-10">
          
          {plans.map((plan, index) => {
            // Determine if this specific card is the Highlighted one (Nexus)
            const isHighlight = plan.highlight;

            return (
              <div 
                key={index}
                className={`
                  relative rounded-3xl p-8 flex flex-col items-center text-center transition-transform hover:-translate-y-2 duration-300
                  ${isHighlight 
                    ? 'bg-[#7C3AED] shadow-2xl shadow-purple-900/40 text-white transform md:scale-105 z-10 border border-transparent' 
                    : `${styles.cardBg} ${styles.cardBorder} shadow-sm`
                  }
                `}
              >
                {/* Plan Name */}
                <h3 className={`text-xl font-normal mb-6 ${isHighlight ? 'text-white' : styles.cardTextMain}`}>
                  {plan.name}
                </h3>

                {/* Price Month */}
                <div className={`flex items-baseline justify-center mb-1 ${isHighlight ? 'text-white' : styles.cardTextMain}`}>
                  <span className="text-4xl md:text-5xl font-light">$</span>
                  <span className="text-5xl md:text-6xl font-normal mx-1">{plan.priceMonth}</span>
                  <span className={`text-lg font-light ${isHighlight ? 'text-purple-200' : styles.cardTextMain}`}>/month</span>
                </div>

                {/* Price Year */}
                <div className={`flex items-baseline justify-center mb-8 ${isHighlight ? 'text-white' : styles.cardTextMain}`}>
                  <span className="text-2xl font-light">$</span>
                  <span className="text-3xl font-normal mx-1">{plan.priceYear}</span>
                  <span className={`text-sm font-light ${isHighlight ? 'text-purple-200' : styles.cardTextMain}`}>/year</span>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed mb-10 max-w-[200px] ${isHighlight ? 'text-purple-100' : styles.cardTextMuted}`}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sit amet ornare dolor.
                </p>

                {/* Button */}
                <button 
                  className={`
                    mt-auto px-8 py-2.5 rounded-full text-sm font-medium transition-colors border
                    ${isHighlight 
                      ? 'border-white/30 text-white hover:bg-white/10' 
                      : styles.btnBorder
                    }
                  `}
                >
                  Choose plan
                </button>
              </div>
            );
          })}
        </div>

        {/* --- BOTTOM BANNER (All-in-One Team) --- */}
        {/* This component looks the same in both dark and light versions */}
        <div className="w-full rounded-[32px] overflow-hidden flex flex-col md:flex-row shadow-2xl">
          
          {/* Left Side: Purple Gradient */}
          <div className="w-full md:w-1/2 bg-gradient-to-br from-[#1e1b4b] to-[#5b21b6] p-10 md:p-14 flex flex-col justify-center">
            <h3 className="text-white text-3xl md:text-4xl font-normal mb-6 leading-tight">
              All-in-One AI Team for <br /> Your Business
            </h3>
            <p className="text-purple-200 text-sm md:text-base leading-relaxed max-w-md">
              We've got every role covered - from social media and customer service to copywriting, email marketing.
            </p>
          </div>

          {/* Right Side: Logos Grid */}
          <div className="w-full md:w-1/2 bg-white flex items-center justify-center p-8 md:p-0">
             {/* Use the exported image here to ensure pixel-perfect layout of logos */}
            <img 
              src={integrationLogos} 
              alt="Integration Partners: Google, Mailchimp, Zapier, Slack" 
              className="max-w-[80%] h-auto object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default PricingSection;