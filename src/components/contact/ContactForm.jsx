import React from 'react';

// SVG Icon for Chat (Speech Bubbles)
const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm3.75 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
  </svg>
);

// SVG Icon for Email (Envelope)
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-16 h-16 mx-auto text-white">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
  </svg>
);

const ContactFormSection = () => {
  return (
    // Section background is Light Gray (Bottom half of the split)
    <section className="bg-[#E5E5E5] pb-24 relative">
      
      {/* --- FLOATING CARDS SECTION --- */}
      {/* -mt-32: Pulls the container up into the previous section.
         pt-12:  (ADDED) Adds transparent padding inside the container at the top. 
                 This pushes the cards down slightly to create the gap you wanted, 
                 without adding a background color.
      */}
      <div className="container mx-auto px-4 relative z-20 -mt-32 mb-20 pt-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Chat to HelmBot */}
          <div className="bg-gradient-to-b from-[#6a52e3] to-[#2a1e75] rounded-3xl p-10 text-center text-white shadow-xl hover:transform hover:-translate-y-1 transition duration-300">
            
            {/* Added Chat Icon with margin bottom */}
            <div className="mb-6">
              <ChatIcon />
            </div>

            <h3 className="text-3xl font-semibold mb-4">Chat to HelmBot</h3>
            
            <p className="text-white/80 mb-10 leading-relaxed px-4 md:px-12 text-lg">
              Chat with our customer service bot for instant support and guidance.
            </p>
            
            <button className="text-white underline decoration-1 underline-offset-4 hover:text-gray-200 font-medium text-lg">
              Start Chat
            </button>
          </div>

          {/* Card 2: Email Us */}
          <div className="bg-gradient-to-b from-[#6a52e3] to-[#2a1e75] rounded-3xl p-10 text-center text-white shadow-xl hover:transform hover:-translate-y-1 transition duration-300">
            
            {/* Added Email Icon with margin bottom */}
            <div className="mb-6">
               <EmailIcon />
            </div>

            <h3 className="text-3xl font-semibold mb-4">Email Us</h3>
            
            <p className="text-white/80 mb-10 leading-relaxed px-4 md:px-12 text-lg">
              Send us your queries anytime and our team will get back to you.
            </p>
            
            <a href="mailto:info@nedtech.ai" className="text-white underline decoration-1 underline-offset-4 hover:text-gray-200 font-medium text-lg">
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