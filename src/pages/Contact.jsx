import React from 'react';
import Layout from "../layouts/TopLayout"; 
import PageHero from "../components/contact/PageHero"; 
import ContactFormSection from "../components/contact/ContactForm";
import ProcessSection from '../components/home/Process';
 
import IntegrationCard from '../components/home/IntegrationCard';
import FAQ from '../components/home/Faq'


export default function Contact() {
  return (
   
     <>
      <div className="bg-[#0B0518] pb-48 md:pb-64">
        <PageHero
          title="Contact Us"
          subtitle="We’d love to hear from you! Whether you have a question, need support, or want to explore how NedTech.ai can help your business, our team is just a message away. Fill out the form below and we’ll respond as quickly as possible."
        />
      </div>

      
      <ContactFormSection />
      <IntegrationCard/>
      <ProcessSection/>
      <FAQ/>
      
       
</>
   
  );
}