import type { DepartmentContent } from './types';

const meCSE: DepartmentContent = {
    about: (
        <>
            <p>M.E. in Computer Science Engineering is an advanced postgraduate program for in-depth technical research.</p>
            <p>The program focuses on advanced algorithms, distributed systems, and modern AI architectures.</p>
        </>
    ),
    career: {
        description: "Advanced research and leadership roles in the global tech ecosystem.",
        roles: ["Senior Software Architect", "Principal Researcher", "Lead Data Scientist", "CTO", "Research Engineer"]
    },
    infrastructure: {
        items: [
            {
                title: 'Advanced Computing Lab',
                description: 'High-end workstations and server clusters for research.',
                icon: '💻',
                image: '/images/computerback.jpg'
            }
        ]
    },
    contact: {
        location: "CSE Block, ACE",
        email: "hod.cse@adhiyamaan.ac.in",
        phone: "+91 4344 261064"
    }
};

export default meCSE;
