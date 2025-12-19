import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Router ya BrowserRouter import mat karein
import Layout from './layouts/TopLayout';
import Home from './pages/Home';
import AboutUsPage from './pages/About';
import ContactUs from './pages/Contact'
import Services from './pages/Services';
import PulsePage from './pages/Pulse';
import FeaturesPage from './pages/Features';
import FoundingPage from './pages/Found50';
// Other imports...

function App() {
  return (
      <Layout> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUsPage/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/pulse" element={<PulsePage/>} />
          <Route path="/features" element={<FeaturesPage/>} />
           <Route path="/found50" element={<FoundingPage/>} />
           
       
       
        </Routes>
      </Layout>
    // </Router> closing tag bhi hata dein
  );
}

export default App;