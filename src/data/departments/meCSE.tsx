import type { DepartmentContent } from './types';

const meCSE: DepartmentContent = {
    about: (
        <>
            <p>An elite, AICTE-approved M.E. - Computer Science and Engineering crafted for advanced engineering excellence and research leadership, with strong focus on high-quality research publications. A future-driven curriculum blending hands-on innovation, deep specialization, and project-powered learning to shape next-gen tech leaders</p>
        </>
    ),
    career: {
        description: "Advanced research and leadership roles in the global tech ecosystem.",
        roles: [
            "Senior Software Engineer (10   L – 30 L)",
            "Technical Architect (15 L – 50 L)",
            "Full Stack Architect (12 L – 40 L)",
            "AI / Machine Learning Engineer (10 L – 40 L)",
            "Data Scientist / Big Data Engineer (10 L – 35 L)",
            "Cybersecurity Specialist (8 L – 30 L)",
            "Cloud Solutions Architect (10 L – 36 L)",
            "DevOps Engineer (10 L – 25 L)",
            "Research & Development Engineer (8 L – 30 L)",
            "Systems Architect (15 L – 50 L)",
            "Network Security Engineer (9 L – 28 L)",
            "Database Architect (8 L – 25 L)",
            "Technology Consultant",
            "Research Associate / Research Scientist (7 L – 30 L)",
            "Academician / Assistant Professor (5 L – 15 L)"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'R&D Laboratory',
                description: 'The department is supported by a well-established infrastructure that provides a modern and technology-enabled learning environment. The centralized computing facility is equipped with advanced desktop systems, high-speed internet connectivity, and updated software tools to support academic and research activities.',
                icon: '💻',
                image: '/images/me/computer/r&d.png'
            },
        ]
    },
    contact: {
        hod: "Dr.G.Fathima ",
        designation: "Professor and Head",
        location: "M.E. - Computer Science and Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod_cse@adhiyamaan.ac.in",
        phone: "+91 9487819132"
    }
};

export default meCSE;
