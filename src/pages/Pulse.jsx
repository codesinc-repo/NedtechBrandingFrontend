import React from 'react';
import PageHero from "../components/contact/PageHero";
import FeatureRow from "../components/pulse/FeatureRow"; // Is file ko hum step 2 mein update karenge
import FeatureSpotlight from '../components/pulse/FeatureSpot';
import ProcessSection from '../components/home/Process';
import FAQ from '../components/home/Faq';

// --- Import Images ---
import imgAutomation from '../assets/pulse1.png';
import imgFlux from '../assets/pulsenew.png';
import imgSignal from '../assets/signalnew.png';
import imgSummit from '../assets/summitnew.png';
import imgAtlas from '../assets/atlasnew.png';
import imgDrift from '../assets/driftnew.png';

const PulsePage = () => {

  const pulseData = [
    {
      id: "automation",
      title: "Automation",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      imageSrc: imgAutomation,
      imageOnLeft: true,
      // Yahan linkUrl add kiya taaki click karne par ye bhi kahin jaye
      linkUrl: "/product/flux" 
    },
    {
      id: "flux",
      title: "Flux (Social media)",
      subtitle: "Your always-on creative engine.",
      description: "Flux designs, schedules, and posts content...",
      corePromise: "Grow your presence without spending your life on content.",
      linkText: "Discover Flux",
      // Yeh raha route jahan user click karne par jayega
      linkUrl: "/product/flux", 
      imageSrc: imgFlux,
      imageOnLeft: false,
    },
    {
      id: "signal",
      title: "Signal (Copywriting)",
      subtitle: "Clear, compelling words for every touchpoint..",
      description: "Signal writes with purpose, website copy...",
      corePromise: "Your brand feels sharp, consistent, and unmistakably you.",
      linkText: "Discover Signal",
      linkUrl: "/product/signal", // Changed to correct route
      imageSrc: imgSignal,
      imageOnLeft: false,
    },
    {
      id: "summit",
      title: "Summit (Customer success)",
      subtitle: "Keep customers happy, heard, and supported...",
      description: "Summit manages customer conversations...",
      corePromise: "Consistent, reliable customer care that scales with you.",
      linkText: "Discover Summit",
      linkUrl: "/product/summit", // Changed to correct route
      imageSrc: imgSummit,
      imageOnLeft: true,
    },
    {
      id: "atlas",
      title: "Atlas (Virtual assistant)",
      subtitle: "Your dependable operator, organised, calm, and fast.",
      description: "Summit manages customer conversations...",
      corePromise: "Your workload stays light...",
      linkText: "Discover Atlas",
      linkUrl: "/product/atlas", // Changed to correct route
      imageSrc: imgAtlas,
      imageOnLeft: false,
    },
    {
      id: "drift",
      title: "Drift (Email marketing)",
      subtitle: "Warm leads, clearer funnels, stronger revenue.",
      description: "Drift writes, optimises, and sends emails...",
      corePromise: "Emails that perform, at a pace your business can feel.",
      linkText: "Discover Drift",
      linkUrl: "/product/drift", // Changed to correct route
      imageSrc: imgDrift,
      imageOnLeft: true,
    },
  ];

  return (
    <>
    <div className="bg-[#0B0518] min-h-screen">
      
      <PageHero
        title="Pulse"
        subtitle="Lorem ipsum dolor sit amet..."
        buttonText="Start your free trial"
        onButtonClick={() => console.log("Start Trial Clicked")}
      />

      <div className="pb-24">
        {pulseData.map((feature) => (
          <FeatureRow 
            key={feature.id}
            {...feature} // Yahan se linkUrl pass ho raha hai FeatureRow mein
          />
        ))}
      </div>

    </div>
    <FeatureSpotlight/>
    <ProcessSection/>
    <FAQ/>
    </>
  );
};

export default PulsePage;