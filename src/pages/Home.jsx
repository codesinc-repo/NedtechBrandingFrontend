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


export default function Home() {
  return (
    // Pass 'activePage' to Layout/Navbar so the "About us" link gets the purple underline
    <>
    <Layout> <HeroSection
  align="left"
  title={<>Grow Smarter,<br />Work Faster,<br />Spend Less.</>}
  primaryBtnText="Start your free trial"
  // We pass the Glass Card JSX here
  rightContent={
    <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl w-full max-w-md">
      <h3 className="text-2xl font-semibold text-white mb-8">
        Join 50 founders shaping the future of work.
      </h3>
      <button className="w-full py-3 rounded-full border border-[#7B5eea] text-white hover:bg-[#7B5eea]/10 transition">
        Apply to Join the Founding 50
      </button>
    </div>
  }
/></Layout>
    <ServicesSection/>
    <PricingSection/>
    <ProcessSection/>
    <FAQ/>
    <Footer/>
    </>
  );
}