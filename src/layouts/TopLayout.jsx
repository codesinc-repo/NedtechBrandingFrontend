import Navbar from './Navbar';
// Assume you exported your Helm Orb from Figma as an SVG
import HelmLogo from '../assets/helm.png'; 

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#050511] relative overflow-x-hidden font-sans">
      
      {/* --- LAYER 1: The Giant Logo (Positioned Absolute) --- */}
      {/* Adjust 'top' and 'left' to match Figma exactly */}
      <div className="absolute top-4 left-8 z-50 w-28 h-28 pointer-events-none">
        <img src={HelmLogo} alt="Helm" className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(123,94,234,0.3)]" />
      </div>

      {/* --- LAYER 2: The Navbar --- */}
      {/* We pass 'About us' to simulate the active state seen in your screenshot */}
      <div className="relative z-40">
        <Navbar activePage="About us" />
      </div>

      {/* --- LAYER 3: Page Content --- */}
      <main>
        {children}
      </main>

    </div>
  );
}