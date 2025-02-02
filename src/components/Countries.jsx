import React from "react";
import { motion } from "framer-motion";

const countries = [
    {
      name: "USA",
      image: "https://th.bing.com/th/id/OIP.dQAEenFUfBlHdKpx7RMzDQHaE5?rs=1&pid=ImgDetMain", // USA Image
      flag: "https://www.bing.com/th?id=OIP.ELcegre6DaNO2LIVAetrQAHaE8&w=156&h=104&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",  // USA Flag
    },
    {
      name: "UK",
      image: "https://th.bing.com/th?id=OSK.HEROEwjJo9Z7Ml77-qnLLGTIvRDosB6uMh2gHAM55YMYxGg&w=472&h=280&c=13&rs=2&o=6&oif=webp&dpr=1.3&pid=SANGAM", // UK Image
      flag: "https://th.bing.com/th?id=OSK.e069d2864169b1c37e685def6c6a0080&w=102&h=102&c=7&o=6&dpr=1.3&pid=SANGAM",   // UK Flag (Updated)
    },
    {
      name: "Australia",
      image: "https://th.bing.com/th/id/R.2b3181524af204b1edb781024d9a9407?rik=CBXQkUeuzRO5qA&riu=http%3a%2f%2fwww.hdwallpaperspulse.com%2fwp-content%2fuploads%2f2020%2f02%2fcloudy-weather-Sydney-Harbour-Bridge.jpg&ehk=G5wgU4yz81%2fNIZ6GKVkT6Kg%2fYSTMuCmIqXRMWzLHXYI%3d&risl=&pid=ImgRaw&r=0", // Australia Image
      flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",  // Australia Flag
    },
    {
      name: "Canada",
      image: "https://th.bing.com/th/id/OIP.OV19TQ03QXOPe2f57Tpz3wHaEg?w=312&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7", // Canada Image
      flag: "https://th.bing.com/th?id=ODL.1593a03d56b00eccae9a994df5285183&w=298&h=149&c=10&rs=1&qlt=99&o=6&dpr=1.3&pid=AlgoBlockDebug",   // Canada Flag (Updated)
    },
  ];
  
const Countries = () => {
  return (
    <div className="relative bg-[#212428] py-16 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="section-title text-center mb-16">
          <div className="sub-style mb-4">
            <h5 className="sub-title text-white text-lg font-medium uppercase tracking-widest">Countries We Offer</h5>
          </div>
          <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4 leading-tight">
            Immigration & visa services following Countries
          </h1>
          <p className="text-white mb-12 sm:w-10/12 md:w-8/12 mx-auto text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam cumque
            itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab? Repellat!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {countries.map((country, index) => (
            <motion.div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative">
                <img
                  src={country.image}
                  className="w-full h-60 object-cover group-hover:opacity-75 transition-opacity duration-300 rounded-lg"
                  alt={country.name}
                />
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-60 transition-all duration-300 rounded-lg" />
              </div>

              <div className="absolute top-4 left-4 z-10">
                <img
                  src={country.flag}
                  className="w-20 h-20 object-cover rounded-full border-4 border-white shadow-lg"
                  alt={`${country.name} Flag`}
                />
              </div>

              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10">
                <a
                  href="#"
                  className="text-white text-xl font-semibold uppercase tracking-widest hover:text-yellow-400 transition-colors duration-300"
                >
                  {country.name}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <motion.a
            href="#"
            className="btn bg-red-500 text-white rounded-full py-3 px-6 text-lg font-semibold shadow-lg transition-all duration-300 hover:bg-yellow-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            More Countries
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default Countries;
