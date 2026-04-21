import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaAward,
} from 'react-icons/fa'
import Container from '../Container/Container'

const Hero = () => {
  const [mounted, setMounted] = useState(false)

  const bgStyle = {
    backgroundColor: '#0F172A',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23334155' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H2V1z'%3E%3C/path%3E%3C/svg%3E")`,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleDownloadResume = () => {
    window.open('Resume.pdf', '_blank')
  }
  const handleCertificate = () => {
    window.open('/development2.pdf', '_blank')
  }
  const handleGetInTouch = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  const socialLinks = [
    {
      icon: FaGithub,
      href: 'https://github.com/SHARIFULALAM2025',
      label: 'GitHub',
    },
    {
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/sharifulalam-dev',
      label: 'LinkedIn',
    },
    {
      icon: FaFacebook,
      href: 'https://www.facebook.com/profile.php?id=61577170528426',
      label: 'Facebook',
    },
  ]

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const fadeInScale = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  if (!mounted) return null

  return (
    <div id="home" className="min-h-screen w-full overflow-hidden">
      <Container>
        <section
          style={bgStyle}
          className="flex items-center justify-center min-h-screen py-10 lg:py-20"
        >
          <motion.div
            className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="flex justify-center order-first lg:order-last"
              variants={fadeInScale}
            >
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-1.5 shadow-2xl">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden border-4 border-slate-900/10">
                  <img
                    src="https://i.ibb.co.com/FktNZkRs/624134077-122170056674905684-5192487309492115686-n-removebg-preview.png"
                    alt="Shariful Alam"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                {/* Floating Badge (Optional) */}
                <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-xl hidden sm:block border border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <p className="text-sm font-bold dark:text-white">
                      Available for Work
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Left Content */}
            <motion.div
              className="text-center lg:text-left"
              variants={fadeInUp}
            >
              <motion.p className="text-blue-500 dark:text-blue-400 font-bold tracking-widest uppercase text-sm mb-4">
                Welcome to my digital world
              </motion.p>

              <motion.h1
                className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
                variants={fadeInUp}
              >
                <span className="block text-gray-100">Hi, I'm</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400">
                  SHARIFUL ALAM
                </span>
              </motion.h1>

              <motion.h2
                className="text-xl sm:text-2xl font-bold text-gray-300 mb-6"
                variants={fadeInUp}
              >
                Full Stack Web Developer
              </motion.h2>

              <motion.p
                className="text-base sm:text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0"
                variants={fadeInUp}
              >
                Specializing in{' '}
                <span className="text-white font-semibold">
                  React.js, Node.js, MongoDB
                </span>{' '}
                — I build scalable, clean, and user-focused web applications.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center lg:justify-start mb-10"
                variants={fadeInUp}
              >
                <button
                  onClick={handleDownloadResume}
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-blue-700 transition-all active:scale-95 text-sm sm:text-base"
                >
                  <FaDownload /> Resume
                </button>
                <button
                  onClick={handleCertificate}
                  className="flex items-center justify-center gap-2 bg-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:bg-purple-700 transition-all active:scale-95 text-sm sm:text-base"
                >
                  <FaAward /> Certificate
                </button>
                <button
                  onClick={handleGetInTouch}
                  className="border-2 border-blue-500 text-blue-400 font-bold py-3 px-6 rounded-xl hover:bg-blue-500 hover:text-white transition-all active:scale-95 text-sm sm:text-base"
                >
                  Get In Touch
                </button>
              </motion.div>

              {/* Socials */}
              <motion.div
                className="flex gap-4 justify-center lg:justify-start"
                variants={fadeInUp}
              >
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-gray-800 border border-gray-700 rounded-xl flex items-center justify-center text-gray-300 hover:border-blue-500 hover:text-blue-500 transition-all shadow-lg"
                  >
                    <social.icon size={18} />
                  </a>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </Container>
    </div>
  )
}

export default Hero
