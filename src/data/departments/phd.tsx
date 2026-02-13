import type { DepartmentContent } from './types';

const phd: DepartmentContent = {
    about: (
        <>
            <p>Ph.D. programs at ACE are designed for original research contributing to new knowledge in engineering and science.</p>
            <p>We provide a robust research environment for scholars to pursue their academic passions.</p>
        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    infrastructure: {
        items: [
            {
                title: 'Central Research Center',
                description: 'Dedicated PhD workstations and advanced publication access.',
                icon: '🔬',
                image: '/images/phd.jpg'
            }
        ]
    },
    contact: {
        location: "Main Block, ACE",
        email: "research@adhiyamaan.ac.in",
        phone: "+91 4344 261181"
    }
};

export default phd;
