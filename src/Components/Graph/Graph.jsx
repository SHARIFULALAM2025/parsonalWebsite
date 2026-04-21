import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router'

const data = [
  { name: 'React', uv: 3620, icon: '/React.svg' },
  { name: 'Next.js', uv: 3000, icon: '/Next.svg' },
  { name: 'Javascript', uv: 2900, icon: '/Javascript.png' },
  { name: 'Express.js', uv: 2780, icon: '/Express.png' },
  { name: 'MongoDB', uv: 2890, icon: '/MongoDB.svg' },
  { name: 'MY SQL', uv: 3090, icon: '/Sql.svg' },
  { name: 'HTML', uv: 3490, icon: '/html.svg' },
  { name: 'CSS', uv: 3600, icon: '/Css.svg' },
  { name: 'GIT ', uv: 3490, icon: '/git.svg' },
  { name: 'Vercel', uv: 3490, icon: '/vercel.svg' },
]

const colors = [
  '#61DAFB',
  '#FFFFFF',
  '#FFBB28',
  '#94A3B8',
  '#00ED64',
  '#00758F',
  '#00758F',
  '#F05032',
  '#E34F26',
  '#38B2AC',
]

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const Graph = () => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const bgStyle = {
    backgroundColor: '#0F172A',
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23334155' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H2V1z'%3E%3C/path%3E%3C/svg%3E")`,
  }

  const chartHeight = 300
  const chartWidth = 700
  const maxUv = Math.max(...data.map((d) => d.uv))

  const padding = { top: 80, right: 20, bottom: 80, left: 60 }
  const viewboxWidth = chartWidth + padding.left + padding.right
  const viewboxHeight = chartHeight + padding.top + padding.bottom

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
            Z`
  }

  if (!mounted) return null

  return (
    <div
      style={bgStyle}
      className="w-full shadow-2xl min-h-screen flex flex-col justify-center relative"
    >
      <div className="max-w-7xl mx-auto  w-full">
        <motion.div
          className="text-center mb-1"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold  bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Skills & Expertise
          </motion.h2>
        </motion.div>
        <div className="flex flex-col items-center gap-2 group absolute top-12 right-1/2 translate-x-1/2 p-2">
          <motion.div
            animate={{
              scale: [1, 1.1, 1], // ১ থেকে ১.১ হয়ে আবার ১ এ ফিরবে
              rotate: [0, 5, -5, 0], // হালকা ডানে-বামে দুলবে
            }}
            transition={{
              duration: 2, // ২ সেকেন্ড সময় নিবে
              repeat: Infinity, // আজীবন চলতে থাকবে
              ease: 'easeInOut',
            }}
            className="relative"
          >
            <Link
              to="https://www.freecodecamp.org/shariful2026"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white h-14 w-14 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.3)] border border-gray-200"
            >
              <img
                src="/free.svg"
                alt="FreeCodeCamp Profile"
                className="h-8 w-8 object-contain"
              />
            </Link>

            {/* ডটেড বর্ডার যা ঘুরতে থাকবে */}
            <div className="absolute inset-0 border-2 border-dotted border-white/40 rounded-full animate-[spin_8s_linear_infinite] pointer-events-none" />
          </motion.div>

          {/* টেক্সট এনিমেশন: এটিও ২ সেকেন্ড পর পর দেখা দিবে ও হারাবে */}
          <motion.span
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-white text-[10px] uppercase font-bold tracking-widest bg-black/40 px-2 py-1 rounded backdrop-blur-sm"
          >
            FreeCodeCamp
          </motion.span>
        </div>

        <svg
          viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
          className="w-full h-auto overflow-visible"
        >
          {/* Horizontal Grid Lines */}
          {[0, 0.25, 0.5, 0.75, 1].map((tick) => {
            const yPos = chartHeight - chartHeight * tick + padding.top
            return (
              <g key={tick}>
                <line
                  x1={padding.left}
                  x2={chartWidth + padding.left}
                  y1={yPos}
                  y2={yPos}
                  stroke="#334155"
                  strokeDasharray="4"
                />
                <text
                  x={padding.left - 15}
                  y={yPos + 4}
                  textAnchor="end"
                  className="text-xs fill-slate-500 font-medium"
                >
                  {tick * 100}%
                </text>
              </g>
            )
          })}

          <motion.g initial="hidden" animate="visible" variants={container}>
            {data.map((item, index) => {
              const barWidth = (chartWidth / data.length) * 0.7
              const x =
                padding.left +
                index * (chartWidth / data.length) +
                (chartWidth / data.length - barWidth) / 2
              const barHeight = (item.uv / maxUv) * chartHeight
              const y = chartHeight - barHeight + padding.top
              const color = colors[index % colors.length]
              const iconSize = 28

              return (
                <g key={item.name} className="group">
                  <motion.path
                    initial={{
                      d: getPath(x, chartHeight + padding.top, barWidth, 0),
                      opacity: 0,
                    }}
                    animate={{
                      d: getPath(x, y, barWidth, barHeight),
                      opacity: 0.9,
                    }}
                    transition={{
                      duration: 1,
                      delay: index * 0.1,
                      ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    fill={color}
                    className="hover:brightness-125 cursor-pointer transition-all duration-300"
                  />

                  <motion.image
                    href={item.icon}
                    x={x + barWidth / 2 - iconSize / 2}
                    y={y - iconSize - 15}
                    width={iconSize}
                    height={iconSize}
                    initial={{ opacity: 0, scale: 0, y: y }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [
                        y - iconSize - 15,
                        y - iconSize - 22,
                        y - iconSize - 15,
                      ],
                    }}
                    transition={{
                      opacity: { delay: 0.5 + index * 0.1 },
                      scale: {
                        type: 'spring',
                        stiffness: 200,
                        damping: 10,
                        delay: 0.6 + index * 0.1,
                      },
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                        delay: index * 0.2,
                      },
                    }}
                  />

                  <motion.text
                    x={x + barWidth / 2}
                    y={y - 55}
                    textAnchor="middle"
                    fill={color}
                    className="text-[12px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  >
                    {item.uv}
                  </motion.text>

                  <text
                    x={x + barWidth / 2}
                    y={chartHeight + padding.top + 35}
                    textAnchor="middle"
                    transform={`rotate(15, ${x + barWidth / 2}, ${chartHeight + padding.top + 35})`}
                    className="text-[11px] fill-slate-400 font-semibold uppercase tracking-wider"
                  >
                    {item.name}
                  </text>
                </g>
              )
            })}
          </motion.g>

          <line
            x1={padding.left}
            x2={chartWidth + padding.left}
            y1={chartHeight + padding.top}
            y2={chartHeight + padding.top}
            stroke="#475569"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  )
}

export default Graph
