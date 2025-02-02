import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Emily Johnson",
    profession: "Software Engineer",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The visa application process was seamless and stress-free. The team provided excellent guidance and ensured all my documents were in order. Highly recommended!",
  },
  {
    name: "Michael Smith",
    profession: "Business Consultant",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "I was impressed by the professionalism and efficiency. They handled everything smoothly, and I got my visa much faster than expected. A great service overall!",
  },
  {
    name: "Sophia Martinez",
    profession: "Freelance Writer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    review:
      "Very reliable and knowledgeable team! They answered all my queries patiently and guided me through every step. I will definitely use their services again.",
  },
  {
    name: "Daniel Lee",
    profession: "Marketing Manager",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    review:
      "The customer support was outstanding! They kept me updated throughout the entire process, making everything so simple and hassle-free. Thank you!",
  },
  {
    name: "Olivia Brown",
    profession: "University Student",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
    review:
      "Getting a student visa seemed overwhelming, but this team made it so easy! They guided me through everything, and I got my visa without any issues.",
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
          Our clients trust us for a smooth and hassle-free visa application process. They appreciate our expertise, personalized support, and commitment to making the journey stress-free. Many have shared how our team guided them step by step, ensuring accurate documentation and timely approvals.
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
