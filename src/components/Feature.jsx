import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const features = [
  {
    title: "Cost-Effective",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    icon: <img src="/img/money.png" alt="Cost-Effective" className="w-full h-auto" />,
    link: "/service",
  },
  {
    title: "Visa Assistance",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    icon: <img src="/img/operator.png" alt="Visa Assistance" className="w-full h-auto" />,
    link: "/service",
  },
  {
    title: "Faster Processing",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    icon: <img src="/img/faster.png" alt="Faster Processing" className="w-full h-auto" />,
    link: "/service",
  },
  {
    title: "Direct Interviews",
    description: "Dolor, sit amet consectetur adipisicing elit. Soluta inventore cum accusamus.",
    icon: <img src="/img/meeting.png" alt="Direct Interviews" className="w-full h-auto" />,
    link: "/service",
  },
];


const Features = () => {
  return (
    <div className="bg-[#212428] max-h-fit overflow-hidden">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="text-center mb-12">
          <h5 className="text-[#ff014f] text-xl font-semibold uppercase tracking-wider mb-2">Why Choose Us</h5>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Offer Tailor-Made Services That Our Clients Require</h1>
          <p className="text-[#ff014f] text-base md:text-lg mx-auto w-full md:w-10/12 lg:w-8/12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat deleniti amet at atque sequi quibusdam
            cumque itaque repudiandae temporibus, eius nam mollitia voluptas maxime veniam necessitatibus saepe in ab?
            Repellat!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="feature-item text-center p-6 bg-white rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl"
            >
              <div className="feature-icon bg-[#ff014f] text-white rounded-full p-4 mb-4 inline-block">
                {feature.icon}
              </div>
              <div className="feature-content flex flex-col items-center">
                <h5 className="mb-3 text-[#ff014f] text-xl font-semibold">{feature.title}</h5>
                <p className="mb-4 text-gray-600 text-sm">{feature.description}</p>
                <Link
                  to={feature.link}
                  className="btn bg-transparent text-[#ff014f] border-2 border-[#ff014f] rounded-full py-2 px-6 text-sm transition-all duration-300 hover:bg-[#ff014f] hover:text-white flex items-center justify-center"
                >
                  Read More
                  <i className="fas fa-arrow-right ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}

          <div className="col-span-1 sm:col-span-2 lg:col-span-3 xl:col-span-4 mt-8 mb-10 text-center">
            <Link
              to="/service"
              className="btn bg-[#ff014f] text-white rounded-full py-3 px-6 text-lg hover:bg-transparent hover:text-[#ff014f] border-2 border-[#ff014f] transition-all duration-300"
            >
              More Features
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
