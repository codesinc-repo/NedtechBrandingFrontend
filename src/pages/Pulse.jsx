import React from 'react';
import PageHero from "../components/contact/PageHero";
import FeatureRow from "../components/pulse/FeatureRow";
import FeatureSpotlight from '../components/pulse/FeatureSpot';
import ProcessSection from '../components/home/Process';
// --- Import Images (Ensure these match your file names in /assets) ---
import imgAutomation from '../assets/pulse1.png';
import imgFlux from '../assets/pulse2.png';
import imgSignal from '../assets/pulse3.png';
import imgSummit from '../assets/pulse4.png';
import imgAtlas from '../assets/pulse5.png';
import imgDrift from '../assets/pulse6.png';
import FAQ from '../components/home/Faq';
import Footer from '../layouts/Footer';

const PulsePage = () => {

  // --- DATA: Content extracted from your Figma screenshots ---
  const pulseData = [
    {
      id: "automation",
      title: "Automation",
      // Text from image_55336e.png
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
      imageSrc: imgAutomation,
      imageOnLeft: true, // Hexagon is on Left, Text on Right
    },
    {
      id: "flux",
      title: "Flux (Social media)",
      subtitle: "Your always-on creative engine.",
      description: "Flux designs, schedules, and posts content that grows your audience and keeps your brand active across social channels, without the grind. It adapts to trends, learns your tone, and makes sure you show up consistently where your customers hang out.",
      corePromise: "Grow your presence without spending your life on content.",
      linkText: "Discover Flux",
      linkUrl: "/flux",
      imageSrc: imgFlux,
      imageOnLeft: false, // Text Left, Image Right
    },
    {
      id: "signal",
      title: "Signal (Copywriting)",
      subtitle: "Clear, compelling words for every touchpoint..",
      description: "Signal writes with purpose, website copy, product descriptions, ads, blogs, scripts, templates, sales materials. It adapts to your brand voice and ensures everything you publish sounds like you at your best.",
      corePromise: "Your brand feels sharp, consistent, and unmistakably you.",
      linkText: "Discover Signal", // Corrected from 'Summit' typo in design
      linkUrl: "/signal",
      imageSrc: imgSignal,
      imageOnLeft: false, // Text Left, Image Right (Based on screenshot)
    },
    {
      id: "summit",
      title: "Summit (Customer success)",
      subtitle: "Keep customers happy, heard, and supported, automatically.",
      description: "Summit manages customer conversations, responds to queries, resolves issues, escalates when needed, and keeps your customers feeling cared for. It learns your product, your policies, and your tone.",
      corePromise: "Consistent, reliable customer care that scales with you.",
      linkText: "Discover Summit",
      linkUrl: "/summit",
      imageSrc: imgSummit,
      imageOnLeft: true, // Image Left, Text Right
    },
    {
      id: "atlas",
      title: "Atlas (Virtual assistant)",
      subtitle: "Your dependable operator, organised, calm, and fast.",
      // Note: In your screenshot, this text was duplicated from Summit. 
      // I kept it similar but you can edit it here.
      description: "Summit manages customer conversations, responds to queries, resolves issues, escalates when needed, and keeps your customers feeling cared for. It learns your product, your policies, and your tone..", 
      corePromise: "Your workload stays light, even when your business doesn’t.",
      linkText: "Discover Atlas",
      linkUrl: "/atlas",
      imageSrc: imgAtlas,
      imageOnLeft: false, // Text Left, Image Right
    },
    {
      id: "drift",
      title: "Drift (Email marketing)",
      subtitle: "Warm leads, clearer funnels, stronger revenue.",
      description: "Drift writes, optimises, and sends emails that land, campaigns, newsletters, onboarding flows, triggers, and personalisation baked in. Whether you’re nurturing or converting, Drift keeps your pipeline moving.",
      corePromise: "Emails that perform, at a pace your business can feel.",
      linkText: "Discover Drift",
      linkUrl: "/drift",
      imageSrc: imgDrift,
      imageOnLeft: true, // Image Left, Text Right
    },
  ];

  return (
    <>
    <div className="bg-[#0B0518] min-h-screen">
      
      {/* 1. HERO SECTION */}
      <PageHero
        title="Pulse"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute."
        buttonText="Start your free trial"
        onButtonClick={() => console.log("Start Trial Clicked")}
      />

      {/* 2. FEATURES LOOP (Renders all 6 sections) */}
      <div className="pb-24">
        {pulseData.map((feature) => (
          <FeatureRow 
            key={feature.id}
            {...feature} // Passes title, description, imageSrc, imageOnLeft etc.
          />
        ))}
      </div>

    </div>
    <FeatureSpotlight/>
    <ProcessSection/>
    <FAQ/>
    <Footer/>
    </>
  );
};

export default PulsePage;