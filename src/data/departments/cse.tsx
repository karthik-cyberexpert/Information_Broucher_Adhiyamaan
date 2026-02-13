import type { DepartmentContent } from './types';

const cse: DepartmentContent = {
    about: (
        <>
            <p>
                The Computer Science & Engineering department is at the forefront of digital transformation.
            </p>
            <p>
                We focus on algorithms, software engineering, cloud computing, and human-computer interaction
                to solve complex real-world problems.
            </p>
        </>
    ),
    career: {
        description: "CSE graduates are highly sought after by global tech giants and startups alike.",
        roles: [
            "Full Stack Developer",
            "Data Scientist",
            "Systems Architect",
            "Software Engineer",
            "UI/UX Designer"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Cloud Computing Lab',
                description: 'High-performance computing and cloud infrastructure.',
                icon: '☁️',
                image: '/images/computerback.jpg'
            }
        ]
    },
    contact: {
        location: "CSE Block, ACE",
        email: "hod.cse@adhiyamaan.ac.in",
        phone: "+91 4344 261061"
    },
    phd: {
        supervisor: '/images/phd/computer secondary.jpeg',
        approval: '/images/phd/computer approval.jpeg'
    }
};

export default cse;
