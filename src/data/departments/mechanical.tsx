import type { DepartmentContent } from './types';

const mechanical: DepartmentContent = {
    about: (
        <>
            <p>
                Mechanical Engineering is the core of industrial innovation.
            </p>
            <p>
                The department emphasizes manufacturing, thermodynamics, material science,
                and computer-aided design.
            </p>
        </>
    ),
    career: {
        description: "Mechanical engineers drive innovation in automotive, aerospace, and energy sectors.",
        roles: [
            "Design Engineer",
            "Production Manager",
            "Quality Engineer",
            "R&D Specialist",
            "Manufacturing Engineer"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Thermal Engineering Lab',
                description: 'IC Engine testing and thermodynamics research.',
                icon: '🔥',
                image: '/images/me.jpg'
            },
            {
                title: 'Manufacturing Lab',
                description: 'Advanced CNC machines and material testing equipment.',
                icon: '⚙️',
                image: '/images/me.jpg'
            }
        ]
    },
    contact: {
        location: "Mechanical Engineering Block, ACE",
        email: "hod.mech@adhiyamaan.ac.in",
        phone: "+91 4344 261091"
    },
    phd: {
        supervisor: '/images/phd/mechinical supervisor .jpeg',
        approval: '/images/phd/mechanical approval copy.jpeg'
    }
};

export default mechanical;
