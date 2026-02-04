import React from 'react'
import { motion } from 'framer-motion'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa'

const Contact = () => {
  const contactInfo = [
    {
      icon: FaEnvelope,
      label: 'Email',
      value: 'sharifullinkdin2025@gmail.com',
      href: 'mailto:sharifullinkdin2025@gmail.com',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaPhoneAlt,
      label: 'Phone',
      value: '+8801829197321',
      href: 'tel:+8801829197321',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: FaWhatsapp,
      label: 'WhatsApp',
      value: '+8801829197321',
      href: 'https://wa.me/8801829197321',
      color: 'from-green-600 to-green-500',
    },
    {
      icon: FaMapMarkerAlt,
      label: 'Location',
      value: 'Uttara Sector-13,Road-5,House:65 Dhaka -Bangladesh',
      href: '#',
      color: 'from-red-500 to-pink-500',
    },
  ]

  // Motion Variants
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section
      id="contact"
      className="py-24 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-gray-100"
            variants={fadeInUp}
          >
            Get In Touch
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 w-28 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"
            variants={fadeInUp}
          />
          <motion.p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* LEFT SIDE – CONTACT INFO */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <motion.a
                  key={index}
                  href={info.href}
                  target={info.label === 'WhatsApp' ? '_blank' : undefined}
                  rel={
                    info.label === 'WhatsApp'
                      ? 'noopener noreferrer'
                      : undefined
                  }
                  className="flex items-center gap-6 p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition"
                  variants={fadeInUp}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${info.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 dark:text-gray-200">
                      {info.label}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              )
            })}

            {/* Availability */}
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
              variants={fadeInUp}
            >
              <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-3">
                <FaClock className="text-blue-500" />
                Availability
              </h4>

              <div className="space-y-4 text-gray-600 dark:text-gray-400">
                <div className="flex justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span>Monday – Friday</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    9:00 AM – 6:00 PM
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span>Saturday</span>
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">
                    10:00 AM – 2:00 PM
                  </span>
                </div>
                <div className="flex justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
                  <span>Sunday</span>
                  <span className="font-semibold text-red-600 dark:text-red-400">
                    Closed
                  </span>
                </div>
              </div>

              <p className="mt-6 text-sm text-blue-600 dark:text-blue-400">
                💡 For urgent matters, feel free to reach out via WhatsApp
                anytime!
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – CONTACT FORM */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8">
              Send Me a Message
            </h3>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email Address *"
                  className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>

              <input
                type="text"
                placeholder="Subject *"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project or just say hello!"
                className="w-full px-5 py-4 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
              ></textarea>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold py-4 rounded-xl hover:shadow-xl transition"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
