import type { DepartmentContent } from './types';

const eee: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Electrical and Electronics Engineering (EEE) at Adhiyamaan College of Engineering (Autonomous), established in 1992 is dedicated to producing technically competent, innovative, and socially responsible electrical engineers. The department offers a B.E. in Electrical
                and Electronics Engineering, with a strong focus on academic excellence, research, and industrial relevance.
            </p>
            <p>
                Our curriculum is designed in line with the latest AICTE and Anna University guidelines, integrating modern technologies such as Renewable Energy Systems, Electric Vehicles, Smart Grids,  Power Electronics, and Embedded Systems. The department is supported by highly qualified and experienced faculty who guide students in both theoretical and practical learning through well equipped laboratories, research facilities, and industry-linked projects.






            </p>
        </>
    ),
    career: {
        description: "EEE engineers are essential for the global transition to sustainable energy.",
        roles: [
            "Core Electrical Industry (₹6 – 8 LPA)",
            "Government & PSU Jobs (₹9 – 12 LPA)",
            "IT & Software Roles (₹10 – 15 LPA)",
            "Renewable Energy (₹7 – 10 LPA)",
            "Entrepreneurship (₹8 – 12 LPA) ",
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Electrical Machines Laboratory:',
                description: 'Provides hands-on training on transformers, DC machines, and AC machines to understand operating principles, characteristics, and performance analysis of electrical machines.',
                icon: '⚙️',
                image: '/images/be/eee/EEE- Machines Lab.jpg'
            },
            {
                title: 'Measurements & Instrumentation (M&I) Laboratory:',
                description: 'Focuses on practical measurement techniques and calibration of electrical instruments, sensors, and transducers for accurate data acquisition and system monitoring.',
                icon: '📊',
                image: '/images/be/eee/EEE-M&I lab.jpg'
            },
            {
                title: 'Linear Integrated Circuits (LIC) Laboratory:',
                description: 'Offers practical exposure to operational amplifiers, timers, and analog IC applications to design and analyze the signal processing and electronic circuits.',
                icon: '🏗️',
                image: '/images/be/eee/EEE- LIC Lab.jpg'
            },
            {
                title: 'Conference Room:',
                description: 'A technology-enabled learning space equipped with a smart TV and multimedia facilities to support interactive teaching, presentations, video lectures, and digital content delivery',
                icon: '📽️',
                image: '/images/be/eee/EEE- Conference room.jpg'
            },
            {
                title: 'Project Demo Day:',
                description: 'An academic event where students showcase their projects, prototypes, and innovative solutions, demonstrating practical knowledge, technical skills, and problem-solving abilities to faculty and Industrial experts.',
                icon: '💡',
                image: '/images/be/eee/EEE- Project Room.jpg'
            }
        ]
    },
    contact: {
        hod: "Dr.K.Santhi",
        designation: "Professor and Head",
        location: "Department of Electrical and Electronics Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur-635130.Krishnagiri (Dt),Tamilnadu",
        email: "hod_eee@adhiyamaan.ac.in",
        phone: "9843281823"
    }
};

export default eee;
