import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react'; 

// Import Images
import imgFlux from '../assets/pulse2.png';
import imgSignal from '../assets/pulse3.png';
import imgSummit from '../assets/pulse4.png';
import imgAtlas from '../assets/pulse5.png';
import imgDrift from '../assets/pulse6.png';
import imgNexus from '../assets/nexus.png';
import imgHorizon from '../assets/horizon.png';
import imgPulse from '../assets/pulse.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState('Pulse');
  const location = useLocation();

  // --- NAVIGATION CONFIGURATION (Links Added) ---
  const navLinks = [
    { 
      name: 'Product', 
      path: '/product', 
      type: 'dropdown',
      subItems: [
        { 
          name: 'Pulse', 
          path: '/product/pulse', 
          icon: imgPulse, 
          badge: null,
          description: "Automating the busywork.",
          models: [
            // ADDED PATHS HERE
            { name: 'Flux', icon: imgFlux, desc: 'Social media', path: '/product/flux' },
            { name: 'Drift', icon: imgDrift, desc: 'Email marketing', path: '/product/drift' },
            { name: 'Summit', icon: imgSummit, desc: 'Customer success', path: '/product/summit' },
            { name: 'Atlas', icon: imgAtlas, desc: 'Virtual assistant', path: '/product/atlas' },
            { name: 'Signal', icon: imgSignal, desc: 'Copywriting', path: '/product/signal' },
          ]
        },
        { 
          name: 'Nexus', 
          path: '/product/nexus', 
          icon: imgNexus, 
          badge: 'Coming Soon',
          description: "Organises operational flow.",
          models: [] 
        },
        { 
          name: 'Horizon', 
          path: '/product/horizon', 
          icon: imgHorizon, 
          badge: 'Coming Soon',
          description: "Strategic clarity and leverage.",
          models: [] 
        }
      ]
    },
    { name: 'About us', path: '/about', type: 'link' },
    { name: 'Meet the team', path: '/meet', type: 'link' },
    { name: 'Pricing', path: '/pricing', type: 'link' },
    { name: 'Resources', path: '/resources', type: 'link' },
    { name: 'Contact', path: '/contact', type: 'link' },
    { name: 'Login', path: '/login', type: 'link', className: 'ml-4' }, 
    { name: 'Start free trial', path: '/signup', type: 'link' },
  ];

  const checkActive = (path) => location.pathname === path;
  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-center relative">
        
        {/* CENTER NAVIGATION */}
        <div className="hidden lg:flex items-center justify-center">
          <ul className="flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);
              const isDropdown = link.type === 'dropdown';

              return (
                <li key={link.name} className="relative group h-full flex items-center">
                  <Link 
                    to={link.path}
                    className={`flex items-center gap-1 text-[13px] xl:text-sm font-medium transition-colors cursor-pointer py-2
                      ${isActive ? 'text-white' : 'text-slate-300 hover:text-white'}
                      ${link.className || ''}
                    `}
                    onMouseEnter={() => isDropdown && setHoveredProduct('Pulse')}
                  >
                    {link.name}
                    {isDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* MEGA MENU */}
                  {isDropdown && (
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[600px]">
                      
                      <div className="bg-[#0B0F19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex">
                        
                        {/* LEFT COLUMN */}
                        <div className="w-1/2 p-2 border-r border-white/5 flex flex-col gap-1 bg-white/[0.02]">
                          {link.subItems.map((sub) => (
                            <Link 
                              key={sub.name} 
                              to={sub.path}
                              onMouseEnter={() => setHoveredProduct(sub.name)}
                              className={`
                                px-4 py-3 rounded-xl flex items-start gap-3 transition-all
                                ${hoveredProduct === sub.name ? 'bg-white/10' : 'hover:bg-white/5'}
                              `}
                            >
                              <div className={`mt-1 p-1.5 rounded-lg ${hoveredProduct === sub.name ? 'bg-[#7B5eea]/20' : 'bg-white/5'}`}>
                                <img src={sub.icon} alt={sub.name} className="w-5 h-5 object-contain" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-white text-sm font-medium">{sub.name}</span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#7B5eea]/20 text-[#9F85FF] px-1.5 py-0.5 rounded-[4px]">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 leading-tight mt-1">{sub.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT COLUMN (MODELS) */}
                        <div className="w-1/2 p-4 bg-[#020617]">
                          <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3">
                            {hoveredProduct} Models
                          </h4>
                          
                          {link.subItems.find(item => item.name === hoveredProduct)?.models.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {link.subItems.find(item => item.name === hoveredProduct).models.map((model) => (
                                // CHANGE: Replaced 'div' with 'Link' and added 'to={model.path}'
                                <Link 
                                  key={model.name} 
                                  to={model.path}
                                  className="flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg cursor-pointer group/model"
                                >
                                  <img 
                                    src={model.icon} 
                                    alt={model.name} 
                                    className="w-4 h-4 object-contain opacity-70 group-hover/model:opacity-100 transition-opacity" 
                                  />
                                  <div className="flex flex-col">
                                    <span className="text-slate-300 text-xs font-medium group-hover/model:text-white">{model.name}</span>
                                    <span className="text-[10px] text-slate-500">{model.desc}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="h-full flex items-center justify-center text-slate-600 text-xs italic">
                              No models available yet.
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Founding 50 Button */}
        <div className="hidden lg:flex items-center absolute right-6">
          <Link to="/found50">
            <button className="px-5 py-2 rounded-full border border-[#7B5eea] text-white text-[13px] font-medium hover:bg-[#7B5eea]/10 transition-all shadow-[0_0_15px_rgba(123,94,234,0.15)] whitespace-nowrap">
              Join the Helm Founding 50
            </button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex lg:hidden absolute right-6">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-white/10 rounded-lg transition">
             {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#020617] border-b border-white/10 shadow-2xl p-6 flex flex-col gap-6 lg:hidden animate-in slide-in-from-top-5 max-h-[calc(100vh-80px)] overflow-y-auto">
           <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);
              const isDropdown = link.type === 'dropdown';
              const isDropdownOpen = mobileDropdownOpen === link.name;

              return (
                <li key={link.name} className="border-b border-white/5 pb-2">
                  <div className="flex items-center justify-between">
                    <Link 
                      to={link.path}
                      onClick={() => !isDropdown && setIsMobileMenuOpen(false)}
                      className={`text-lg font-medium ${isActive ? 'text-[#7B5eea]' : 'text-slate-300'}`}
                    >
                      {link.name}
                    </Link>
                    {isDropdown && (
                      <button onClick={() => toggleMobileDropdown(link.name)} className="p-2 text-slate-400">
                         <ChevronDown className={`w-5 h-5 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>

                  {/* Mobile Sub-Items */}
                  {isDropdown && isDropdownOpen && (
                    <div className="pl-4 mt-3 flex flex-col gap-3 bg-white/5 rounded-lg p-3">
                      {link.subItems.map((sub) => (
                        <div key={sub.name}>
                          <Link 
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-white font-medium flex items-center gap-2 mb-2"
                          >
                             <img src={sub.icon} alt={sub.name} className="w-4 h-4 object-contain" />
                             {sub.name}
                             {sub.badge && <span className="text-[9px] bg-[#7B5eea]/20 text-[#9F85FF] px-1 rounded">{sub.badge}</span>}
                          </Link>
                          
                          {/* CHANGE: Mobile Models List also uses Links now */}
                          {sub.models && sub.models.length > 0 && (
                             <div className="pl-6 flex flex-col gap-2 mb-3 border-l border-white/10 ml-2">
                                {sub.models.map(m => (
                                  <Link 
                                    key={m.name} 
                                    to={m.path} // <--- Added Path
                                    onClick={() => setIsMobileMenuOpen(false)} // <--- Close menu on click
                                    className="flex items-center gap-2"
                                  >
                                    <img src={m.icon} alt={m.name} className="w-3 h-3 object-contain opacity-50" />
                                    <span className="text-xs text-slate-400">{m.name}</span>
                                  </Link>
                                ))}
                             </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
           </ul>

           <div className="pt-2">
              <Link to="/founding-50" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full py-3 rounded-full border border-[#7B5eea] text-white font-medium hover:bg-[#7B5eea]/10">
                  Join the Helm Founding 50
                </button>
              </Link>
           </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;