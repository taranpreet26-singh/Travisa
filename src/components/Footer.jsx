import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#212428] text-white py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-48">
          <div className="footer-item space-y-4">
            <h4 className="text-[#ff014f] text-2xl font-semibold">Contact Info</h4>
            <p className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fa fa-map-marker-alt mr-2"></i> 123 Street, New York, USA
            </p>
            <p className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-envelope mr-2"></i> info@example.com
            </p>
            <p className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-phone mr-2"></i> +012 345 67890
            </p>
            <p className="flex items-center text-gray-300 hover:text-white transition-all mb-3">
              <i className="fas fa-print mr-2"></i> +012 345 67890
            </p>
            <div className="flex space-x-3">
              <Link
                to="https://www.facebook.com"
                className="btn text-[#ff014f] hover:text-white hover:bg-[#ff014f] transition-all py-2 px-3 rounded-full"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                to="https://www.twitter.com"
                className="btn text-[#ff014f] hover:text-white hover:bg-[#ff014f] transition-all py-2 px-3 rounded-full"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                to="https://www.instagram.com"
                className="btn text-[#ff014f] hover:text-white hover:bg-[#ff014f] transition-all py-2 px-3 rounded-full"
              >
                <i className="fab fa-instagram"></i>
              </Link>
              <Link
                to="https://www.linkedin.com"
                className="btn text-[#ff014f] hover:text-white hover:bg-[#ff014f] transition-all py-2 px-3 rounded-full"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          <div className="footer-item space-y-4">
            <h4 className="text-[#ff014f] text-2xl font-semibold">Opening Time</h4>
            <div>
              <h6 className="text-gray-400">Mon - Fri:</h6>
              <p>09.00 am to 07.00 pm</p>
            </div>
            <div>
              <h6 className="text-gray-400">Saturday:</h6>
              <p>10.00 am to 05.00 pm</p>
            </div>
            <div>
              <h6 className="text-gray-400">Vacation:</h6>
              <p>All Sundays are our vacation</p>
            </div>
          </div>

          <div className="footer-item space-y-4">
            <h4 className="text-[#ff014f] text-2xl font-semibold">Our Services</h4>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Business
            </Link>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Evaluation
            </Link>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Migrate
            </Link>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Study
            </Link>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Counselling
            </Link>
            <Link to="/service" className="flex items-center text-gray-300 hover:text-white transition-all">
              <i className="fas fa-angle-right mr-2"></i> Work / Career
            </Link>
          </div>

          
        </div>

        <div className="mt-10 text-center text-gray-400">
          <p>&copy; 2025 Your Company. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
