import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PopupAdForm from './components/Advertise';

function App() {
  const [showAd, setShowAd] = useState(true); // Initially, only the ad is visible

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAd(true);
    }, 1000); // 1 second delay before showing ad

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showAd ? (
        <PopupAdForm onClose={() => setShowAd(false)} />
      ) : (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/service' element={<Service />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
