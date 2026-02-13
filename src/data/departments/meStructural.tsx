import type { DepartmentContent } from './types';

const meStructural: DepartmentContent = {
    about: (
        <>
            <p>M.E. in Structural Engineering provides advanced knowledge in build design and material stability.</p>
            <p>Emphasis is on earthquake-resistant structures and sustainable construction materials.</p>
        </>
    ),
    career: {
        description: "Experts in designing robust and safe infrastructure.",
        roles: ["Senior Structural Engineer", "Bridges Designer", "Earthquake Engineering Specialist", "Infrastructure Consultant", "Site Manager"]
    },
    infrastructure: {
        items: [
            {
                title: 'Concrete Technology Lab',
                description: 'Testing of high-performance and innovative construction materials.',
                icon: '🏗️',
                image: '/images/civilback.jpg'
            }
        ]
    },
    contact: {
        location: "Civil Block, ACE",
        email: "hod.civil@adhiyamaan.ac.in",
        phone: "+91 4344 261052"
    }
};

export default meStructural;
