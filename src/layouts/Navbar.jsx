import React from 'react';
import { ChevronDown, Search } from 'lucide-react';

const Navbar = ({ activePage = '' }) => {
  
  // Navigation Links Data
  const navLinks = [
    { name: 'Services', hasDropdown: true },
    { name: 'Features', hasDropdown: false },
    { name: 'Pricing', hasDropdown: false },
    { name: 'About us', hasDropdown: true }, // This gets the underline in your screenshot
    { name: 'Tech hub', hasDropdown: false },
    { name: 'Contact', hasDropdown: false },
  ];

  return (
    // The <nav> is full width, transparent, but pushes content to the right
    // 'pl-32' or 'pl-40' creates a safe zone on the left so links don't overlap your big Logo
    <nav className="w-full flex items-center justify-end py-6 px-10 pl-40 relative z-50">
      
      {/* 1. Middle Section: Links & Search */}
      <div className="flex items-center gap-8 mr-12">
        
        {/* Render Links Loop */}
        <ul className="flex items-center gap-8">
          {navLinks.map((link) => {
            // Check if this is the active page (for the purple underline)
            const isActive = activePage.toLowerCase() === link.name.toLowerCase();

            return (
              <li key={link.name} className="relative group cursor-pointer">
                <div className={`flex items-center gap-1 text-sm font-medium transition-colors 
                  ${isActive ? 'text-white' : 'text-gray-300 hover:text-white'}`}
                >
                  {link.name}
                  {link.hasDropdown && (
                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
                  )}
                </div>

                {/* The Active State Underline (Purple Line) */}
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

      {/* 2. Right Section: Action Buttons */}
      <div className="flex items-center gap-4">
        {/* 'Founding 50' Button - Transparent with Border */}
        <button className="px-6 py-2.5 rounded-full border border-gray-600 text-white text-sm font-medium hover:border-[#7B5eea] hover:bg-white/5 transition-all">
          Founding 50
        </button>

        {/* 'Get Started' Button - Filled Purple */}
        <button className="px-6 py-2.5 rounded-full bg-[#7B5eea] text-white text-sm font-medium hover:bg-[#6a4ed0] shadow-lg shadow-purple-900/20 transition-all">
          Get started
        </button>
      </div>

    </nav>
  );
};

export default Navbar;