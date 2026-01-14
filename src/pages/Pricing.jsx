import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Make sure to npm install axios

const Pricing = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. FETCH DATA FROM OLD REPO
  useEffect(() => {
    const fetchPlans = async () => {
      try {
        // Point to your OLD REPO's Backend URL
        const response = await axios.get('https://app.helm.ai/api/public/plans');
        setPlans(response.data); // Store the dynamic data
        setLoading(false);
      } catch (error) {
        console.error("Failed to load plans:", error);
        // Fallback to hardcoded data if API fails
        setPlans([
          { name: 'Pulse', price: 75, description: 'Fallback Plan' }, 
          // ... defaults
        ]);
        setLoading(false);
      }
    };

    fetchPlans();
  }, []);

  if (loading) return <div className="text-white text-center py-20">Loading...</div>;

  // 2. RENDER USING DYNAMIC DATA
  return (
    <div className="bg-[#f4f4f5] py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Map over the fetched plans */}
        {plans.map((plan) => (
          <div key={plan._id} className="bg-white p-8 rounded-3xl shadow-sm">
            <h3 className="text-2xl font-normal mb-6">{plan.name}</h3>
            <div className="mb-8">
              {/* Use the dynamic price */}
              <span className="text-5xl font-medium">${plan.price}</span>
              <span className="text-gray-500"> /month</span>
            </div>
            <p className="text-gray-500 text-sm mb-8">{plan.description}</p>
            
            {/* Link to Signup (Redirect Strategy) */}
            <a 
              href={`https://app.helm.ai/signup?plan=${plan._id}&theme=new`} 
              className="block w-full text-center py-3 border rounded-full hover:bg-gray-50"
            >
              Choose Plan
            </a>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Pricing;