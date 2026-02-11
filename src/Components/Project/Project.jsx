import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FaExternalLinkAlt,
  FaGithub,
  FaBolt,
  FaCheckCircle,
  FaRocket,
} from 'react-icons/fa'
import VisibilityIcon from '@mui/icons-material/Visibility'
import IconButton from '@mui/material/IconButton'
import { Modal, Box, Typography, Divider } from '@mui/material'

// Modal Style - তথ্য বেশি তাই একটু চওড়া (md: 800) করা হয়েছে
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '95%', md: 800 },
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: 'background.paper',
  borderRadius: '24px',
  boxShadow: 24,
  p: { xs: 2, md: 5 },
  outline: 'none',
}

const Projects = () => {
  const [open, setOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)

  const handleOpen = (project) => {
    setSelectedProject(project)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
    setSelectedProject(null)
  }

  const projects = [
    {
      id: 1,
      name: 'BookCourier - Smart Book Delivery & Management',
      fullName: 'BookCourier - Smart Book Delivery & Management',
      image: 'https://i.ibb.co.com/0VYcgYqx/Capture.png',
      shortDescription:
        'BookCourier is a library delivery management system where a users can request book pickup or delivery from this near libraries. a user can easily order a book and easily payment . it is A fast, modern and user-friendly web application for delivering books to the doorsteps of users in Bangladesh. This project provides an online library interface with book browsing, searching, sorting, user authentication, payment integration and complete delivery coverage mapping.',
      purpose:
        'BookCourier aims to bridge the gap between readers and libraries with an intuitive UI, fast delivery support, and secure payment integration.',
      features: [
        'Real-time Book Search & Filtering (Title, Price, Ratings)',
        'Interactive Leaflet Map for Coverage Tracking',
        'Stripe Payment Gateway Integration',
        'Role-Based Dashboard (Admin & User)',
        'Dynamic Feedback Slider with Ratings',
        'Responsive UI/UX optimized for all devices',
      ],
      techStack: {
        frontend: [
          'React',
          'Vite',
          'Tailwind CSS',
          'Material UI',
          'TanStack Query',
          'Framer Motion',
        ],
        backend: ['Express.js', 'MongoDB Atlas', 'Stripe', 'Firebase Auth'],
      },
      liveLink: 'https://assignment-11-7f7d0.web.app',
      githubClient: 'https://github.com/SHARIFULALAM2025/AssignmentClient-11',
      featured: true,
    },

    {
      id: 2,
      name: 'HomeNest',
      fullName: 'HomeNest - Modern Real Estate Marketplace',
      image: 'https://i.ibb.co.com/9m5RhmhR/Captsrsfure.png', // আপনার প্রজেক্টের স্ক্রিনশট লিংক এখানে দিন
      shortDescription:
        'A comprehensive real estate platform for buying, selling, and renting properties with advanced search and secure management.',
      purpose:
        'HomeNest simplifies property transactions by centralizing listings, enhancing transparency between owners and seekers, and providing a seamless management dashboard.',
      features: [
        'Private Routes: Only authenticated users can access listing details.',
        'CRUD Operations: Users can Add, Update, and Delete their own property listings.',
        'Advanced Filtering: Search by location, price range, and property type.',
        'User-Specific Data: Personalized dashboard to view own properties and ratings.',
        'Secure Booking: Users can view recent properties and book them instantly.',
        'Rating System: Integration of @smastrom/react-rating for property feedback.',
      ],
      techStack: {
        frontend: [
          'React 19',
          'Vite',
          'Tailwind CSS',
          'DaisyUI',
          'React Router',
        ],
        backend: ['MongoDB', 'Firebase Auth', 'Dotenv'],
      },
      liveLink: 'https://rococo-bombolone-0cae58.netlify.app', // আপনার লাইভ লিংক দিন
      githubClient: 'https://github.com/SHARIFULALAM2025/AssignmentClient-10', // আপনার গিটহাব লিংক দিন
      featured: false,
    },
    {
      id: 3,
      name: 'Care.xyz',
      fullName: 'Care.xyz - On-Demand Caregiving Platform',
      image: 'https://i.ibb.co.com/BKdpw6Nj/Captfthtfhure.png',
      shortDescription:
        'Care.xyz is a trusted caregiving web platform that helps users easily find and book reliable babysitting, elderly care, and special home care services. It offers secure authentication, location-based booking, cost calculation, and booking tracking to make caregiving simple, safe, and accessible.',
      purpose:
        'Care.xyz aims to make caregiving services easy, secure, and accessible by providing a platform to hire professional caretakers based on duration and location.',
      features: [
        'Dynamic Booking: Location-based hiring with total cost calculation.',
        'Service Management: Specialized categories (Baby Care, Elderly, Sick Care).',
        'Booking Tracking: "My Booking" page for Pending/Confirmed/Completed status.',
        'Secure Auth: Email/Password and Google Social Login via NextAuth.',
        'Notifications: Automatic email alerts using Nodemailer.',
        'Next.js Power: Fast performance with Server Components and App Router.',
      ],
      techStack: {
        frontend: [
          'Next.js 16',
          'React 19',
          'Tailwind CSS',
          'DaisyUI',
          'Swiper.js',
        ],
        backend: [
          'MongoDB',
          'NextAuth.js',
          'React Query',
          'Nodemailer',
          'Bcryptjs',
        ],
      },
      liveLink: 'https://old-care.vercel.app',
      githubClient: 'https://github.com/SHARIFULALAM2025/AssignmentClient-12',
      featured: true,
    },
    {
      id: 4,
      name: 'E-commercial-website',
      fullName: 'E-commercial-website is an E-commercial platform',
      image: 'https://i.ibb.co.com/Myh4HsCh/Capsgsgsture.png',
      shortDescription:
        'it is an E-commercial-website website .user can find his/her product choose easily . they can filter, search the name of category .it has smart feature sech as carousel .smart contract , dashboard-admin customer...',
      purpose:
        'this is a smart project . user can easily order his/her project',
      features: [
        'Dynamic search: category based search',
        'Service Management: category based search (man---women).',
        'order : "easy functionality',
        'contact: smart contact system',
        'browse: category wise browse',
        
      ],
      techStack: {
        frontend: ['React 19', 'Tailwind CSS', 'Material UI', 'Swiper.js'],
        backend: ['MongoDB', 'Nodemailer'],
      },
      liveLink: 'https://my-website-kappa-blue.vercel.app',
      githubClient:
        'https://github.com/SHARIFULALAM2025/E-commercial-website/tree/main/frontend/my-website',
      featured: true,
    },
  ]


  const carouselItems = [...projects, ...projects]

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-3 mb-4">
            <FaBolt className="text-yellow-500 text-3xl animate-pulse" />
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">
              Featured Projects
            </h2>
            <FaBolt className="text-yellow-500 text-3xl animate-pulse" />
          </div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing real-world applications with modern tech stacks.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="overflow-hidden relative w-full">
          <motion.div
            className="flex gap-6"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 30,
                ease: 'linear',
              },
            }}
          >
            {carouselItems.map((project, idx) => (
              <div
                key={idx}
                className={`flex-none w-80 md:w-96 bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-all ${
                  project.featured ? 'ring-2 ring-blue-500/50' : ''
                }`}
              >
                {/* Image Section */}
                <div className="relative group overflow-hidden h-52">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-2 border border-white/30">
                      <IconButton
                        onClick={() => handleOpen(project)}
                        style={{ color: 'white' }}
                      >
                        <VisibilityIcon fontSize="large" />
                      </IconButton>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  <div className="flex gap-3">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 bg-blue-600 text-white py-2 rounded-xl text-center text-sm font-bold hover:bg-blue-700 transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.githubClient}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 border border-gray-300 dark:border-gray-600 dark:text-white py-2 rounded-xl text-center text-sm font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Project Details Modal */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Box sx={modalStyle} className=" custom-scrollbar">
          {selectedProject && (
            <div className="space-y-6">
              {/* Modal Header */}
              <div className="flex justify-between items-center">
                <Typography
                  variant="h5"
                  fontWeight="800"
                  className="text-blue-600 dark:text-blue-400"
                >
                  {selectedProject.fullName || selectedProject.name}
                </Typography>
                <button
                  onClick={handleClose}
                  className="text-gray-400 hover:text-red-500 text-2xl"
                >
                  ×
                </button>
              </div>

              <img
                src={selectedProject.image}
                className="w-full h-64 object-cover rounded-2xl shadow-inner"
                alt="Banner"
              />

              <div className="grid md:grid-cols-2 gap-8">
                {/* Left Side: Purpose & Description */}
                <div className="space-y-4">
                  <div>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      className="flex items-center gap-2 mb-1"
                    >
                      <FaRocket className="text-yellow-500" /> Project Purpose
                    </Typography>
                    <Typography variant="body2" className="text-black">
                      {selectedProject.purpose ||
                        selectedProject.shortDescription}
                    </Typography>
                  </div>
                  <Divider />
                  <div>
                    <Typography
                      variant="subtitle1"
                      fontWeight="bold"
                      className="mb-2"
                    >
                      Tech Stack
                    </Typography>
                    <div className="flex flex-wrap gap-2">
                      {/* Frontend Tech */}
                      {selectedProject.techStack.frontend?.map((tech, id) => (
                        <span
                          key={id}
                          className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded  text-blue-700 dark:bg-blue-900/30 dark:text-black"
                        >
                          {tech}
                        </span>
                      ))}
                      {/* Backend Tech */}
                      {selectedProject.techStack.backend?.map((tech, id) => (
                        <span
                          key={id}
                          className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded  text-purple-700 dark:bg-purple-900/30 dark:text-black"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Key Features */}
                <div className="bg-gray-50  p-5 rounded-2xl">
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    className="flex items-center gap-2 mb-3"
                  >
                    <FaCheckCircle className="text-green-500" /> Key Features
                  </Typography>
                  <ul className="space-y-2">
                    {(
                      selectedProject.features || [
                        'Responsive Design',
                        'Modern UI',
                      ]
                    ).map((feature, i) => (
                      <li
                        key={i}
                        className="text-sm flex items-start gap-2 text-black dark:text-black"
                      >
                        <span className="text-green-500 mt-1">✔</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex gap-4 pt-4">
                <a
                  href={selectedProject.liveLink}
                  className="flex-1 bg-blue-600 text-white py-3 rounded-xl text-center font-bold hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition"
                >
                  View Live Project
                </a>
                <a
                  href={selectedProject.githubClient}
                  className="flex-1 border-2 border-gray-200 dark:border-gray-600 py-3 rounded-xl text-center font-bold hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                >
                  Source Code
                </a>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </section>
  )
}

export default Projects
