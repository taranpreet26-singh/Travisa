import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import axios from "axios";

const PopupAdForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const statusColor = useRef();

  async function handleSub(e) {
    e.preventDefault();
    try {
      const response = await axios.post("https://visa-server-gtl5.onrender.com/mail", {
        name,
        phone,
        email,
        subject,
        message,
      });

      if (response.status === 200) {
        setStatus("✅ Message Sent Successfully!");
        statusColor.current.style.color = "green";
      } else {
        setStatus("❌ Failed to Send Message");
        statusColor.current.style.color = "red";
      }
    } catch (error) {
      setStatus("⚠️ An error occurred");
      statusColor.current.style.color = "red";
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[1000]">
      <motion.div
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-lg relative"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-all duration-300"
          onClick={onClose}
        >
          ✖
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">
          ✈️ Expert Visa Consultancy!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Need assistance with your <strong>Student Visa</strong> or <strong>Visitor Visa</strong>?  
          Contact us today and let our experts guide you through the process.
        </p>

        {/* Form Fields */}
        <div className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Your Message"
            className="p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 outline-none"
            rows="4"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>

        {/* Status Message */}
        <div ref={statusColor} className="text-center font-semibold mt-3">{status}</div>

        {/* Buttons */}
        <div className="flex justify-center space-x-4 mt-6">
          <button
            className="bg-blue-500 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
            onClick={handleSub}
          >
            📩 Get Consultation
          </button>
          <button
            className="bg-gray-400 text-white font-semibold px-5 py-3 rounded-lg shadow-md hover:bg-gray-500 transition-all duration-300"
            onClick={onClose}
          >
            ❌ Cancel
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default PopupAdForm;
