import type { DepartmentContent } from './types';

const btechIT: DepartmentContent = {
    about: (
        <>
            <p>The Information Technology department focuses on the management and application of technology in organizations.</p>
            <p>Our curriculum emphasizes web technologies, cloud computing, and software development.</p>
        </>
    ),
    career: {
        description: "IT graduates are the backbone of digital business operations.",
        roles: ["Web Developer", "System Administrator", "Network Engineer", "IT Project Manager", "Database Developer"]
    },
    infrastructure: {
        items: [
            {
                title: 'Networking Lab',
                description: 'Advanced Cisco and Microsoft certified networking equipment.',
                icon: '🖥️',
                image: '/images/btech/ITbg.jpg'
            }
        ]
    },
    contact: {
        location: "IT Block, ACE",
        email: "hod_it@adhiyamaan.ac.in",
        phone: "+91 4344 261141"
    }
};

export default btechIT;
