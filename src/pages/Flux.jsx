import React from 'react'
import HeroSection from '../components/home/Hero'
import ServiceFeature from '../components/flux/FluxFeature'
import iconFlux from '../assets/flux.png'
import FeatureSpotlight from '../components/pulse/FeatureSpot'
import PulseRelatedServices from '../components/flux/FluxService'
import ProcessSection from '../components/home/Process'


const Flux = () => {
  return (
    <>
    <HeroSection 
        title="Flux (Social media)"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore ma. Lorem ipsum dolor sit amet, consectetur adipiscing."
        primaryBtnText="Start your free trial"
        align="left"
        // rightContent and secondaryBtnText are omitted as they are not in the design
      />
        <ServiceFeature 
        icon={iconFlux}
        serviceName="Flux"
        accentColor="#EC4899" 
        headline="Your always-on creative engine."
        description="Flux designs, schedules, and posts content that grows your audience and keeps your brand active across social channels, without the grind."
        corePromise="Grow your presence without spending your life on content."
        features={[
          "Social content creation",
          "Trend and hashtag suggestions",
          "Auto-scheduling",
          "Insights lite",
          "Multi-platform posting"
        ]}
      />
      <FeatureSpotlight/>
      <PulseRelatedServices/>
      <ProcessSection/>
      
    </>
  )
}

export default Flux