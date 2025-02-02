import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Person Name 1",
    profession: "Profession 1",
    image: "https://via.placeholder.com/100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
  },
  {
    name: "Person Name 2",
    profession: "Profession 2",
    image: "https://via.placeholder.com/100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
  },
  {
    name: "Person Name 3",
    profession: "Profession 3",
    image: "https://via.placeholder.com/100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
  },
  {
    name: "Person Name 4",
    profession: "Profession 4",
    image: "https://via.placeholder.com/100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
  },
  {
    name: "Person Name 5",
    profession: "Profession 5",
    image: "https://via.placeholder.com/100",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati eiusmod tempor incididunt.",
  },
];

const Testimonial = () => {
  return (
    <div className="bg-[#212428] py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h5 className="text-[#ff014f] text-xl font-semibold uppercase mb-2">
            OUR CLIENTS REVIEWS
          </h5>
          <h1 className="text-white text-3xl sm:text-4xl font-bold mb-4">
            What Our Clients Say
          </h1>
          <p className="text-gray-400 text-lg sm:w-10/12 md:w-8/12 mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            deleniti amet at atque sequi quibusdam cumque itaque repudiandae
            temporibus, eius nam mollitia voluptas maxime veniam necessitatibus
            saepe in ab? Repellat!
          </p>
        </div>

        <div className="overflow-hidden relative">
          <div className="flex space-x-8 animate-scroll">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="testimonial-item bg-white w-full sm:w-180 md:w-106 lg:w-100 rounded-xl shadow-lg hover:scale-105 transform transition-all p-6"
              >
                <div className="mb-5">
                  <p className="text-lg mb-4 text-gray-700">{testimonial.review}</p>
                  <div className="flex justify-center space-x-1 text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="fas fa-star" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center mt-5">
                  <div
                    className="rounded-full me-4"
                    style={{ width: "80px", height: "80px" }}
                  >
                    <img
                      className="rounded-full object-cover w-full h-full"
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                  </div>
                  <div>
                    <h5 className="text-xl font-semibold text-gray-800">
                      {testimonial.name}
                    </h5>
                    <p className="text-gray-500">{testimonial.profession}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
