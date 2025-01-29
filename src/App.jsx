import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/home';
import WhatIsXP from './pages/WhatIsXP';
import Reasoning from './pages/Reasoning';
import Plan from './pages/Plan';
import AbtWebsite from './pages/AbtWebsite';
import Footer from './pages/footer';
import Preregister from './pages/Preregister';

function App() {
  const preregisterRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/preregister' && preregisterRef.current) {
      preregisterRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  return (
    <main className='w-full bg-[#faf9f6]'>
      <Home />
      <WhatIsXP />
      <Reasoning />
      <Plan />
      <AbtWebsite />
      <div ref={preregisterRef}>
        <Preregister />
      </div>
      <Footer />
    </main>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reregister" element={<App />} />
      </Routes>
    </Router>
  );
}

export default AppWrapper;