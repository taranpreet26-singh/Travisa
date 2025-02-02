import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import axios from "axios"

const Form = () => {

  const [name,setName] = useState('')
  const [phone,setPhone] = useState('')
  const [email,setEmail] = useState('')
  const [subject,setSubject] = useState('')
  const [message,setMessage] = useState('')
  const [status,setStatus] = useState('')

  const statusColor = useRef()
  
  async function handleSub(e){
    e.preventDefault()
    const response = await axios.post('https://visa-server-gtl5.onrender.com/mail',{
     name:"taran",
    phone:"124342",
    email:"example.com",
    subject:"hii this is subject",
    message:"asdhfkuahsdfuadksfdnasjfuicdbafvdalgbs"
    })
    console.log(response)
    if(response.status === 200){
      setStatus(response.data)
      statusColor.current.style.color = "green"
    }else{
      setStatus(response.data)
      statusColor.current.style.color = "red"
    }
  }



  return (
    <div className="bg-[#212428] grid lg:grid-cols-2 grid-cols-1 px-10 py-10 lg:px-24 lg:py-20 gap-10">
      {/* Left Container */}
      <motion.div
        className="left-container bg-[#212428] p-10 rounded-3xl shadow-2xl shadow-black flex flex-col items-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex justify-center w-full">
          <motion.div
            whileHover={{scale:1.2}}
            transition={{duration:0.4}}
          >
          <img
            src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png"
            className="rounded-2xl max-w-full"
            alt="Consultant"
            />
            </motion.div>
        </div>
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold">Nevine Acotanza</h1>
          <h2 className="text-3xl font-semibold">Visa Consultant</h2>
          <p className="text-lg mt-2">You can reach out to me via mail or contact details below</p>
        </div>
        <div className="text-center text-white">
          <p className="text-lg">Phone: +91 90236 44254</p>
          <p className="text-lg">Email: admin@exmaple.com</p>
        </div>
        <div className="flex justify-center gap-6 mt-4">
          <motion.div
            className="icon"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M23.643 4.937a9.466 9.466 0 0 1-2.825.775 4.93 4.93 0 0 0 2.165-2.723 9.863 9.863 0 0 1-3.127 1.202 4.917 4.917 0 0 0-8.384 4.482A13.978 13.978 0 0 1 1.671 3.15a4.93 4.93 0 0 0 1.523 6.573A4.872 4.872 0 0 1 .96 8.7v.062a4.918 4.918 0 0 0 3.94 4.827 4.904 4.904 0 0 1-2.212.085 4.925 4.925 0 0 0 4.604 3.419A9.869 9.869 0 0 1 0 19.54a13.934 13.934 0 0 0 7.548 2.212c9.056 0 14.002-7.507 14.002-14.002 0-.213-.005-.426-.014-.637A9.934 9.934 0 0 0 24 4.59a9.476 9.476 0 0 1-2.357.347z" />
            </svg>
          </motion.div>
          <motion.div
            className="icon"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.5C4 7.5 3 6.45 3 5.24s1-2.25 2.34-2.25c1.34 0 2.33 1.01 2.33 2.25s-1 2.26-2.33 2.26zM20.45 20.45h-3.56v-5.56c0-1.33-.03-3.04-1.85-3.04s-2.14 1.45-2.14 2.95v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.41-1.85 3.65 0 4.32 2.4 4.32 5.51v6.24z" />
            </svg>
          </motion.div>
          <motion.div
            className="icon"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.3 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M22.675 0h-21.35C.596 0 0 .593 0 1.326v21.348C0 23.406.596 24 1.325 24h11.495V14.706h-3.13v-3.63h3.13V8.412c0-3.1 1.894-4.787 4.659-4.787 1.325 0 2.463.098 2.795.142v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.59l-.467 3.63h-3.123V24h6.126c.728 0 1.324-.594 1.324-1.326V1.326C24 .593 23.404 0 22.675 0z" />
            </svg>
          </motion.div>
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div
        className="form p-10 g-[#212428]  text-[#ff014f] rounded-3xl shadow-xl shadow-black space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="font-semibold text-lg">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              onChange={(e)=>{
                setName(e.target.value)
              }}
              className="p-2 rounded-lg border-2  border-gray-300 focus:outline-none focus:ring- focus:ring-[#ff014f] transition-all"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="phone" className="font-semibold text-lg">
              Phone Number
            </label>
            <input
              type="text"
              required
              name="phone"
              id="phone"
              onChange={(e)=>{
                setPhone(e.target.value)
              }}
              className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff014f] transition-all"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-lg">
            Email
          </label>
          <input
            type="text"
            required
            name="email"
            id="email"
            onChange={(e)=>{
              setEmail(e.target.value)
            }}
            className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff014f] transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-semibold text-lg">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            required
            id="subject"
            onChange={(e)=>{setSubject(e.target.value)}}
            className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff014f] transition-all"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold text-lg">
            Your Message
          </label>
          <textarea
            name="message"
            id="message"
            required
            onChange={(e)=>{
              setMessage(e.target.value)
            }}
            rows={4}
            className="p-2 rounded-lg border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#ff014f] transition-all"
          />
        </div>
        <div ref={statusColor}>{status}</div>
        <motion.button
          className="bg-[#ff014f] text-white p-3 rounded-lg hover:bg-[#e10a42] transition-all mt-4 w-full"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.3 }}
          onClick={handleSub}
        >
          Submit
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Form;
