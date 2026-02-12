import { useState } from 'react';
import { motion } from 'framer-motion';

const data = [
  { year: '2020', value: 82 },
  { year: '2021', value: 86 },
  { year: '2022', value: 90 },
  { year: '2023', value: 94 },
  { year: '2024', value: 96 },
  { year: '2025', value: 98 },
];

export default function PlacementLineChart() {
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // SVG Dimensions
  const height = 300;
  const width = 500;
  const padding = 40;

  // Scales
  const x = (i) => padding + (i * (width - 2 * padding)) / (data.length - 1);
  const y = (v) => height - padding - ((v - 80) * (height - 2 * padding)) / 20;

  // Path Generation
  const linePoints = data.map((d, i) => `${x(i)},${y(d.value)}`).join(' ');
  const areaPoints = `${linePoints} ${width - padding},${height - padding} ${padding},${height - padding}`;

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
      <h3 style={{ marginBottom: '20px', color: '#fff', fontSize: '1.5rem', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Placement Percentage Trend</h3>

      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', maxHeight: '280px', overflow: 'visible' }}>
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Grid Lines */}
        {[80, 85, 90, 95, 100].map((v, i) => (
          <line
            key={i}
            x1={padding}
            y1={y(v)}
            x2={width - padding}
            y2={y(v)}
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="1"
            strokeDasharray="4 4"
          />
        ))}

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="rgba(255,255,255,0.3)" strokeWidth="2" />

        {/* Area Fill */}
        <motion.path
          d={`M ${areaPoints} Z`}
          fill="url(#areaGradient)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        />

        {/* Line Path */}
        <motion.path
          d={`M ${linePoints}`}
          fill="none"
          stroke="#22d3ee"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#glow)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Interactive Points */}
        {data.map((d, i) => (
          <g
            key={i}
            onMouseEnter={() => setHoveredPoint(i)}
            onMouseLeave={() => setHoveredPoint(null)}
            style={{ cursor: 'pointer' }}
          >
            {/* Hover Zone (invisible larger circle) */}
            <circle cx={x(i)} cy={y(d.value)} r="15" fill="transparent" />

            {/* Visible Dot */}
            <motion.circle
              cx={x(i)}
              cy={y(d.value)}
              r={hoveredPoint === i ? 8 : 6}
              fill="#0f172a"
              stroke="#22d3ee"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: hoveredPoint === i ? 1.2 : 1 }}
              transition={{ duration: 0.3 }}
            />

            {/* Value Label (Always visible or on hover? Let's keep distinct labels always visible or on hover. 
                User wants "creative". Let's show on hover or float nicely.) 
                Let's make them always visible but fancy, and scale on hover.
            */}
            <motion.text
              x={x(i)}
              y={y(d.value) - 20}
              textAnchor="middle"
              fill="#fff"
              fontSize="14"
              fontWeight="bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: 1,
                y: hoveredPoint === i ? -5 : 0,
                scale: hoveredPoint === i ? 1.2 : 1
              }}
              transition={{ duration: 0.3 }}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              {d.value}%
            </motion.text>

            {/* Year Label */}
            <text
              x={x(i)}
              y={height - padding + 25}
              textAnchor="middle"
              fill="rgba(255,255,255,0.7)"
              fontSize="12"
            >
              {d.year}
            </text>

            {/* Vertical Marker Line on Hover */}
            {hoveredPoint === i && (
              <motion.line
                x1={x(i)}
                y1={y(d.value)}
                x2={x(i)}
                y2={height - padding}
                stroke="#22d3ee"
                strokeWidth="1"
                strokeDasharray="4 2"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 0.5, height: 'auto' }}
              />
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
