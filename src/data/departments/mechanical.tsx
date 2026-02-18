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
            "Robotics & Automation - ₹3 – 6 LPA",
            "Artificial Intelligence in Manufacturing - ₹5 – 10 LPA",
            "Electric Vehicles (EV) - ₹4 – 8 LPA",
            "Renewable Energy - ₹3 – 7 LPA",
            "Mechatronics - ₹3 – 6 LPA",
            "Industry 4.0 Technologies - ₹5 – 9 LPA",
            "3D Printing & Additive Manufacturing - ₹3 – 6 LPA",


        ]
    },
    infrastructure: {
        items: [
            {
                title: 'MACHINE SHOP',
                description: 'A Machine Shop is a practical workshop where metal and other materials are shaped, cut, drilled, and finished using various machine tools.',
                icon: '⚙️',
                image: '/images/be/mechinical/MACHINE SHOP.jpg'
            },
            {
                title: 'METROLOGY LAB',
                description: 'A Metrology Lab is a laboratory where students learn the science of measurement and precision inspection.',
                icon: '📐',
                image: '/images/be/mechinical/METROLOGY LAB.jpg'
            },
            {
                title: 'CAD LABORATORY',
                description: 'A CAD Lab is a specialized computer laboratory where students use design software to create, modify, analyze, and optimize engineering drawings and 3D models.',
                icon: '🖥️',
                image: '/images/be/mechinical/CAD LAB.jpg'
            },
            {
                title: 'CAM LABORATORY',
                description: 'A CAM Lab is a specialized laboratory where students learn how to convert digital designs into real physical products using CNC machines and CAM software.',
                icon: '🤖',
                image: '/images/be/mechinical/CAM LAB.jpg'
            },
            {
                title: 'THERMAL LAB',
                description: 'A Thermal Engineering Lab is a practical laboratory where students study and perform experiments related to heat, energy conversion, thermodynamics',
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
