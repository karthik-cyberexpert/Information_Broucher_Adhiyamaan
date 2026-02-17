import type { DepartmentContent } from './types';

const mechanical: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Mechanical Engineering implements innovative teaching and learning methods, converting classrooms into smart learning centres equipped with LCD projectors, computers, and internet connectivity. The department frequently conducts seminars, workshops, technical symposiums, and Faculty Development Programs (FDPs) to keep both students and faculty abreast of the latest technological developments.
                Students are encouraged to become active members of professional societies such as the Institution of Engineers (India), Society of Aerospace and Mechanical Engineer Professional, and Indian Society for Technical Education. These platforms facilitate professional activities, enabling students to design, analyze, and fabricate working models while participating in prestigious national-level competitions like BAJA, E-Bike Challenge, and Go-Kart.
                With a strong emphasis on practical exposure, students are motivated to carry out project work in major industries across Hosur and Bangalore. Faculty members are also encouraged to undertake Research & Development and consultancy activities, fostering a culture of innovation and academic excellence.
            </p>
        </>
    ),
    career: {
        description: "Mechanical engineers drive innovation in automotive, aerospace, energy, and manufacturing sectors through design, analysis, and fabrication.",
        roles: [
            "Design Engineer",
            "Production Manager",
            "Quality Engineer",
            "R&D Specialist",
            "Manufacturing Engineer",
            "Automotive Systems Engineer",
            "Product Development Engineer"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'MACHINE SHOP',
                description: 'Equipped with lathes, milling machines, and drilling machines for hands-on fabrication.',
                icon: '⚙️',
                image: '/images/be/mechinical/MACHINE SHOP.jpg'
            },
            {
                title: 'METROLOGY LAB',
                description: 'Precision measurement tools and instruments for quality control and calibration.',
                icon: '📐',
                image: '/images/be/mechinical/METROLOGY LAB.jpg'
            },
            {
                title: 'CAD LABORATORY',
                description: 'Advanced computing facilities for 2D and 3D modeling using modern engineering software.',
                icon: '🖥️',
                image: '/images/be/mechinical/CAD LAB.jpg'
            },
            {
                title: 'CAM LABORATORY',
                description: 'Computer-Aided Manufacturing facilities for automated production processes.',
                icon: '🤖',
                image: '/images/be/mechinical/CAM LAB.jpg'
            },
            {
                title: 'THERMAL LAB',
                description: 'Equipment for testing internal combustion engines and studying heat transfer principles.',
                icon: '🔥',
                image: '/images/be/mechinical/THERMAL LAB.jpg'
            }
        ]
    },
    contact: {
        hod: "Dr. J. ARIVUDAINAMBI",
        designation: "Professor and Head",
        location: "Department of Mechanical Engineering, Adhiyamaan College of Engineering, Dr. M. G. R Nagar, Hosur – 635 130",
        email: "hod_mech@adhiyamaan.ac.in",
        phone: "+91 9894445988"
    },
    phd: {
        supervisor: '/images/phd/mechinical supervisor .jpeg',
        approval: '/images/phd/mechanical approval copy.jpeg'
    }
};

export default mechanical;
