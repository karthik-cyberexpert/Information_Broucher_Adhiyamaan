import type { DepartmentContent } from './types';

const bArch: DepartmentContent = {
    about: (
        <>
            <p>The Department of Architecture, established in 1992–93, has over three decades of academic excellence and has produced more than 1,000 architects placed successfully in India and abroad. With a multi-sensory, practice-oriented teaching approach led by experienced faculty, the department offers a comprehensive learning environment supported by advanced labs, studios, and an extensive departmental library.</p>
        </>
    ),
    career: {
        description: "Architects shape the environments where people live and work.",
        roles: ["Architect –₹3–20+ LPA.",
            "Urban Planner –₹4–15 LPA.",
            "Interior Designer –₹3–12 LPA.",
            "Landscape Architect –₹3–15 LPA.",
            "Construction Manager –₹7–16 LPA.",
            "BIM / Architectural Designer ₹3–10 LPA.",
            "Sustainability Consultant –₹6–16 LPA.",
            "Conservation Architect –₹5–13 LPA.",
            "Real Estate Developer –₹8–25+ LPA.",
            "Architecture Professor –₹5–12 LPA."
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'ART ROOM',
                description: 'The Art Display Room serves as a curated space to exhibit students’ creative works, fostering artistic expression and visual learning within the Architecture Department',
                icon: '🏛️',
                image: '/images/barch/ART ROOM.jpg.jpeg'
            },
            {
                title: 'CADD LAB',
                description: 'The CADD Lab in the Architecture Department enables students to develop precise digital drafting, 3D modelling, and presentation skills using advanced computer-aided design software.',
                icon: '🏛️',
                image: '/images/barch/CADD LAB.jpg.jpeg'
            },
            {
                title: 'MODEL MAKING ROOM ',
                description: 'The Model Making Room in the Architecture Department provides hands-on space and tools for students to transform design concepts into detailed physical architectural models.',
                icon: '🏛️',
                image: '/images/barch/MODEL MAKING ROOM.jpg.jpeg'
            },
            {
                title: 'CONSTRUCTION YARD ',
                description: 'The Construction Yard in the Architecture Department offers practical exposure to building materials, construction techniques, and hands-on execution of structural elements.',
                icon: '🏛️',
                image: '/images/barch/CONSTRUCTION YARD.jpg.jpeg'
            },
            {
                title: 'LIBRARY ',
                description: 'The Architecture Library serves as a specialized knowledge hub providing access to books, journals, drawings, codes, and digital resources that support architectural learning, research, and design development.',
                icon: '🏛️',
                image: '/images/barch/DEPARTMENT LIBRARY.jpg.jpeg'
            },
            {
                title: 'CLIMATOLOGY LAB ',
                description: 'The Climatology Lab in the Architecture Department facilitates hands-on study of environmental parameters such as temperature, humidity, wind, light, and sound using specialized instruments to support climate-responsive design',
                icon: '🏛️',
                image: '/images/barch/CLIMATOLOGY LAB.jpg.jpeg'
            }

        ]
    },
    contact: {
        hod: "Ar.A. Armstrong",
        designation: "Professor and Head",
        location: "DEPARTMENT OF ARCHITECTURE,Adhiyamaan college of Engineering,Hosur",
        email: "hod_arch@adhiyamaan.in",
        phone: "+91 4344 261151"
    }
};

export default bArch;
