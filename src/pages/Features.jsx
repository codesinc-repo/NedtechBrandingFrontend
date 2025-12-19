import React from 'react';
import HeroSection from "../components/home/Hero"; // Or wherever your HeroSection is located
import IntegrationCard from '../components/home/IntegrationCard';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';
import Footer from '../layouts/Footer';
import FeaturesCarousel from '../components/features/FeaturesCarousel';

export default function FeaturesPage() {
  return (
    <>
      <HeroSection
        // 1. LEFT ALIGNMENT (Matches Screenshot)
        align="left"
        
        // 2. TEXT CONTENT
        title={
          <>
            Powerful feature built for <br /> small businesses
          </>
        }
        
        subtitle="NedTech.ai combines intelligent AI employees with smart automation, integrations, and secure systems everything you need to run your business smarter and faster."
        
        // 3. BUTTON (Matches Screenshot)
        primaryBtnText="Start your free trial"
        
        // 4. NO RIGHT CONTENT (Important!)
        // By passing null (or omitting it), the right side stays empty/dark, 
        // allowing the background wave (if present) to show through cleanly.
        rightContent={null} 
      />
      <FeaturesCarousel/>
      <IntegrationCard/>
      <ProcessSection/>
      <FAQ/>
      <Footer/>


    </>
  );
}