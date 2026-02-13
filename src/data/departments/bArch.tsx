import type { DepartmentContent } from './types';

const bArch: DepartmentContent = {
    about: (
        <>
            <p>The Bachelor of Architecture program at ACE focuses on combining artistic vision with structural reality.</p>
            <p>The program emphasizes sustainable design, urban planning, and historic preservation.</p>
        </>
    ),
    career: {
        description: "Architects shape the environments where people live and work.",
        roles: ["Registered Architect", "Urban Designer", "Interior Designer", "Landscape Architect", "Project Lead"]
    },
    infrastructure: {
        items: [
            {
                title: 'Architecture Studio',
                description: 'Dedicated creative spaces for drafting and model building.',
                icon: '🏛️',
                image: '/images/civilback.jpg'
            }
        ]
    },
    contact: {
        location: "Architecture Block, ACE",
        email: "hod.arch@adhiyamaan.ac.in",
        phone: "+91 4344 261151"
    }
};

export default bArch;
