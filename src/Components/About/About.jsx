import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaCoffee, FaCamera, FaPlane, FaHeart } from 'react-icons/fa'

const About = () => {
  const hobbies = [
    {
      icon: FaCode,
      name: 'Coding',
      description: 'Building innovative solutions',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FaCoffee,
      name: 'Coffee',
      description: 'Fuel for creativity',
      color: 'from-amber-500 to-orange-500',
    },
    {
      icon: FaCamera,
      name: 'Photography',
      description: 'Capturing moments',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FaPlane,
      name: 'Traveling',
      description: 'Exploring new cultures',
      color: 'from-green-500 to-emerald-500',
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
      id="about"
      className="py-24 bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container-custom">
        {/* Section Header */}
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
            About Me
          </motion.h2>
          <motion.div
            className="mx-auto mt-4 w-28 h-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
            variants={fadeInUp}
          ></motion.div>
          <motion.p
            className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        <motion.div
          className="grid lg:grid-cols-2 gap-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {/* LEFT CONTENT */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-3xl p-10 shadow-xl border border-gray-100 dark:border-gray-700"
            variants={fadeInUp}
          >
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              My Programming Journey
            </h3>
            <div className="space-y-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Welcome to my digital world! I'm{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">
                  SHARIFUL ALAM
                </span>
                , a passionate Full Stack Web Developer with over 3 years of
                experience crafting innovative web solutions.
              </p>
              <p>
                I specialize in{' '}
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  React.js
                </span>
                ,{' '}
                <span className="font-semibold text-green-600 dark:text-green-400">
                  Node.js
                </span>
                , cloud platforms, and modern web technologies.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or pursuing my hobbies. I
                believe that continuous learning and curiosity are keys to
                growth.
              </p>
            </div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-10"
              variants={container}
            >
              <motion.div
                className="rounded-2xl p-6 text-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20"
                variants={fadeInUp}
              >
                <div className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                  50+
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
                  Projects Completed
                </p>
              </motion.div>

              <motion.div
                className="rounded-2xl p-6 text-center bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20"
                variants={fadeInUp}
              >
                <div className="text-4xl font-extrabold text-purple-600 dark:text-purple-400">
                  3+
                </div>
                <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">
                  Years Experience
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div className="space-y-12" variants={fadeInUp}>
            {/* Hobbies */}
            <motion.div variants={container}>
              <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
                Hobbies & Interests
              </h3>
              <motion.div
                className="grid grid-cols-2 gap-6"
                variants={container}
              >
                {hobbies.map((hobby, index) => {
                  const Icon = hobby.icon
                  return (
                    <motion.div
                      key={index}
                      className="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg border border-gray-100 dark:border-gray-700 text-center"
                      variants={fadeInUp}
                    >
                      <div
                        className={`mx-auto mb-4 w-16 h-16 rounded-2xl bg-gradient-to-r ${hobby.color} flex items-center justify-center`}
                      >
                        <Icon size={30} className="text-white" />
                      </div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">
                        {hobby.name}
                      </h4>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        {hobby.description}
                      </p>
                    </motion.div>
                  )
                })}
              </motion.div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="bg-gradient-to-r from-blue-50 via-purple-50 to-indigo-50 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-indigo-900/20 rounded-3xl p-8 border-l-4 border-blue-500 shadow-lg"
              variants={fadeInUp}
            >
              <blockquote className="text-xl italic text-gray-700 dark:text-gray-300 mb-4">
                "Code is like humor. When you have to explain it, it's bad."
              </blockquote>
              <cite className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <FaHeart className="text-red-500" /> Cory House
              </cite>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
