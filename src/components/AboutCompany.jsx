import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { PhoneCall, CheckCircle, MapPin, FileText } from "lucide-react";

const AboutCompany = () => {

  return (
    <div className="bg-[#212428] text-white py-10">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <img src="img/about-2.png" className="w-full" alt="About Us" />
              <img
                src="img/about-3.jpg"
                className="w-full border-t-4 border-[#ff014f] rounded-t-full"
                alt="About Us"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <h5 className="text-[#ff014f] text-xl font-semibold">About the Company</h5>
            <h1 className="text-4xl font-bold mt-2 mb-5">We’re a Trusted Immigration Consultant Agency.</h1>
            <p className="text-gray-300 mb-6">
              We provide expert immigration consultation services to help individuals and businesses navigate the complexities of visa applications and international relocations.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="flex items-center">
                <MapPin size={36} className="text-gray-400" />
                <h5 className="ml-3 text-lg">Best Immigration Resources</h5>
              </div>
              <div className="flex items-center">
                <FileText size={36} className="text-gray-400" />
                <h5 className="ml-3 text-lg">Return Visas Available</h5>
              </div>
            </div>

            <div className="flex flex-wrap items-center">
              <div className="bg-gray-800 text-center rounded-lg p-6">
                <FileText size={40} className="text-[#ff014f] mb-2" />
                <h1 className="text-4xl font-bold">34</h1>
                <p className="text-gray-400">Years of Experience</p>
              </div>

              <div className="ml-6">
                {[
                  "Offer 100% Genuine Assistance",
                  "Faster & Reliable Execution",
                  "Accurate & Expert Advice"
                ].map((text, index) => (
                  <p key={index} className="text-lg flex items-center mt-2">
                    <CheckCircle className="text-[#ff014f] mr-2" />
                    {text}
                  </p>
                ))}
              </div>
            </div>

            <div className="flex items-center mt-6">
              <motion.div whileHover={{ scale: 1.1 }} className="mr-4">
                <a href="tel:+01234567890" className="relative flex items-center justify-center text-[#ff014f]">
                  <PhoneCall size={36} />
                </a>
              </motion.div>

              <div>
                <span className="text-[#ff014f] text-lg">Have any questions?</span>
                <p className="font-bold text-2xl tracking-wide">Free: +0123 456 7890</p>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
