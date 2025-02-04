import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const sidebarVariants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.4 } },
    exit: { x: "-100%", opacity: 0, transition: { ease: "easeInOut", duration: 0.3 } },
  };

  return (
    <header className="w-full bg-[#212428] shadow-md fixed top-0 left-0 z-50">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-12">
        
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => navigate("/")}>
          <img src="img/brand-logo.png" alt="Brand" className="h-10 w-auto" />
          <h1 className="text-4xl font-bold text-white">FFC</h1>
        </div>

        <button className="lg:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle navigation">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden lg:flex items-center space-x-8">
            <button 
              
              onClick={() => navigate(`/`)} 
              className="text-white text-xl font-semibold hover:text-[#ff014f] transition duration-300"
            >
              Home
            </button>
         
          {[ "About", "Service", "Contact"].map((item) => (
            <button 
              key={item} 
              onClick={() => navigate(`/${item.toLowerCase()}`)} 
              className="text-white text-xl font-semibold hover:text-[#ff014f] transition duration-300"
            >
              {item}
            </button>
          ))}
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={sidebarVariants}
            className="fixed top-0 left-0 h-full w-64 bg-[#212428] shadow-xl flex flex-col p-6 lg:hidden"
          >
            <button className="self-end text-white mb-4" onClick={() => setIsOpen(false)}>
              <X size={28} />
            </button>

            <div className="flex flex-col items-center mb-6">
              <img src="img/brand-logo.png" alt="Brand" className="h-12 w-auto mb-2" />
              <h1 className="text-3xl font-bold text-white">Travisa</h1>
            </div>

            <nav className="flex flex-col items-center space-y-4 w-full">
            <button
                 
                  onClick={() => {
                    navigate(`/`);
                    setIsOpen(false);
                  }}
                  className="text-white text-xl font-semibold py-2 w-full text-center hover:text-[#ff014f] transition duration-300"
                >
                  Home
                </button>
              {[ "About", "Service", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    navigate(`/${item.toLowerCase()}`);
                    setIsOpen(false);
                  }}
                  className="text-white text-xl font-semibold py-2 w-full text-center hover:text-[#ff014f] transition duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="absolute bottom-6 px-4 text-center text-gray-300 text-sm">
              <p>Explore the world with Travisa. Your journey starts here.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
