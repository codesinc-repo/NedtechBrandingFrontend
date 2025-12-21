import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
// Assume you exported your Helm Orb from Figma as an SVG
import HelmLogo from '../assets/helm.png'; 

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050511] relative overflow-x-hidden font-sans">
      
      {/* --- LAYER 1: The Giant Logo (Clickable) --- */}
      {/* FIX 1: 'Link' ko hi absolute positioning dein */}
      {/* FIX 2: 'pointer-events-none' HATA DIYA taake click kaam kare */}
      {/* FIX 3: path ko '/home' ki jagah '/' kar diya (standard practice) */}
      
      <Link to="/" className="absolute top-4 left-8 z-50 w-28 h-28 cursor-pointer">
        <img 
          src={HelmLogo} 
          alt="Helm" 
          className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,94,234,0.3)]" 
        />
      </Link>

      {/* --- LAYER 2: The Navbar --- */}
      <div className="relative z-40">
        <Navbar />
      </div>

      {/* --- LAYER 3: Page Content --- */}
      <main>
        {children}
      </main>

    </div>
  );
}