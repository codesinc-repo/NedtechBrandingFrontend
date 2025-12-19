import React from 'react';
import HeroSection from "../components/home/Hero"; 
import StatsSection from '../components/found50/Stats';
import FoundingFormSection from '../components/found50/FoundForm';
import AboutSpotlight from '../components/found50/AboutSpot';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';
import Footer from '../layouts/Footer';

export default function FoundingPage() {
  return (
    <>
    <HeroSection
      // 1. Alignment: Left text, open space on right
      align="left"

      // 2. Text Content
      title="Join 50 founders shaping the future of work."
      
      // There is no subtitle in this specific screenshot, so we pass null or empty string
      subtitle={null}

      // 3. Button
      primaryBtnText="Apply to Join the Founding 50"

      // 4. Visuals
      // IMPORTANT: We pass 'null' here. 
      // This keeps the right side empty of widgets/cards, allowing the 
      // component's internal 'WaveBg' (the purple wave) to be the main visual on the right.
      rightContent={null}
    />
    <StatsSection/>
    <FoundingFormSection/>
    <AboutSpotlight/>
    <ProcessSection/>
    <FAQ/>
    <Footer/>
    </>
  );
}