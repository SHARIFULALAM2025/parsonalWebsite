import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { toast, ToastContainer } from 'react-toastify'
import {
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaClock,
  FaPaperPlane,
} from 'react-icons/fa'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { uploadImage } from '../UploadImage/UploadImage'
import Container from '../Container/Container'

const Contact = () => {
  const [isSending, setIsSending] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const handelData = async (formData) => {
    setIsSending(true)
    try {
      let uploadedLinks = []
      if (formData.attachment && formData.attachment.length > 0) {
        for (const file of formData.attachment) {
          const url = await uploadImage(file)
          if (url) {
            uploadedLinks.push(url)
          }
        }
      }

      const templateParams = {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        date_time: new Date().toLocaleString(),
        attachments: uploadedLinks.join('\n'),
      }

      const response = await emailjs.send(
        'service_2f5l9eq',
        'template_prrovvc',
        templateParams,
        'i5XgpyNRK4OoyQk0O'
      )

      if (response.status === 200) {
        toast.success(
          `Thank you ${formData.name}, Message sent successfully! 🚀`
        )
        reset()
      }
    } catch (error) {
      toast.error(`Error: ${error?.message || 'Something went wrong'}`)
    } finally {
      setIsSending(false)
    }
  }

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
      value: 'Uttara Sector-13, Road-5, House:65 Dhaka',
      href: '#',
      color: 'from-red-500 to-pink-500',
    },
  ]

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

  const [mounted, setMounted] = useState(false)
  const bgStyle = {
    backgroundColor: '#0F172A',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23334155' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H2V1z'%3E%3C/path%3E%3C/svg%3E")`,
  }

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div style={bgStyle} id="contact" className="w-full">
      <Container>
        <section className="py-12 lg:py-24 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            className="text-center mb-12 lg:mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={container}
          >
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white"
              variants={fadeInUp}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="mx-auto mt-4 w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 rounded-full"
              variants={fadeInUp}
            />
            <motion.p
              className="mt-6 text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-2"
              variants={fadeInUp}
            >
              Have a project in mind? Let's create something amazing together!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
            {/* LEFT SIDE */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
            >
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-4 sm:gap-6 p-4 sm:p-6 bg-gray-800 rounded-2xl shadow-lg border border-gray-700 hover:border-blue-500 transition-all group"
                  variants={fadeInUp}
                >
                  <div
                    className={`shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    <info.icon className="text-white text-lg sm:text-xl" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-bold text-gray-100 text-sm sm:text-base">
                      {info.label}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm break-all lg:break-normal">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}

              {/* Availability */}
              <motion.div
                className="bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-700"
                variants={fadeInUp}
              >
                <h4 className="text-lg sm:text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <FaClock className="text-blue-500" /> Availability
                </h4>
                <div className="space-y-3 text-sm sm:text-base text-gray-300">
                  <div className="flex flex-col sm:flex-row justify-between p-3 rounded-lg bg-gray-900/50 gap-1">
                    <span>Monday – Friday</span>
                    <span className="font-semibold text-green-400 text-xs sm:text-sm">
                      9:00 AM – 6:00 PM
                    </span>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-between p-3 rounded-lg bg-gray-900/50 gap-1">
                    <span>Saturday</span>
                    <span className="font-semibold text-yellow-400 text-xs sm:text-sm">
                      10:00 AM – 2:00 PM
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* RIGHT SIDE – FORM */}
            <motion.div
              className="bg-gray-800 rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-700"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit(handelData)} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div className="w-full">
                    <input
                      {...register('name', { required: true })}
                      type="text"
                      placeholder="Full Name *"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    {errors.name && (
                      <span className="text-red-400 text-xs mt-1 block">
                        Name is required!
                      </span>
                    )}
                  </div>
                  <div className="w-full">
                    <input
                      {...register('email', { required: true })}
                      type="email"
                      placeholder="Email Address *"
                      className="w-full px-5 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1 block">
                        Email is required!
                      </span>
                    )}
                  </div>
                </div>
                <input
                  {...register('subject', { required: true })}
                  type="text"
                  placeholder="Subject *"
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />

                <textarea
                  {...register('message', { required: true })}
                  rows="5"
                  placeholder="Message..."
                  className="w-full px-5 py-3.5 rounded-xl border border-gray-600 bg-gray-700 text-white focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                ></textarea>

                <div className="w-full">
                  <label className="block mb-2 text-xs font-medium text-gray-400 uppercase tracking-wider">
                    Attach File (Optional)
                  </label>
                  <input
                    type="file"
                    multiple
                    {...register('attachment')}
                    className="w-full text-xs text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 cursor-pointer"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSending}
                  className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:opacity-90 active:scale-[0.98] transition-all disabled:opacity-50"
                >
                  {isSending ? (
                    'Sending...'
                  ) : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </section>
        <ToastContainer position="bottom-right" theme="dark" />
      </Container>
    </div>
  )
}

export default Contact
