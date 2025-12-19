import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Search, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // Automatically detects current URL

  // Navigation Links with Paths
  const navLinks = [
    { name: 'Services', path: '/services', hasDropdown: true },
    { name: 'Features', path: '/features', hasDropdown: false },
    { name: 'Pricing', path: '/pricing', hasDropdown: false },
    { name: 'About us', path: '/about', hasDropdown: true },
    { name: 'Tech hub', path: '/tech-hub', hasDropdown: false },
    { name: 'Contact', path: '/contact', hasDropdown: false },
  ];

  // Helper to check active state
  const checkActive = (path) => location.pathname === path;

  return (
    // Responsive Padding: 'px-6' on mobile, 'pl-40' on desktop to safe-guard the logo
    <nav className="w-full flex items-center justify-end py-6 px-6 lg:px-10 lg:pl-40 relative z-50">
      
      {/* ================= DESKTOP MENU (Hidden on Mobile) ================= */}
      <div className="hidden lg:flex items-center gap-8 mr-12">
        
        {/* Links Loop */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = checkActive(link.path);

            return (
              <li key={link.name} className="relative group">
                <Link 
                  to={link.path}
                  className={`flex items-center gap-1 text-sm font-medium transition-colors cursor-pointer
                    ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </Link>

                {/* The Active State Underline (Original Design) */}
                {isActive && (
                  <span className="absolute -bottom-6 left-0 w-full h-[3px] bg-[#7B5eea] rounded-t-sm shadow-[0_0_10px_#7B5eea]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Search Icon */}
        <button className="text-white hover:text-[#7B5eea] transition-colors">
          <Search className="w-5 h-5" />
        </button>
      </div>

      {/* ================= ACTION BUTTONS (Visible Desktop) ================= */}
      <div className="hidden lg:flex items-center gap-4">
        <Link to="/found50">
        <button className="px-6 py-2.5 rounded-full border border-gray-600 text-white text-sm font-medium hover:border-[#7B5eea] hover:bg-white/5 transition-all">
          Founding 50
        </button>
        </Link>
        <button className="px-6 py-2.5 rounded-full bg-[#7B5eea] text-white text-sm font-medium hover:bg-[#6a4ed0] shadow-lg shadow-purple-900/20 transition-all">
          Get started
        </button>
      </div>


      {/* ================= MOBILE HAMBURGER (Visible Mobile Only) ================= */}
      <div className="flex lg:hidden items-center gap-4">
        {/* Search on Mobile */}
        <button className="text-white">
            <Search className="w-5 h-5" />
        </button>

        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ================= MOBILE MENU DROPDOWN ================= */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#050511] border-b border-white/10 shadow-2xl p-6 flex flex-col gap-4 lg:hidden animate-in slide-in-from-top-5">
           <ul className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = checkActive(link.path);
              return (
                <li key={link.name}>
                  <Link 
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)} // Close menu on click
                    className={`flex items-center justify-between text-lg font-medium 
                      ${isActive ? 'text-[#7B5eea]' : 'text-gray-300'}`}
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>
                </li>
              );
            })}
           </ul>

           {/* Mobile Buttons */}
           <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-white/10">
           
              <button className="w-full py-3 rounded-full border border-gray-600 text-white font-medium">
                Founding 50
              </button>
          
              <button className="w-full py-3 rounded-full bg-[#7B5eea] text-white font-medium shadow-lg shadow-purple-900/20">
                Get started
              </button>
           </div>
        </div>
      )}

    </nav>
  );
};

export default Navbar;