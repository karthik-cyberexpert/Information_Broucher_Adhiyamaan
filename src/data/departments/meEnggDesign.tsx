import type { DepartmentContent } from './types';

const meEnggDesign: DepartmentContent = {
    about: (
        <>
            <p>M.E. in Engineering Design focuses on the advanced aspects of product design and material research.</p>
            <p>Students learn about finite element analysis, CAD/CAM, and material optimization.</p>
        </>
    ),
    career: {
        description: "Leaders in product innovation and mechanical research.",
        roles: ["Lead Design Engineer", "Product Architect", "Finite Element Analyst", "R&D Manager", "Materials Specialist"]
    },
    infrastructure: {
        items: [
            {
                title: 'Design & Simulation Lab',
                description: 'Equipped with ANSYS, CATIA, and SolidWorks for advanced modeling.',
                icon: '📐',
                image: '/images/me.jpg'
            }
        ]
    },
    contact: {
        location: "Mechanical Block, ACE",
        email: "hod.mech@adhiyamaan.ac.in",
        phone: "+91 4344 261092"
    }
};

export default meEnggDesign;
