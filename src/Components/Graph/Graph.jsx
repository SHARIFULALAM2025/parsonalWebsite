import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const data = [
  { name: 'React', uv: 4000 },
  { name: 'Next.js', uv: 3000 },
  { name: 'Javascript', uv: 2000 },
  { name: 'Express.js', uv: 2780 },
  { name: 'MongoDB', uv: 1890 },
  { name: 'MY SQL', uv: 2390 },
  { name: 'HTML', uv: 3490 },
  { name: 'CSS', uv: 3920 },
  { name: 'GIT ', uv: 3490 },
  { name: 'Vercel', uv: 3490 },
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

// Animation Variants
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

  const padding = { top: 40, right: 20, bottom: 60, left: 60 }
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
    <div style={bgStyle} className="w-full p-6 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header with Motion */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={container}
        >
          <motion.h2
            className="text-4xl font-bold text-white"
            variants={fadeInUp}
          >
            Skills & Expertise
          </motion.h2>
          <motion.p
            className="text-gray-400 mt-3 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Technologies and tools I use to build modern web applications
          </motion.p>
        </motion.div>
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
                className="text-xs fill-slate-400 font-medium"
              >
                {tick * 100}%
              </text>
            </g>
          )
        })}

        {/* Bars with Motion */}
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

            return (
              <g key={item.name} className="group">
                {/* Animated Path */}
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
                    duration: 0.8,
                    delay: index * 0.05,
                    ease: 'easeOut',
                  }}
                  fill={color}
                  className="hover:brightness-125 cursor-pointer hover:opacity-100 transition-all duration-300"
                />

                {/* Value Label */}
                <motion.text
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  x={x + barWidth / 2}
                  y={y - 12}
                  textAnchor="middle"
                  fill={color}
                  className="text-[10px] font-bold tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {item.uv}
                </motion.text>

                {/* X-Axis Name */}
                <text
                  x={x + barWidth / 2}
                  y={chartHeight + padding.top + 25}
                  textAnchor="middle"
                  transform={`rotate(15, ${x + barWidth / 2}, ${chartHeight + padding.top + 25})`}
                  className="text-[10px] fill-slate-300 font-medium uppercase tracking-tighter"
                >
                  {item.name}
                </text>
              </g>
            )
          })}
        </motion.g>

        {/* Bottom Baseline */}
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
  )
}

export default Graph
