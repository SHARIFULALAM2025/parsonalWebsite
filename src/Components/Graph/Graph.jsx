import React, { useEffect, useState } from 'react'

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
  '#000000',
  '#FFBB28',
  '#444444',
  '#00ED64',
  '#00758F',
  '#00758F',
  '#F05032',
  '#E34F26',
  '#00758F',
]

const Graph = () => {
    const [mounted, setMounted] = useState(false)
        const bgStyle =

            {
               backgroundColor: '#0F172A',

               backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23334155' fill-opacity='0.2' d='M1 3h1v1H1V3zm2-2h1v1H2V1z'%3E%3C/path%3E%3C/svg%3E")`,
             }

        useEffect(() => {
          setMounted(true)
        }, [])
  const chartHeight = 300
  const chartWidth = 600
  const maxUv = Math.max(...data.map((d) => d.uv))

  // Padding for labels and axes
  const padding = { top: 40, right: 20, bottom: 40, left: 50 }
  const viewboxWidth = chartWidth + padding.left + padding.right
  const viewboxHeight = chartHeight + padding.top + padding.bottom

  // Calculate coordinates for the triangle path
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}
            C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2},${y}
            C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width},${y + height}
            Z`
  }

  return (
    <div style={bgStyle} className="w-full  p-4  shadow-lg">
      <svg
        viewBox={`0 0 ${viewboxWidth} ${viewboxHeight}`}
        className="w-full h-auto"
      >
        {/* Horizontal Grid Lines */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <line
            key={tick}
            x1={padding.left}
            x2={chartWidth + padding.left}
            y1={chartHeight * tick + padding.top}
            y2={chartHeight * tick + padding.top}
            stroke="#e5e7eb"
            strokeDasharray="4"
          />
        ))}

        {/* Bars (Triangles) */}
        {data.map((item, index) => {
          const barWidth = (chartWidth / data.length) * 0.8
          const x =
            padding.left + index * (chartWidth / data.length) + barWidth * 0.1
          const barHeight = (item.uv / maxUv) * chartHeight
          const y = chartHeight - barHeight + padding.top
          const color = colors[index % colors.length]

          return (
            <g key={item.name} className="group">
              <path
                d={getPath(x, y, barWidth, barHeight)}
                fill={color}
                className="transition-all duration-300 hover:opacity-80 cursor-pointer"
              />
              {/* Value Label (Top) */}
              <text
                x={x + barWidth / 2}
                y={y - 10}
                textAnchor="middle"
                fill={color}
                className="text-xs font-bold"
              >
                {item.uv}
              </text>
              {/* X-Axis Name */}
              <text
                x={x + barWidth / 2}
                y={chartHeight + padding.top + 25}
                textAnchor="middle"
                className="text-[10px] fill-gray-100"
              >
                {item.name}
              </text>
            </g>
          )
        })}

        {/* Y-Axis Labels */}
        {[0, 0.25, 0.5, 0.75, 1].map((tick) => (
          <text
            key={tick}
            x={padding.left - 10}
            y={chartHeight - chartHeight * tick + padding.top + 4}
            textAnchor="end"
            className="text-[10px] fill-gray-400"
          >
            {Math.round(maxUv * tick)}
          </text>
        ))}
      </svg>
    </div>
  )
}

export default Graph
