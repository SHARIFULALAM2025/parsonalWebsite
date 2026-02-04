import React from 'react'
import { motion } from 'framer-motion'
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaAward,
  FaBriefcase,
  FaChartLine,
  FaUsers,
} from 'react-icons/fa'

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Computer Science',
      institution: 'Atish Dipankar University of Science & Technology (ADUST)',
      location: 'Sector #15, Uttara, Dhaka-1230 Bangladesh',
      period: '2023 - running',
      gpa: '3.50/4.0',
      description:
        'Specialized in Software Engineering and Web Development. Completed coursework in Data Structures, Algorithms, Database Systems, and Software Architecture.',
      achievements: [
        "Dean's List for 6 consecutive semesters",
        'President of Computer Science Society',
        'Winner of Annual Hackathon 2021',
      ],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      degree: '',
      institution: 'Government Suhrawardi College, (HSC)',
      location: 'HXM8+7VM, Pirojpur Pourashava 8500',
      period: '2020 - 2022 ',
      gpa: '4.08/5',
      description:
        'Focused on Science stream with Mathematics, Physics, and Computer Science as major subjects.',
      achievements: [
        'Valedictorian of graduating class',
        'National Merit Scholar',
        'First place in State Science Fair',
      ],
      color: 'from-purple-500 to-pink-500',
    },
  ]

  const experience = [
    {
      position: 'Senior Frontend Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2023 - Present',
      type: 'Full-time',
      description:
        'Leading frontend development for enterprise web applications serving 100K+ users.',
      responsibilities: [
        'Architected scalable React applications',
        'Improved performance by 40%',
        'Led a team of 4 frontend developers',
        'Implemented CI/CD pipelines',
      ],
      color: 'from-green-500 to-emerald-500',
      current: true,
    },
    {
      position: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2022 - 2023',
      type: 'Full-time',
      description:
        'Developed and maintained full-stack applications using React and Node.js.',
      responsibilities: [
        'Built responsive web applications',
        'Designed RESTful APIs',
        'Collaborated with UI/UX designers',
        'Worked in agile environment',
      ],
      color: 'from-indigo-500 to-purple-500',
      current: false,
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
      id="education"
      className="section-padding bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            variants={fadeInUp}
          >
            Education & Experience
            <span className="block mx-auto mt-3 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Academic background and professional journey
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Education */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/30 overflow-hidden"
                variants={fadeInUp}
              >
                <div className={`p-6 bg-gradient-to-r ${edu.color}`}>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-white/90 font-medium">{edu.institution}</p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {edu.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {edu.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaAward /> GPA: {edu.gpa}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {edu.description}
                  </p>

                  <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                    <FaChartLine className="text-green-500" />
                    Key Achievements
                  </h5>

                  <ul className="space-y-2">
                    {edu.achievements.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3"
                        variants={fadeInUp}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Experience */}
          <motion.div
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700/30 overflow-hidden relative"
                variants={fadeInUp}
              >
                {exp.current && (
                  <span className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                    Current
                  </span>
                )}

                <div className={`p-6 bg-gradient-to-r ${exp.color}`}>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {exp.position}
                  </h4>
                  <p className="text-white/90 font-medium">{exp.company}</p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-white/80">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">
                      {exp.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  <h5 className="font-bold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                    <FaUsers className="text-blue-500" />
                    Responsibilities
                  </h5>

                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <motion.li
                        key={i}
                        className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-3"
                        variants={fadeInUp}
                      >
                        <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2"></span>
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Education
