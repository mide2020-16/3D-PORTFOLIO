import React from 'react'
import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { slideIn } from '../utilities/motion'

const Contact = () => {
  const [dots, setDots] = useState("")
  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target 
    setForm({ ...form, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_0dc7e89", "template_l8oqhvo",
      {
        from_name: form.name,
        to_name: 'Efuwape Ayomide',
        from_email: form.email,
        to_email: 'efuwapeayomide51@gmail.com',
        message: form.message
      },
      "PmT9_tCwfHCOiGvz5"
    )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as possible.')
        setForm({
          name: '',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert("Something went wrong. Check your connection and try again!")
        })
      })
    setTimeout(handleSubmit(), 10000);
  }
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] rounded-2xl p-8 bg-black-100"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4"
            >
              Your Name
            </span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span
              className="text-white font-medi
             mb-4"
            >
              Your Email
            </span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              required
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span
              className="text-white font-medi
             mb-4"
            >
              Your Message
            </span>
            <textarea
              name="message"
              rows="7"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="What's do you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
             />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold uppercase tracking-wider shadow-md shadow-primary rounded-xl"
          >
            {loading ? "sending...": "send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  );
}

export default Contact