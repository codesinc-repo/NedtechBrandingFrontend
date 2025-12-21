import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(null);
  const location = useLocation();

  // --- NAVIGATION CONFIGURATION ---
  const navLinks = [
    { 
      name: 'Product', 
      path: '/product', 
      type: 'dropdown',
      subItems: [
        { name: 'Pulse', path: '/product/pulse', badge: null },
        { name: 'Nexus', path: '/product/nexus', badge: 'Coming Soon' },
        { name: 'Horizon', path: '/product/horizon', badge: 'Coming Soon' }
      ]
    },
    { 
      name: 'About us', 
      path: '/about', 
      type: 'dropdown',
      subItems: [
      
        { name: 'Contact', path: '/contact', badge: null }
      ]
    },
    { name: 'Meet the team', path: '/meet', type: 'link' },
    { name: 'Pricing', path: '/pricing', type: 'link' },
    { name: 'Resources', path: '/resources', type: 'link' },
    // "Login" and "Start free trial" are mixed into the nav bar
    { name: 'Login', path: '/login', type: 'link', className: 'ml-4' }, 
    { name: 'Start free trial', path: '/freetrial', type: 'link' },
  ];

  const checkActive = (path) => location.pathname === path;

  const toggleMobileDropdown = (name) => {
    setMobileDropdownOpen(mobileDropdownOpen === name ? null : name);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md border-b border-white/5 transition-all duration-300">
      <div className="container mx-auto px-6 h-20 flex items-center justify-center relative">
        
        {/* ================= 1. CENTER NAVIGATION (Middle) ================= */}
        {/* We use 'justify-center' on the parent and no flex-grow here to keep it dead center */}
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
                  >
                    {link.name}
                    {isDropdown && (
                      <ChevronDown className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-transform group-hover:rotate-180" />
                    )}
                  </Link>

                  {/* Desktop Dropdown Menu */}
                  {isDropdown && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 w-56">
                      <div className="bg-[#0B0F19] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2 flex flex-col gap-1">
                        {link.subItems.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path}
                            className="block px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg flex items-center justify-between"
                          >
                            {sub.name}
                            {sub.badge && (
                              <span className="text-[9px] font-bold uppercase tracking-wider bg-[#7B5eea]/20 text-[#9F85FF] px-1.5 py-0.5 rounded-[4px] ml-2">
                                {sub.badge}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ================= 2. FOUNDING 50 BUTTON (Far Right Edge) ================= */}
        {/* Positioned Absolutely to ensure the center links don't shift */}
        <div className="hidden lg:flex items-center absolute right-6">
          <Link to="/found50">
            <button className="px-5 py-2 rounded-full border border-[#7B5eea] text-white text-[13px] font-medium hover:bg-[#7B5eea]/10 transition-all shadow-[0_0_15px_rgba(123,94,234,0.15)] whitespace-nowrap">
              Join the Helm Founding 50
            </button>
          </Link>
        </div>

        {/* ================= MOBILE HAMBURGER (Right Edge Mobile) ================= */}
        <div className="flex lg:hidden absolute right-6">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU DRAWER ================= */}
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
                        <Link 
                          key={sub.name} 
                          to={sub.path}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="text-sm text-slate-400 hover:text-white flex items-center justify-between"
                        >
                          {sub.name}
                          {sub.badge && (
                            <span className="text-[10px] bg-[#7B5eea]/20 text-[#9F85FF] px-1.5 py-0.5 rounded">
                              Coming Soon
                            </span>
                          )}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              );
            })}
           </ul>

           {/* Mobile Action Button */}
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