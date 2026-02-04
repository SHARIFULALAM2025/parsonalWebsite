import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaServer, FaTools, FaStar } from 'react-icons/fa'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: FaCode,
      color: 'from-blue-500 to-cyan-500',
      border: 'border-blue-200 dark:border-blue-700/30',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Tailwind CSS', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'JavaScript', level: 88 },
        { name: 'TypeScript', level: 75 },
        { name: 'HTML & CSS', level: 92 },
      ],
    },
    {
      title: 'Backend Development',
      icon: FaServer,
      color: 'from-green-500 to-emerald-500',
      border: 'border-green-200 dark:border-green-700/30',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'MongoDB', level: 78 },
        { name: 'SQL', level: 70 },
        { name: 'REST API', level: 88 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: FaTools,
      color: 'from-purple-500 to-pink-500',
      border: 'border-purple-200 dark:border-purple-700/30',
      skills: [
        { name: 'Git & GitHub', level: 90 },
        { name: 'Firebase', level: 82 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
      ],
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

  const progressBar = (level) => ({
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1, ease: 'easeOut' },
    },
  })

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold text-gray-900 dark:text-white"
            variants={fadeInUp}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-400 mt-3 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Technologies and tools I use to build modern web applications
          </motion.p>
        </motion.div>

        {/* Skill Cards */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          {skillCategories.map((cat, i) => {
            const Icon = cat.icon
            return (
              <motion.div
                key={i}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg border ${cat.border}`}
                variants={fadeInUp}
              >
                {/* Card Header */}
                <div className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${cat.color} flex items-center justify-center`}
                  >
                    <Icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="p-6 space-y-4">
                  {cat.skills.map((skill, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-1">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${cat.color}`}
                          variants={progressBar(skill.level)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Summary */}
        <motion.div
          className="mt-16 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' },
          }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <FaStar className="text-yellow-500" />
            <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
              Continuous Learning
            </h4>
            <FaStar className="text-yellow-500" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            I continuously improve my skills by learning new technologies, best
            practices, and building real-world applications.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
