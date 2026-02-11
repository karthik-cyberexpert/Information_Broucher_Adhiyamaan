import { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Award, GraduationCap, ClipboardList, BookOpen, Quote, Star, Sparkles, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import "./Scholarships.css";

// --- Data ---
const scholarshipData = [
  {
    id: 'overview',
    title: 'Financial Excellence',
    icon: <Award className="bento-icon" />,
    description: 'Financial aid recognizing merit and supporting those in academic need.',
    highlights: ['Institutional Aid', 'Merit Rewards', 'Fee Concessions']
  },
  {
    id: 'eligibility',
    title: 'Merit Standards',
    icon: <Star className="bento-icon" />,
    description: 'Requires 60% and above in qualifying exams for most schemes.',
    highlights: ['60%+ Academic', 'Income Brackets', 'First Graduate']
  },
  {
    id: 'documents',
    title: 'Digital Portfolio',
    icon: <ClipboardList className="bento-icon" />,
    description: 'Mandatory credentials needed for securing your educational grant.',
    highlights: ['Mark Sheets', 'Community Cert', 'Income Proof']
  },
  {
    id: 'process',
    title: 'The Path',
    icon: <BookOpen className="bento-icon" />,
    description: 'Transparent multi-stage verification for direct disbursement.',
    highlights: ['Vetting', 'Approval', 'Disbursement']
  }
];

const scholarshipPortals = [
  { name: 'Merit Scholarship', cat: 'Academic', benefit: 'Fee Concession' },
  { name: 'Government SC/ST', cat: 'Community', benefit: 'Full Tuition' },
  { name: 'BC/MBC Support', cat: 'Community', benefit: 'Maintenance Aid' },
  { name: 'Minority Grant', cat: 'Social', benefit: 'Annual Aid' },
  { name: '7.5% Category', cat: 'Special', benefit: 'Quota Aid' }
];

// --- Sub-Components ---
const ScrambleText = ({ text }: { text: string }) => {
  const [display, setDisplay] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()';

  useEffect(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(
        text
          .split("")
          .map((_, index) => {
            if (index < iteration) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{display}</span>;
};

const TiltCard = ({ children, className }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      <div style={{ transform: "translateZ(30px)" }}>{children}</div>
    </motion.div>
  );
};

// --- Main Page ---
export default function Scholarships() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sch-bento-viewport">
      {/* Background with Matte Liquid Animation */}
      <div className="sch-bg-layer">
        <video autoPlay loop muted playsInline className="sch-video-el">
          <source src="/media/scholarship.mp4" type="video/mp4" />
        </video>
        <div className="matte-blob-container">
          <div className="matte-blob matte-blob-1" />
          <div className="matte-blob matte-blob-2" />
          <div className="matte-blob matte-blob-3" />
        </div>
        <div className="sch-overlay-vignette" />
        <div className="matte-grain" />
      </div>

      <motion.button
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="sch-home-trigger"
        onClick={() => navigate('/menu')}
      >
        <Home size={18} />
      </motion.button>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotateX: 20 }}
        animate={{ opacity: 1, scale: 1, rotateX: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="sch-bento-container"
      >
        {/* Header Block */}
        <header className="bento-header">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Sparkles size={24} className="gold-text pulse-sparkle" />
            <h1 className="bento-main-title">
              <span className="holographic-text"><ScrambleText text="ACE" /></span>
              <span className="gold-text"><ScrambleText text=" SCHOLARSHIPS" /></span>
            </h1>
            <p className="bento-sub-tag">EMPOWERING EXCELLENCE • TRANSFORMING FUTURES</p>
          </motion.div>
        </header>

        {/* Content Bento Grid */}
        <div className="bento-grid">
          {/* Section 1 & 2 */}
          <div className="bento-col-left">
            {scholarshipData.slice(0, 2).map((section) => (
              <TiltCard key={section.id} className="bento-card">
                <div className="bento-card-head">
                  {section.icon}
                  <h3>{section.title}</h3>
                </div>
                <p>{section.description}</p>
                <div className="bento-pill-stack">
                  {section.highlights.map((h, i) => (
                    <span key={i} className="small-pill">{h}</span>
                  ))}
                </div>
              </TiltCard>
            ))}
          </div>

          {/* Central Table Block */}
          <TiltCard className="bento-center-panel">
            <div className="panel-header">
              <GraduationCap size={20} className="blue-text" />
              <h2>Grant Registry</h2>
            </div>
            <table className="bento-table">
              <thead>
                <tr>
                  <th>Scheme</th>
                  <th>Benefit</th>
                </tr>
              </thead>
              <tbody>
                {scholarshipPortals.map((p, i) => (
                  <tr key={i}>
                    <td className="scheme-name-val">{p.name}</td>
                    <td className="blue-text-val">{p.benefit}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </TiltCard>

          {/* Section 3 & 4 */}
          <div className="bento-col-right">
            {scholarshipData.slice(2, 4).map((section) => (
              <TiltCard key={section.id} className="bento-card">
                <div className="bento-card-head">
                  {section.icon}
                  <h3>{section.title}</h3>
                </div>
                <p>{section.description}</p>
                <div className="bento-pill-stack">
                  {section.highlights.map((h, i) => (
                    <span key={i} className="small-pill">{h}</span>
                  ))}
                </div>
              </TiltCard>
            ))}

            {/* Dynamic Quote Footnote */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="bento-quote"
            >
              <Quote size={18} className="gold-text" />
              <p>Education is the most powerful weapon for change.</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
