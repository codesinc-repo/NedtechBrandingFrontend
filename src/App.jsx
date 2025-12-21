import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // useLocation add kiya
import Layout from './layouts/TopLayout';
import Footer from './layouts/Footer'; // Footer import karein (Path verify kar lein)

// Pages imports
import Home from './pages/Home';
import AboutUsPage from './pages/About';
import ContactUs from './pages/Contact';
import Services from './pages/Services';
import PulsePage from './pages/Pulse';
import FeaturesPage from './pages/Features';
import FoundingPage from './pages/Found50';
// import PricingSection from './components/home/PricingSection'; // Agar use nahi ho raha to hata dein
import MeetTeam from './pages/MeetTeam';
import Pricing from './pages/Pricing';
import Login from './auth/Login';
import Signup from './auth/Signup';
import PlanSelection from './components/pricing/PlanSelection';
import Flux from './pages/Flux';
import Resources from './pages/Resources';
import ScrollToTop from './components/ScrollToTop';
import PaymentPage from './pages/Payment';

function App() {
  const location = useLocation();

  // In routes par humein sirf links dikhane hain (CTA hide karna hai)
  const simpleFooterRoutes = ['/login', '/signup', '/freetrial'];

  // Check karein agar current path simpleFooterRoutes list mein hai
  const showSimpleFooter = simpleFooterRoutes.includes(location.pathname);

  return (
    <Layout>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/product" element={<Services />} />
        <Route path="/product/flux" element={<Flux/>} />
         <Route path="/product/signal" element={<Flux/>} />

          <Route path="/product/drift" element={<Flux/>} />
           <Route path="/product/summit" element={<Flux/>} />
            <Route path="/product/automation" element={<Flux/>} />
        <Route path="/product/pulse" element={<PulsePage />} />
        <Route path="/product/pulse" element={<PulsePage />} />
        <Route path="/product/pulse" element={<PulsePage />} />
        <Route path="/product/pulse" element={<PulsePage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/found50" element={<FoundingPage />} />
        <Route path="/pricing" element={<Pricing />} />
       
        <Route path="/meet" element={<MeetTeam />} />
          <Route path="/resources" element={<Resources />} />
        
        {/* Auth & Trial Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/freetrial" element={<PlanSelection />} />
         <Route path="/payment" element={<PaymentPage />} />
      </Routes>

      {/* Global Footer Logic */}
      {/* Agar showSimpleFooter true hai, toh withCTA false hoga */}
      <Footer withCTA={!showSimpleFooter} />
      
    </Layout>
  );
}

export default App;