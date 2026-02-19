import type { DepartmentContent } from './types';

const meStructural: DepartmentContent = {
    about: (
        <>
            <p>The Master of Engineering in Structural Engineering is a specialized postgraduate program designed to develop advanced knowledge and technical expertise in the analysis, design, and construction of safe, sustainable, and resilient structures. The program prepares graduates to address complex engineering challenges in modern infrastructure development.

        Structural Engineering focuses on the planning, analysis, design, and maintenance of structures such as buildings, bridges, dams, towers, and industrial facilities. This program combines strong theoretical foundations with practical applications using modern engineering tools and software.
        Students gain expertise in structural analysis, advanced concrete and steel design, earthquake engineering, foundation engineering, and construction management.</p>
        </>
    ),
    career: {
        description: "Experts in designing robust and safe infrastructure.",
        roles: ["Structural Design Engineer: ₹3–18+ LPA",
                "Construction / Site Engineer: ₹3–15+ LPA",
                "Project Engineer / Manager: ₹4–30+ LPA",
                "Bridge & Infrastructure Engineer: ₹4–25+ LPA",
                "BIM / Structural Modeling Engineer: ₹3–20+ LPA",
                "Quality Control Engineer: ₹3–12 LPA",
                "Research / Academics: ₹4–20+ LPA",
                "Government Sector Jobs: ₹5–18+ LPA (₹40k–1.5L/month)",
                "International Jobs: ₹8–45+ LPA"
            ]

    },
    infrastructure: {
        items: [
            {
                title: 'Hydraulic Testing Demonstration',
                description: 'Faculty guiding students in performing experiments using a hydraulic loading frame for structural analysis.',
                icon: '🏗️',
                image: '/images/me/structural/DSC_1590.jpg'
            },
            {
                title: 'Concrete Specimen Testing Session',
                description: 'Students observing practical testing of concrete elements to understand strength and load behaviour',
                icon: '🏗️',
                image: '/images/me/structural/DSC_1614.jpg'
            },
            {
                title: 'Advanced Structural Engineering Laboratory Setup',
                description: 'Well-equipped lab with heavy testing frames and instruments for research and experimentation in structural engineering.',
                icon: '🏗️',
                image: '/images/me/structural/DSC_1598.jpg'
            }
        ]
    },
    contact: {
        hod : "Dr.K.Srinivasan", 
        designation : "Professor and Head",
        location: "Department of Civil Engineering, Civil Block, Adhiyamaan College of Engineering, Dr.M.G.R Nagar, Hosur-635130, Krishnagiri District, Tamil Nadu, India.",
        email: "hod_civil@adhiyamaan.ac.in",
        phone: "+91 8072125325"
    }
};

export default meStructural;
