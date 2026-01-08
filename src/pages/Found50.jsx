import React from 'react';
import HeroSection from "../components/home/Hero"; 
import StatsSection from '../components/found50/Stats';
import FoundingFormSection from '../components/found50/FoundForm';
import AboutSpotlight from '../components/found50/AboutSpot';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';
 

export default function FoundingPage() {
  return (
    <>
   <HeroSection
  // 1. Alignment
  align="left"

  // 2. Text Content
  // CHANGE: Pass a <span> with classes instead of a plain string.
  // We use '!text-4xl' to force the override if the component has a hardcoded size.
  title={
    <span className="!text-3xl md:!text-4xl lg:!text-5xl leading-tight block mb-10">
      Join 50 founders shaping the future of work.
    </span>
  }
  
  subtitle={null}

  // 3. Button
  primaryBtnText="Apply to Join the Founding 50"

  // 4. Visuals
  rightContent={null}
/>
    <StatsSection/>
    <FoundingFormSection/>
    <AboutSpotlight/>
    <ProcessSection/>
    <FAQ/>
     
    </>
  );
}