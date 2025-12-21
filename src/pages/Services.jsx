import React from 'react';
import PageHero from "../components/contact/PageHero";
import ServicesSection from '../components/home/Services';
import CoreFeaturesSection from '../components/contact/CoreFeatures';
import PricingSection from '../components/home/PricingSection';
import IntegrationCard from '../components/home/IntegrationCard';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';
 
import ProductDash from '../components/features/ProductsDash'
export default function Services() {
  return (
    // Note: Layout is handled globally in App.jsx now, so we don't wrap it here
    <>
      <PageHero
        title="Explore our services"
        
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."
        
        // Passing this prop triggers the purple button to appear
        buttonText="Start your free trial"
        
        // Optional: Add logic for where the button goes
        onButtonClick={() => console.log("Navigate to signup")} 
      />
      <ServicesSection/>
      <ProductDash/>
      <PricingSection theme="light" />
      <ProcessSection/>
      <FAQ/>
       
   
      
      {/* Rest of your page content */}
    </>
  );
}