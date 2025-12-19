import React from 'react';
import Layout from '../layouts/TopLayout';
import HeroSection from '../components/home/Hero';

export default function ContactUs() {
  return (
    // 1. Set activePage="Contact" for the purple underline in Navbar
    <Layout activePage="Contact">
      
      {/* 2. The Hero Section: Handles the Title and Description */}
      <HeroSection
        align="center" // This triggers the centered layout logic
        title="Contact Us"
        subtitle={
          <>
            We’d love to hear from you! Whether you have a question, need support, or want to 
            explore how NedTech.ai can help your business, our team is just a message away. 
            Fill out the form below and we’ll respond as quickly as possible.
          </>
        }
        // We do not pass buttons or rightContent here.
      />

      {/* 3. The Contact Cards Section 
         - We render this immediately AFTER the hero.
         - '-mt-24' pulls it up to overlap the Hero section if needed (like the design often implies).
         - 'relative z-20' ensures it sits on top of any waves.
      */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 -mt-10 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: Chat to NedBot */}
          <div className="bg-gradient-to-br from-[#0a0a2e] to-[#2a1b5e] border border-white/10 p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-normal text-white mb-4">Chat to NedBot</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Chat with our customer service bot for instant support and guidance.
            </p>
            <button className="text-white underline decoration-[#7B5eea] decoration-2 underline-offset-4 hover:text-[#7B5eea] transition">
              Start Chat
            </button>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-gradient-to-br from-[#0a0a2e] to-[#2a1b5e] border border-white/10 p-10 rounded-3xl text-center shadow-2xl">
            <h3 className="text-3xl font-normal text-white mb-4">Email Us</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Send us your queries anytime and our team will get back to you.
            </p>
            <a href="mailto:info@nedtech.ai" className="text-white underline decoration-[#7B5eea] decoration-2 underline-offset-4 hover:text-[#7B5eea] transition">
              info@nedtech.ai
            </a>
          </div>

        </div>
      </div>

    </Layout>
  );
}