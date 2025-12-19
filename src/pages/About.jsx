import React from 'react';
import Layout from "../layouts/TopLayout"; // Your Layout
import HeroSection from "../components/home/Hero"; // Your Reusable Hero
import FounderAndMission from '../components/about/FounderStory';
import CompanySections from '../components/about/CompanySections';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';
import Footer from '../layouts/Footer';
import ServicesSection from '../components/home/Services';
import PricingSection from '../components/home/PricingSection';


export default function AboutUsPage() {
  return (
    // Pass 'activePage' to Layout/Navbar so the "About us" link gets the purple underline
    <>
    
      
      <HeroSection
        align="left"
        title="About us"
        
        // The subtitle text from your Figma design
        subtitle="Empowering small businesses around the world to work smarter, scale faster, and compete with confidence."
        
        primaryBtnText="Start your free trial"
        
        // IMPORTANT: We do NOT pass 'rightContent' here. 
        // This tells the component to let the Wave background take over the right side.
      />

    
    <FounderAndMission/>
    <CompanySections/>
     <ProcessSection/>
    <FAQ/>
    <Footer/>
    </>
  );
}