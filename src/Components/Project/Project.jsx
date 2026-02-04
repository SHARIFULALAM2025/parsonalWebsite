import React from 'react'
import { motion } from 'framer-motion'
import { FaExternalLinkAlt, FaGithub, FaBolt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: 'E-Commerce Platform',
      image:
        'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      shortDescription: 'Full-stack e-commerce solution with React and Node.js',
      techStack: ['React.js', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
      liveLink: 'https://example-ecommerce.com',
      githubClient: 'https://github.com/sharifulalam/ecommerce-client',
      featured: true,
    },
    {
      id: 2,
      name: 'Task Management App',
      image:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      shortDescription: 'Collaborative task management with real-time updates',
      techStack: ['React.js', 'Firebase', 'Material-UI', 'Socket.io'],
      liveLink: 'https://example-taskmanager.com',
      githubClient: 'https://github.com/sharifulalam/task-manager',
      featured: false,
    },
    {
      id: 3,
      name: 'Weather Dashboard',
      image:
        'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      shortDescription: 'Beautiful weather app with forecasts and maps',
      techStack: ['Next.js', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      liveLink: 'https://example-weather.com',
      githubClient: 'https://github.com/sharifulalam/weather-dashboard',
      featured: false,
    },
  ]

  const carouselItems = [...projects, ...projects] // duplicate for infinite scroll

  // Motion Variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  const techVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  return (
    <section
      id="projects"
      className="section-padding bg-white dark:bg-gray-800 transition-colors duration-500"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaBolt className="text-yellow-500 text-3xl animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <FaBolt className="text-yellow-500 text-3xl animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Some of my recent works showcasing real-world applications
          </p>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: projects.length * 4,
                ease: 'linear',
              },
            }}
          >
            {carouselItems.map((project, idx) => (
              <motion.div
                key={idx}
                className={`flex-none w-80 md:w-96 bg-white dark:bg-gray-700 rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-105 transition-transform duration-300 ${
                  project.featured ? 'ring-2 ring-yellow-400/50' : ''
                }`}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Image */}
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.shortDescription}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.techStack.slice(0, 3).map((tech, i) => (
                      <motion.span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400"
                        custom={i}
                        variants={techVariants}
                        initial="hidden"
                        animate="visible"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:scale-105 transition"
                    >
                      <FaExternalLinkAlt size={14} />
                      Live
                    </a>
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-500 py-3 rounded-xl flex items-center justify-center gap-2 font-semibold hover:bg-gray-800 hover:text-white transition"
                    >
                      <FaGithub size={16} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Projects
