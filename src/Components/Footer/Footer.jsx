import React from 'react'
import { motion } from 'framer-motion'
import {
  FaHeart,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaArrowUp,
  FaCode,
  FaCoffee,
} from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/SHARIFULALAM2025',
      label: 'GitHub',
      bg: 'hover:bg-gray-800',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sharifulalam-dev',
      label: 'LinkedIn',
      bg: 'hover:bg-blue-600',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/profile.php?id=61577170528426',
      label: 'Facebook',
      bg: 'hover:bg-blue-700',
    },
  ]

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-gray-100 relative">
      {/* Back to top */}
      <motion.button
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.95 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowUp />
      </motion.button>

      <div className="container-custom py-16">
        <motion.div
          className="grid md:grid-cols-4 gap-10 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                <FaCode className="text-white text-xl" />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                SHARIFUL ALAM
              </h3>
            </div>
            <p className="text-gray-300 text-lg max-w-md mb-6">
              Full Stack Web Developer passionate about building scalable
              applications and clean user experiences.
            </p>
            <div className="flex items-center gap-3 text-gray-400 text-sm">
              <span>Built with</span>
              <span>⚛️</span>
              <span>🎨</span>
              <span>🟨</span>
              <FaCoffee className="text-amber-500" />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() =>
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="block text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Social */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-xl font-bold mb-6">Connect With Me</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 bg-gray-800 ${social.bg} rounded-2xl flex items-center justify-center transition`}
                    aria-label={social.label}
                  >
                    <Icon />
                  </motion.a>
                )
              })}
            </div>
            <div className="text-sm text-gray-400 space-y-1">
              <p>📧 sharifullinkdin2025@gmail.com</p>
              <p>📱 +8801829197321</p>
              <p>📍 Uttara Sector-13,Road-5,House:65 Dhaka -Bangladesh</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          variants={fadeInUp}
          className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {currentYear} SHARIFUL ALAM · Made with
            <FaHeart className="text-red-500" /> & coffee
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            <FaCode className="text-blue-400" />
            React & Tailwind CSS
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
