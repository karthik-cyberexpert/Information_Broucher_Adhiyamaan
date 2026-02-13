import type { DepartmentContent } from './types';

const civil: DepartmentContent = {
    about: (
        <>
            <p>
                Civil Engineering is one of the oldest and broadest engineering disciplines.
            </p>
            <p>
                The department emphasizes structural design, geotechnical engineering,
                environmental sustainability, and infrastructure development.
            </p>
        </>
    ),
    career: {
        description: "Civil engineers play a vital role in building and maintaining the modern world.",
        roles: [
            "Structural Engineer",
            "Project Manager",
            "Site Engineer",
            "Urban Planner",
            "Surveyor"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Structural Engineering Lab',
                description: 'Testing materials and structural components.',
                icon: '🏗️',
                image: '/images/civilback.jpg'
            }
        ]
    },
    contact: {
        location: "Civil Engineering Block, ACE",
        email: "hod.civil@adhiyamaan.ac.in",
        phone: "+91 4344 261051"
    }
};

export default civil;
