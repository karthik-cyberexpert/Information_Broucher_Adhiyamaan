import type { DepartmentContent } from './types';

const cseCyber: DepartmentContent = {
    about: (
        <>
            <p>
               The Department of Computer Science and Engineering (Cybersecurity) was established with the objective of producing skilled cybersecurity professionals capable of addressing modern digital security challenges. The department focuses on providing strong foundations in computer science along with specialized knowledge in cybersecurity, ethical hacking, digital forensics, cryptography, network security, cloud security, and cyber law.
             Students are trained in identifying vulnerabilities, preventing cyber threats, and implementing secure systems.
The curriculum is designed as per industry standards and emerging technologies to meet the growing demand for cybersecurity experts. The department regularly organizes workshops, seminars, guest lectures, certification programs, hackathons, and industry interactions to enhance practical knowledge and research skills.
Faculty members are dedicated to academic excellence, research, and innovation in areas such as information security, artificial intelligence in cybersecurity, blockchain security, and secure software development.
The department aims to create technically competent, ethically responsible, and socially committed cybersecurity professionals who can contribute effectively to national and global digital security.

            </p>
        </>
    ),
    career: {
        description: "Cybersecurity specialists are crucial for protecting national and corporate infrastructure.",
        roles: [
            "Cybersecurity Engineer(6-15 LPA)",
            "Ethical Hacker(9-18 LPA)",
            "CyberSecurity Analyst(6-15 LPA)",
            "Chief Information Security Officer (25L - 4Cr)",
            "Incident Responder(6-15 LPA)",
            "Compliance Officer(6-15 LPA)",
            "Network Engineer(6-12 LPA)",
            "Security Auditor(8-16 LPA)",
            "Cloud Security Specialist(15-35 LPA)",
            "Security Architect(10-25 LPA)",
            "Security Consultant(4-12 LPA)",
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Smart class rooms',
                description: 'Equipped with facilites such as LCD projectors, digital whiteboards with high speed internet across the classroom.',
                icon: '🔐',
                image: '/images/be/cyber/classroom.jpeg'
            },
            {
                title: 'High Tech Laboratories',
                description: 'Equipped with modern systems with updated configurations, 24/7 internet facilities and latest software tools for cybersecurity.',
                icon: '🔐',
                image: '/images/be/cyber/lab.jpeg'
            },
            {
                title: 'Project Incubation Center',
                description: 'A dedicated space for students to work on innovative projects and develop their technical skills.',
                icon: '🔐',
                image: '/images/be/cyber/project.jpeg'
            },
            {
                title: 'Practical Learning Facilities',
                description: 'Emphasis on hands-on learning through real-world projects and case studies.',
                icon: '🔐',
                image: '/images/be/cyber/explain.jpeg'
            },
            {
                title: 'Departmental Discussion Room',
                description: 'The department has a well-equipped structure to discuss ongoing projects, resolve problems faced by students and suggest improvements.',
                icon: '🔐',
                image: '/images/be/cyber/class.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr. M. Lilly Florence",
        designation: "Professor and Head",
        location: "1st floor, Near Aero Seminar Hall, Department of Computer Science and Engineering (Cybersecurity), Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod_cse-cs@adhiyamaan.ac.in",
        phone: "+91 9487819149"
    }
};

export default cseCyber;
