import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa'

const Hero = () => {
  const handleDownloadResume = () => {
    window.open(
      'https://drive.google.com/file/d/1LOn-iHcLKPI9uPkJE6nv3JnTGbRpcMOi/view?usp=sharing',
      '_blank'
    )
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

  // Motion variants
  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
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

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div className="text-center lg:text-left" variants={fadeInUp}>
            <motion.p className="text-lg font-medium text-gray-600 dark:text-gray-300 mb-4">
              Welcome to my digital world
            </motion.p>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6"
              variants={fadeInUp}
            >
              <span className="block text-gray-800 dark:text-gray-100">
                Hi, I'm
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400">
                SHARIFUL ALAM
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl sm:text-3xl font-bold text-gray-700 dark:text-gray-200 mb-4"
              variants={fadeInUp}
            >
              Full Stack Web Developer
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              variants={fadeInUp}
            >
              Specializing{' '}
              <span className="font-semibold text-blue-600 dark:text-blue-400">
                React.js, Node.js, MongoDB
              </span>{' '}
              — I build scalable, clean, and user-focused web applications.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-10"
              variants={fadeInUp}
            >
              <button
                onClick={handleDownloadResume}
                className="flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-xl hover:from-blue-700 hover:to-purple-700 transition"
              >
                <FaDownload />
                Download Resume
              </button>

              <button
                onClick={handleGetInTouch}
                className="border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold py-4 px-8 rounded-xl hover:bg-blue-600 dark:hover:bg-blue-400 hover:text-white dark:hover:text-gray-900 transition"
              >
                Get In Touch
              </button>
            </motion.div>

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
                  aria-label={social.label}
                  className="w-12 h-12 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white transition shadow-md"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div className="flex justify-center" variants={fadeInScale}>
            <div className="w-80 h-80 sm:w-96 sm:h-96 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 p-2 shadow-2xl">
              <div className="w-full h-full rounded-full bg-white dark:bg-gray-800 overflow-hidden">
                <img
                  src="https://i.ibb.co.com/FktNZkRs/624134077-122170056674905684-5192487309492115686-n-removebg-preview.png"
                  alt="Shariful Alam"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
