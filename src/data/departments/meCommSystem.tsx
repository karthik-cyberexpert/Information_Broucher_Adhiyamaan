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
            "Telecom Engineer",
            "Network Architect",
            "RF Engineer",
            "IoT Systems Specialist",
            "Research Scientist",
            "Academician",
            "Communication Systems Design Engineer"
        ],
        // globalRelevance: "The programme prepares graduates to excel in technology-driven environments worldwide. Alumni find opportunities in leading multinational companies, government organizations, research laboratories, and reputed academic institutions. Graduates are also well-positioned to pursue Ph.D. and advanced research in communication technologies."
    },
    infrastructure: {
        description: "The department is equipped with advanced communication labs and research facilities.",
        items: [
            {
                title: 'Communication Systems Lab',
                description: 'Testing and simulation of advanced communication protocols.',
                icon: '📡',
                image: '/images/be/ECE-bg.jpg.jpeg'
            },
            {
                title: 'RF & Microwave Lab',
                description: 'State-of-the-art equipment for radio frequency and microwave engineering.',
                icon: '📶',
                image: '/images/be/ECE-bg.jpg.jpeg'
            },
            {
                title: 'Optical Communication Lab',
                description: 'Facilities for fiber optic and light-wave communication research.',
                icon: '💡',
                image: '/images/be/ECE-bg.jpg.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr.S.Sumathi",
        designation: "Professor and Head",
        location: "Department of Electronics and Communication Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod.ece@adhiyamaan.ac.in",
        phone: "Mobile: 9487819151, Office No: 04344261005"
    }
};

export default meCommSystem;
