import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { Globe, Users, CheckCircle, Handshake } from "lucide-react";

const counters = [
  { icon: <Globe size={40} />, label: "Visa Categories", value: 31, suffix: "+" },
  { icon: <Users size={40} />, label: "Team Members", value: 10, suffix: "+" },
  { icon: <CheckCircle size={40} />, label: "Visa Process", value: 4.9, suffix: "K" },
  { icon: <Handshake size={40} />, label: "Success Rates", value: 98, suffix: "%" },
];

const CounterSection = () => {
  return (
    <div className="bg-[#212428] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {counters.map((counter, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gray-800 shadow-lg flex flex-col items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-[#ff014f] mb-4">{counter.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{counter.label}</h3>
              <div className="flex items-center text-4xl font-bold">
                <CountUp start={0} end={counter.value} duration={3} />
                <span className="text-[#ff014f] ml-1">{counter.suffix}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
