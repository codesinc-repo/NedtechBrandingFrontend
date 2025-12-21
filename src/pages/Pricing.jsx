import React from 'react'
import FeatureComparison from '../components/pricing/FeatureComparision'
import HeroSection from '../components/home/Hero'
import ServicesBanner from '../components/pricing/ServicesBanner'
import ProcessSection from '../components/home/Process'
import FAQ from '../components/home/Faq'
import Footer from '../layouts/Footer'

const Pricing = () => {
  return (
    <>
    <HeroSection 
        title="Pricing plans"
        subtitle="NedTech.ai combines intelligent AI employees with smart automation, integrations, and secure systems everything you need to run your business smarter and faster."
        primaryBtnText="Start your free trial"
        align="left"
      />
      <FeatureComparison/>
      <ServicesBanner/>
      <ProcessSection/>
      <FAQ/>
       
      </>
  )
}

export default Pricing