import type { DepartmentContent } from './types';

const mePower: DepartmentContent = {
    about: (
        <>
            <p>The Post Graduate Programme (M.E) in Power Systems Engineering was started in 2005-2006. The Programme has intake strength of 18. The Department has state of art laboratories. The Department has secured permanent affiliation with Anna University.</p>
            <p>The program curriculum focuses on advanced Power Systems Engineering topics, including smart grid technologies, power system stability, and HVDC transmission. It also covers Power Electronics, Electric Vehicle Technology, and Energy Auditing, providing students with a comprehensive understanding of modern power systems.</p>
            <p>The curriculum prepares students for careers in power and energy companies, electric vehicle manufacturers, and consulting firms. Students have access to cutting-edge labs, which provide hands-on experience with industry-standard equipment and software</p>
            <p>The department's strong industry connections offer internship and training opportunities, giving students a head start in their careers.</p>

        </>
    ),
    career: {
        description: "Specialized roles in the energy sector and power grid management.",
        roles: ["Advanced Power System Roles (₹8 – 15 LPA)",
            "PSUs & Core Sector (₹10 – 18 LPA)",
            "Renewable & Smart Grid Specialization (₹7 – 14 LPA)",
            "R&D & Consultancy (₹6 – 16 LPA)",
            "Academics & International Opportunities(₹6 – 12 LPA)"]
    },
    infrastructure: {
        items: [
            {
                title: 'MATLAB:',
                description: 'Provides practical training in modeling, simulation, and analysis of engineering systems using MATLAB and Simulink, enabling students to solve complex mathematical and electrical engineering problems efficiently.',
                icon: '⚡',
                image: '/images/me/power sytem/PSE-Matlab Photos.jpg'
            },
            {
                title: 'Power System Simulation Laboratory – PG (PSE):',
                description: 'This lab provides hands-on experience in modeling, analyzing, and simulating power system operation, stability, and fault conditions using advanced software tools.',
                icon: '⚡',
                image: '/images/me/power sytem/PSE lab photos.jpg'
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

export default mePower;
