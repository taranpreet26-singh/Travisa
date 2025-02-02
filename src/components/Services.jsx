import React from "react";
import { useNavigate } from "react-router-dom";

const visaCategories = [
  { title: "Student Visa", img: "img/service-1.jpg" },
  { title: "Visitor Visa", img: "img/service-2.jpg" },
  { title: "Tourist Visa", img: "img/service-3.jpg" }
];

const VisaCategories = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid bg-[#212428] py-10">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center mb-10">
          <h5 className="text-[#ff014f] text-lg font-semibold uppercase tracking-wider">Visa Categories</h5>
          <h1 className="text-4xl font-bold text-white mt-3">Enabling Your Immigration Successfully</h1>
          <p className="text-[#ff014f] mt-4">Explore various visa options to suit your needs.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {visaCategories.map((visa, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={visa.img}
                className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110"
                alt={visa.title}
              />

              <div className="p-5">
                <h4 className="text-[#ff014f] text-xl font-semibold mb-3">{visa.title}</h4>
                <p className="text-gray-600 mb-5">Learn more about the {visa.title} process and requirements.</p>
                <button
                  className="w-full bg-[#ff014f] text-white font-medium py-2 rounded-md hover:bg-[#ff1744] transition duration-300 transform hover:scale-105"
                  onClick={handleNavigation}
                >
                  Explore More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VisaCategories;
