import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  // Current path (URL) nikalne ke liye
  const { pathname } = useLocation();

  useEffect(() => {
    // Jab bhi pathname change hoga, window top par scroll ho jayegi
    window.scrollTo(0, 0);
  }, [pathname]); // Dependency array mein pathname hai

  return null; // Ye component kuch render nahi karta, bas logic run karta hai
};

export default ScrollToTop;