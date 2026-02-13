import type { DepartmentContent } from './types';

const ece: DepartmentContent = {
    about: (
        <>
            <p>
                The B.E.-ECE programme focuses on building strong theoretical knowledge combined with practical exposure to modern electronics, communication, embedded systems, VLSI, and emerging technologies.
            </p>
            <p>
                Affiliated to Anna University and approved by All India Council for Technical Education, the department emphasizes industry-integrated learning, ethical values, and global competence. Accredited by National Assessment and Accreditation Council with NBA-accredited programmes, the department nurtures students to become innovative engineers capable of addressing real-world technological challenges.
            </p>
            <p>
                With experienced faculty, strong research culture, and advanced laboratories, the department empowers students to Discover, Innovate, Design, Transform, and Lead in the evolving world of electronics and communication.
            </p>
        </>
    ),
    career: {
        description: "Graduates of the ECE programme are prepared for diverse roles across core electronics, IT, and interdisciplinary domains. The curriculum equips students with industry-ready skills and global perspectives.",
        roles: [
            "Communication Systems Engineer",
            "IoT Specialist / Developer",
            "VLSI Design Engineer",
            "Embedded Systems Engineer",
            "Electronics Design Engineer",
            "AI & Machine Learning Specialist",
            "Research Scientist",
            "Network and Communication Engineer"
        ],
        globalRelevance: "ECE graduates find opportunities in multinational corporations, research laboratories, and prestigious universities worldwide for higher studies and innovation-driven careers."
    },
    infrastructure: {
        items: [
            {
                title: 'VLSI Design Lab',
                description: 'Advanced CAD tools (Cadence, Mentor Graphics) for chip design and verification.',
                icon: '🔌'
            },
            {
                title: 'Embedded Systems Lab',
                description: 'Advanced microcontroller and microprocessor development kits with modern debuggers.',
                icon: '📟'
            },
            {
                title: 'Communication Systems Lab',
                description: 'Complete setup for studying analog and digital communication techniques.',
                icon: '📡'
            },
            {
                title: 'Microwave and RF Lab',
                description: 'Equipped with spectrum analyzers and RF signal generators for microwave engineering.',
                icon: '📶'
            },
            {
                title: 'Digital Signal Processing Lab',
                description: 'High-end workstations with MATLAB and DSP kits for signal analysis.',
                icon: '💻'
            }
        ]
    },
    contact: {
        hod: "Dr.S.Sumathi",
        designation: "Professor and Head",
        location: "Department of Electronics and Communication Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod.ece@adhiyamaan.ac.in",
        phone: "Mobile: 9487819151, Office No: 04344261005"
    },
    phd: {
        supervisor: '/images/phd/ece supervisor.jpeg',
        approval: '/images/phd/ece approval.jpg'
    }
};

export default ece;
