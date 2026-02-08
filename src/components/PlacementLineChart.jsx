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
  // SVG Dimensions
  const height = 300;
  const width = 500;
  const padding = 40;

  // Scales
  const x = (i) => padding + (i * (width - 2 * padding)) / (data.length - 1);
  const y = (v) => height - padding - ((v - 80) * (height - 2 * padding)) / 20;

  // Path Generation
  const points = data.map((d, i) => `${x(i)},${y(d.value)}`).join(' ');

  return (
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <h3 style={{ marginBottom: '10px', color: '#1e293b' }}>Placement Percentage Trend</h3>
      <svg viewBox={`0 0 ${width} ${height}`} style={{ width: '100%', height: 'auto', maxHeight: '250px', overflow: 'visible' }}>
        {/* Grid Lines */}
        {[80, 85, 90, 95, 100].map((v, i) => (
          <line
            key={i}
            x1={padding}
            y1={y(v)}
            x2={width - padding}
            y2={y(v)}
            stroke="#e2e8f0"
            strokeWidth="1"
          />
        ))}

        {/* Axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#94a3b8" strokeWidth="2" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#94a3b8" strokeWidth="2" />

        {/* Line Path */}
        <motion.path
          d={`M ${points}`}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />

        {/* Points & Labels */}
        {data.map((d, i) => (
          <g key={i}>
            {/* Dot */}
            <motion.circle
              cx={x(i)}
              cy={y(d.value)}
              r="6"
              fill="#fff"
              stroke="#2563eb"
              strokeWidth="3"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1 + i * 0.1, duration: 0.3 }}
            />
            
            {/* Value Label */}
            <motion.text
              x={x(i)}
              y={y(d.value) - 15}
              textAnchor="middle"
              fill="#1e293b"
              fontSize="12"
              fontWeight="bold"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.1, duration: 0.3 }}
            >
              {d.value}%
            </motion.text>

            {/* Year Label */}
            <text
              x={x(i)}
              y={height - padding + 20}
              textAnchor="middle"
              fill="#64748b"
              fontSize="12"
            >
              {d.year}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}
