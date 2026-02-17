import type { DepartmentContent } from './types';

const cse: DepartmentContent = {
    about: (
        <>
            <p>
                The B.E. – CSE programme focuses on building strong foundations in computer science principles combined with practical exposure to modern technologies. The curriculum covers programming, data structures, algorithms, databases, operating systems, computer networks, artificial intelligence, machine learning, cloud computing, and cybersecurity.
            </p>
            <p>
                Affiliated to Anna University and approved by AICTE, the department emphasizes industry-integrated learning, innovation, ethical computing practices, and global technical competence. The programme is designed to prepare students to solve real-world problems using cutting-edge technologies.
            </p>
            <p>
                With experienced faculty members, modern computing laboratories, and an active coding culture, the department encourages students to innovate, develop scalable solutions, and become future-ready software engineers, data scientists, researchers, and technology leaders.
            </p>
        </>
    ),
    career: {
        description: "Graduates of the Computer Science & Engineering programme are prepared for diverse roles across the IT industry, product-based companies, startups, research organizations, and emerging technology sectors. The curriculum equips students with strong problem-solving skills, programming expertise, and practical industry knowledge.",
        roles: [
            "Software Developer/ Software Engineer",
            "Full Stack Developer",
            "Frontend Developer",
            "Backend Developer",
            "Data Scientist/ Data Analyst",
            "AI Engineer/ Machine Learning Engineer",
            "Cybersecurity Analyst",
            "Cloud Engineer",
            "DevOps Engineer",
            "Database Administrator",
            "System Engineer/ Network Engineer",
            "Mobile App Developer/ Web Developer",
            "Research Scientist"
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
