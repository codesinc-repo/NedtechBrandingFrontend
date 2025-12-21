import React from 'react';

const PaymentPage = () => {
  return (
    // Added pt-32 to account for the fixed navbar height
    <div className="min-h-screen w-full bg-[#020617] text-white pt-32 pb-24 px-6 md:px-12">
      
      <div className="container mx-auto max-w-6xl">
        
        {/* --- PAGE HEADERS --- */}
        <div className="mb-12">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Complete your payment method
          </h1>
          <p className="text-slate-400 text-lg font-light">
            Let’s set up your AI employee in just a few steps
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          
          {/* ================= LEFT CARD: PLAN SUMMARY ================= */}
          <div className="border border-[#7C3AED] rounded-3xl p-8 bg-[#020617] flex flex-col h-full">
            <h2 className="text-xl font-medium mb-6">Plan Summary</h2>
            
            <div className="flex flex-col gap-4 flex-grow">
              {/* Row 1 */}
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-slate-300 font-light">Plan</span>
                <span className="text-white font-medium">Pulse Plan</span>
              </div>
              
              {/* Row 2 */}
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-slate-300 font-light">Billing cycle</span>
                <span className="text-white font-medium">Monthly</span>
              </div>
              
              {/* Row 3 */}
              <div className="flex justify-between items-center py-4 border-b border-white/10">
                <span className="text-slate-300 font-light">Amount</span>
                <span className="text-white font-medium">£0</span>
              </div>

              {/* Row 4 (Total) */}
              <div className="flex justify-between items-center py-4 mt-auto">
                <span className="text-slate-300 font-light">Total due</span>
                <span className="text-white font-medium">£0</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD: PAYMENT METHOD ================= */}
          <div className="border border-[#7C3AED] rounded-3xl p-8 bg-[#020617] h-full flex flex-col">
            <h2 className="text-xl font-medium mb-8">Payment method</h2>
            
            <div className="flex flex-col gap-2 mb-8">
              <label className="text-slate-300 font-light text-sm">Card information</label>
              
              {/* Input Field simulating Stripe Element */}
              <div className="border border-[#7C3AED] rounded-lg bg-[#050914] px-4 py-3.5">
                <input 
                  type="text" 
                  placeholder="Card number" 
                  className="w-full bg-transparent border-none outline-none text-white placeholder-slate-500 text-sm"
                />
              </div>
            </div>

            {/* Pay Button */}
            <button className="w-full bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-medium py-3.5 rounded-lg transition-all shadow-lg shadow-purple-500/20 mt-auto">
              Pay now
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default PaymentPage;