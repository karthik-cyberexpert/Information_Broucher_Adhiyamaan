import type { DepartmentContent } from './types';

const meCSE: DepartmentContent = {
    about: (
        <>
            <p>The Department of Computer Science and Engineering offers the M.E. Computer Science and Engineering programme approved by AICTE, designed to nurture advanced technical expertise and research-oriented skills. Spanning four semesters, the programme provides a comprehensive blend of core and elective courses that strengthen both theoretical foundations and practical proficiency in emerging areas of computing. The department follows a Continuous Assessment System to ensure consistent academic progress and meaningful feedback. With a strong emphasis on hands-on learning, innovation, and project-based evaluation conducted in two phases, we foster analytical thinking, creativity, and problem-solving abilities. Our goal is to develop competent professionals equipped with technical confidence and leadership qualities to excel in the ever-evolving technological landscape</p>
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
                image: '/images/computerback.jpg'
            },
        ]
    },
    contact: {
        hod:"Dr.G.Fathima ",
        designation: "Professor and Head",  
        location: "Department of computer science and Engineering , Adhiyamman College Of Engineering, Dr.M.G.R Nagar,Hosur – 635109,Krishnagiri District,Tamil Nadu,India",
        email: "hod_cse@adhiyamaan.ac.in",
        phone: "+91 9487819132"
    }
};

export default meCSE;
