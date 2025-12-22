import React from 'react';
import HeroSection from '../components/home/Hero';
import ServiceFeature from '../components/flux/FluxFeature'; // Ensure this matches your ServiceFeature component
import FeatureSpotlight from '../components/pulse/FeatureSpot';
import PulseRelatedServices from '../components/flux/FluxService';
import ProcessSection from '../components/home/Process';

// Import the data
import { servicesData } from '../helpers/serviceData';

const ServiceTemplate = ({ serviceKey }) => {
  
  // 1. Get the specific data based on the key passed (e.g., 'flux', 'drift')
  const content = servicesData[serviceKey];

  // Safety check: Agar galat key pass hui to crash na ho
  if (!content) {
    return <div className="text-white text-center py-20">Service not found</div>;
  }

  return (
    <>
      <HeroSection 
        title={content.title}
        subtitle={content.heroSubtitle}
        primaryBtnText="Start your free trial"
        align="left"
      />
      
      {/* 2. Pass dynamic data to ServiceFeature */}
      <ServiceFeature 
        icon={content.icon}
        serviceName={content.name}
        accentColor={content.accentColor}
        headline={content.headline}
        description={content.description}
        corePromise={content.corePromise}
        features={content.features}
      />

      <FeatureSpotlight/>
      <PulseRelatedServices/>
      <ProcessSection/>
    </>
  );
};

export default ServiceTemplate;