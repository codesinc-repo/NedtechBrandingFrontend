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
    <>
    <PageHero
  title="Explore our services"
  
  subtitle="Discover a suite of intelligent tools designed to automate the mundane, centralize your business knowledge, and predict your next big move. Empower your team to achieve enterprise-level growth without the enterprise budget."
  
  buttonText="Start your free trial"
  
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