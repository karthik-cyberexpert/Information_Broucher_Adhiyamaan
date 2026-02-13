import type { DepartmentContent } from './types';

const defaultContent: DepartmentContent = {
    about: (
        <>
            <p>
                This department is dedicated to providing world-class education and research opportunities.
                Our curriculum is designed to foster innovation, critical thinking, and practical skills
                that prepare students for leadership roles in their respective fields.
            </p>
            <p>
                Established with a vision to excel, the department boasts state-of-the-art laboratories,
                experienced faculty, and a vibrant student community.
            </p>
        </>
    ),
    career: {
        description: "Graduates from this department have excellent placement records and are recruited by top-tier companies globally.",
        roles: [
            "Software Development & Engineering",
            "Research & Data Analysis",
            "System Architecture",
            "Project Management",
            "Consultancy & Advisory Roles"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Modern Labs',
                description: 'Equipped with the latest hardware and software tools.',
                icon: '🖥️',
                image: '/images/computerback.jpg'
            },
            {
                title: 'Department Library',
                description: 'Extensive collection of books, journals, and digital resources.',
                icon: '📚',
                image: '/images/aboutcollege.jpg'
            },
            {
                title: 'Smart Classrooms',
                description: 'Wi-Fi enabled rooms with advanced teaching aids.',
                icon: '📡',
                image: '/images/civilback.jpg'
            },
            {
                title: 'R&center',
                description: 'Dedicated space for research and innovation projects.',
                icon: '🔬',
                image: '/images/me.jpg'
            }
        ]
    },
    contact: {
        location: "Main Block, Adhiyamaan College of Engineering",
        email: "office@adhiyamaan.ac.in",
        phone: "+91 4344 261001"
    }
};

export default defaultContent;
