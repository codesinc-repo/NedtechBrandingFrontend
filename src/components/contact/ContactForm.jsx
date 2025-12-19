import React from 'react';

const ContactFormSection = () => {
  return (
    // Section background is Light Gray (Bottom half of the split)
    <section className="bg-[#E5E5E5] pb-24 relative">
      
      {/* --- FLOATING CARDS SECTION --- */}
      {/* -mt-32: Pulls the cards up by 128px into the previous Black Hero section.
         z-20: Ensures cards float ON TOP of the background split.
      */}
      <div className="container mx-auto px-4 relative z-20 -mt-32 mb-20">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Chat to NedBot */}
          <div className="bg-[#5d44ce] rounded-3xl p-10 text-center text-white shadow-xl hover:transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Chat to NedBot</h3>
            
            {/* Added px-8 to squeeze text in the middle */}
            <p className="text-white/80 mb-8 leading-relaxed px-4 md:px-8">
              Chat with our customer service bot for instant support and guidance.
            </p>
            
            <button className="text-white underline decoration-1 underline-offset-4 hover:text-gray-200 font-medium">
              Start Chat
            </button>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-[#5d44ce] rounded-3xl p-10 text-center text-white shadow-xl hover:transform hover:-translate-y-1 transition duration-300">
            <h3 className="text-2xl font-semibold mb-4">Email Us</h3>
            
            {/* Added px-8 here as well */}
            <p className="text-white/80 mb-8 leading-relaxed px-4 md:px-8">
              Send us your queries anytime and our team will get back to you.
            </p>
            
            <a href="mailto:info@nedtech.ai" className="text-white underline decoration-1 underline-offset-4 hover:text-gray-200 font-medium">
              info@nedtech.ai
            </a>
          </div>

        </div>
      </div>


      {/* --- FORM SECTION --- */}
      <div className="container mx-auto px-4 max-w-5xl">
        
        {/* Headings */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4">
            Let us know what you think!
          </h2>
          <p className="text-gray-600 text-lg md:w-2/3">
            Have questions or need support? Our team is here to help. 
            Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Fields */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input type="text" placeholder="Name*" className="w-full bg-white rounded-md px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7B5eea] shadow-sm" />
            <input type="text" placeholder="Company*" className="w-full bg-white rounded-md px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7B5eea] shadow-sm" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <input type="email" placeholder="Email address*" className="w-full bg-white rounded-md px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7B5eea] shadow-sm" />
            <input type="tel" placeholder="Telephone number*" className="w-full bg-white rounded-md px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7B5eea] shadow-sm" />
          </div>

          <textarea rows="6" placeholder="Message*" className="w-full bg-white rounded-md px-4 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#7B5eea] shadow-sm resize-none"></textarea>

          <div>
            <button type="submit" className="bg-[#8b6cf5] text-white px-10 py-3 rounded-full font-medium hover:bg-[#7356db] transition shadow-lg">
              Send message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;