import type { DepartmentContent } from './types';

const mca: DepartmentContent = {
    about: (
        <>
            <p>Master of Computer Applications is a specialized program for software development and system management.</p>
            <p>The program focuses on application stacks, database management, and enterprise software solutions.</p>
        </>
    ),
    career: {
        description: "MCA professionals are the architects of enterprise-scale software solutions.",
        roles: ["Software Developer", "Database Administrator", "System Analyst", "Web Architect", "Network Manager"]
    },
    infrastructure: {
        items: [
            {
                title: 'Software Development Lab',
                description: 'Modern development environments and databases for application building.',
                icon: '💻',
                image: '/images/mca.jpg'
            }
        ]
    },
    contact: {
        location: "MCA Block, ACE",
        email: "hod.mca@adhiyamaan.ac.in",
        phone: "+91 4344 261171"
    }
};

export default mca;
