import type { DepartmentContent } from './types';

const meCommSystem: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Electronics and Communication Engineering at Adhiyamaan College of Engineering offers the Master of Engineering (M.E.) in Communication Systems, a specialized postgraduate programme aimed at developing future-ready professionals and leaders in advanced communication technologies.
                Affiliated to Anna University and approved by All India Council for Technical Education, the programme blends strong theoretical foundations with cutting-edge research and practical exposure. Accredited by National Assessment and Accreditation Council, the department fosters innovation, research excellence, and ethical professional practices.
                The programme equips students with in-depth knowledge of wireless, optical, and next-generation communication systems, enabling them to contribute meaningfully to the rapidly evolving global communication ecosystem.
            </p>
        </>
    ),
    career: {
        description: "An M.E. in Communication Systems opens pathways to high-demand and intellectually rewarding careers across core technology and research domains.",
        roles: [
            "Communication Systems Engineer (₹6 – 12 LPA)",
            "RF Engineer (₹5 – 10 LPA)",
            "Wireless Network Engineer (₹6 – 14 LPA)",
            "Signal Processing Engineer (₹7 – 15 LPA)",
            "Telecommunications Engineer (₹5 – 11 LPA)",
            "Embedded Systems Engineer (Communication Devices) (₹6 – 12 LPA)",
            "Optical / Fiber Communication Engineer (₹6 – 13 LPA)",
            "Network Planning & Optimization Engineer (₹6 – 14 LPA)",
            "Satellite Communication Engineer (₹7 – 16 LPA)",
            "R&D Engineer (Communication Systems) (₹8 – 20 LPA)",
        ],
        // globalRelevance: "The programme prepares graduates to excel in technology-driven environments worldwide. Alumni find opportunities in leading multinational companies, government organizations, research laboratories, and reputed academic institutions. Graduates are also well-positioned to pursue Ph.D. and advanced research in communication technologies."
    },
    infrastructure: {
        description: "The department is equipped with advanced communication labs and research facilities.",
        items: [
            {
                title: 'Optical and Microwave Laboratory',
                description: 'Specialized facility for studying high-frequency radio waves (RF) and light-based communication systems',
                icon: '📡',
                image: '/images/me/communication system/optical.jpeg'
            },
            {
                title: 'Embedded Systems Laboratory',
                description: 'Provides hands-on experience in designing, programming, and testing microcontrollers, processors, and peripheral interfaces for specialized applications',
                icon: '📶',
                image: '/images/me/communication system/embedded system.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr.S.Sumathi",
        designation: "Professor and Head",
        location: "M.E.-Communication System Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod_ece@adhiyamaan.ac.in",
        phone: " 9487819151"
    }
};

export default meCommSystem;
