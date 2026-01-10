import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

// Import Images
import imgFlux from '../assets/fluxnew.png';
import imgSignal from '../assets/signalnew.png';
import imgSummit from '../assets/summitnew.png';
import imgAtlas from '../assets/driftnew.png';
import imgDrift from '../assets/driftnew.png';
import imgNexus from '../assets/nexusnew.png';
import imgHorizon from '../assets/horizonnew.png';
import imgPulse from '../assets/pulsenew.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState('Pulse');
  const location = useLocation();

  // --- NAVIGATION CONFIGURATION ---
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
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-[650px]">

                      <div className="bg-[#0B0F19] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex">

                        {/* LEFT COLUMN (Pulse, Nexus, etc.) */}
                        <div className="w-1/2 p-3 border-r border-white/5 flex flex-col gap-2 bg-black/[0.2]">
                          {link.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.path}
                              onMouseEnter={() => setHoveredProduct(sub.name)}
                              className={`
                                px-4 py-4 rounded-xl flex items-start transition-all group/item
                                ${hoveredProduct === sub.name ? 'bg-white/5 border border-white/5' : 'border border-transparent hover:bg-white/[0.02]'}
                              `}
                            >
                              {/* --- CHANGE 1: NO BOX, BIGGER ICON --- */}
                              {/* Removed bg-black container. Used flex-shrink-0 so it doesn't squash. Added mr-4 for spacing. */}
                              <div className="flex-shrink-0 mr-4 self-start mt-0.5">
                                <img
                                  src={sub.icon}
                                  alt={sub.name}
                                  // Increased size to w-14 h-14. Added drop-shadow-sm for slight pop.
                                  className="w-14 h-14 object-contain drop-shadow-sm transition-transform group-hover/item:scale-105"
                                />
                              </div>
                              {/* ------------------------------------- */}

                              <div>
                                <div className="flex items-center gap-2">
                                  <span className={`text-[15px] font-semibold transition-colors ${hoveredProduct === sub.name ? 'text-white' : 'text-slate-200'}`}>
                                    {sub.name}
                                  </span>
                                  {sub.badge && (
                                    <span className="text-[9px] font-bold uppercase tracking-wider bg-[#7B5eea]/20 text-[#9F85FF] px-1.5 py-0.5 rounded-[4px] border border-[#7B5eea]/20">
                                      {sub.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-400 leading-snug mt-1 font-medium">{sub.description}</p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* RIGHT COLUMN (Models - Flux, Drift, etc.) */}
                        <div className="w-1/2 p-4 bg-black/[0.2] flex flex-col">
                          <h4 className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-3 pl-2">
                            {hoveredProduct} Models
                          </h4>

                          {link.subItems.find(item => item.name === hoveredProduct)?.models.length > 0 ? (
                            <div className="flex flex-col gap-2">
                              {link.subItems.find(item => item.name === hoveredProduct).models.map((model) => (
                                <Link
                                  key={model.name}
                                  to={model.path}
                                  className="
                                    flex items-center p-3 rounded-xl cursor-pointer group/model transition-all duration-200
                                    hover:bg-white/5 border border-transparent hover:border-white/5
                                  "
                                >
                                  {/* --- CHANGE 2: NO BOX, BIGGER MODEL ICON --- */}
                                  {/* Removed container styling. Added mr-3 spacing. */}
                                  <div className="flex-shrink-0 mr-3 self-center">
                                    <img
                                      src={model.icon}
                                      alt={model.name}
                                      // Increased size to w-10 h-10. Added drop-shadow-sm.
                                      className="w-10 h-10 object-contain drop-shadow-sm opacity-90 group-hover/model:opacity-100 group-hover/model:scale-110 transition-all"
                                    />
                                  </div>
                                  {/* ------------------------------------------- */}

                                  <div className="flex flex-col flex-1 min-w-0">
                                    <span className="text-slate-200 text-sm font-medium group-hover/model:text-white transition-colors truncate">
                                      {model.name}
                                    </span>
                                    <span className="text-[11px] text-slate-500 group-hover/model:text-slate-400 transition-colors truncate">
                                      {model.desc}
                                    </span>
                                  </div>

                                  <ArrowRight className="w-4 h-4 text-[#7B5eea] opacity-0 -translate-x-2 group-hover/model:opacity-100 group-hover/model:translate-x-0 transition-all duration-300 ml-2" />
                                </Link>
                              ))}
                            </div>
                          ) : (
                            <div className="h-full flex flex-col items-center justify-center text-slate-600 gap-2 opacity-50">
                              <span className="text-xs font-medium italic">No models available yet.</span>
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
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-white p-2 hover:bg-black/10 rounded-lg transition">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU DRAWER (Kept mostly the same, just adjusted icon sizes slightly for consistency) */}
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
                    <div className="pl-2 mt-3 flex flex-col gap-3 bg-white/5 rounded-lg p-3">
                      {link.subItems.map((sub) => (
                        <div key={sub.name}>
                          <Link
                            to={sub.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-white font-medium flex items-center gap-3 mb-2"
                          >
                            {/* Mobile Icon - Increased size, removed bg box */}
                            <img src={sub.icon} alt={sub.name} className="w-8 h-8 object-contain drop-shadow-sm" />
                            {sub.name}
                            {sub.badge && <span className="text-[9px] bg-[#7B5eea]/20 text-[#9F85FF] px-1 rounded border border-[#7B5eea]/20">{sub.badge}</span>}
                          </Link>

                          {sub.models && sub.models.length > 0 && (
                            <div className="pl-4 flex flex-col gap-3 mb-3 border-l border-white/10 ml-4 pt-2">
                              {sub.models.map(m => (
                                <Link
                                  key={m.name}
                                  to={m.path}
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="flex items-center gap-3 group/mobilemodel"
                                >
                                   {/* Mobile Model Icon - Increased size, removed bg box */}
                                  <img src={m.icon} alt={m.name} className="w-6 h-6 object-contain drop-shadow-sm opacity-80 group-hover/mobilemodel:opacity-100" />
                                  <span className="text-sm text-slate-300 group-hover/mobilemodel:text-white">{m.name}</span>
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