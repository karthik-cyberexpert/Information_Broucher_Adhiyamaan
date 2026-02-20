import type { DepartmentContent } from './types';

const mca: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Computer Applications, established in 1995–1996, offers a prestigious MCA program affiliated to Anna University. Accredited by the National Board of Accreditation (NBA),
                the department is committed to delivering quality, industry oriented education supported by state of the art computer laboratories, high speed internet, and Wi Fi enabled smart classrooms.
                From the current academic year, the program has introduced a specialization in Artificial Intelligence and Data Science (AI–DS), focusing on emerging technologies such as Machine Learning, Deep Learning, Big Data Analytics, Natural Language Processing, Computer Vision, Cloud Computing, and Cyber Security.
                With experienced faculty, innovative teaching methodologies, strong industry collaboration, and excellent placement training, the department strives to develop globally competent, self-disciplined computer professionals equipped with both strong theoretical foundations and practical expertise to meet international industry standards.

            </p>
        </>
    ),
    career: {
        description: "MCA professionals are the architects of enterprise-scale software solutions.",
        roles: [
            " Cloud Architect (₹12–30 LPA)",
            "Project Manager/IT Manager (₹15–30 LPA)",
            "Data Scientist (₹12–28 LPA)",
            "DevOps Engineer (₹12–25 LPA)",
            "Cybersecurity Specialist (₹12–30 LPA)",
            "AI/ML Engineer (₹12–28 LPA)",
            "Full Stack Architect (₹10–22 LPA)",
            "Solutions Architect (₹15–30 LPA)",
            "Technical Lead (₹12–25 LPA)",

        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Computer Application Laboratory',
                description: 'Computer application students are gaining practical experience in programming, software development, and computer applications using modern systems in a well-equipped lab.',
                icon: '💻',
                image: '/images/mca/computerapplication.jpeg'
            },

            {
                title: 'Server Room Demonstration',
                description: 'Students observe their instructor explaining server systems and networking equipment during a hands-on lab session.',
                icon: '💻',
                image: '/images/mca/serverroom.jpeg'
            },
            {
                title: 'Interactive Laptop Training',
                description: 'A faculty member guides students through a practical task on a laptop, encouraging active learning and discussion.',
                icon: '💻',
                image: '/images/mca/interactive laptop.jpeg'
            },
            {
                title: 'Faculty Guidance and Student Mentoring',
                description: 'Students participate in a collaborative computer lab activity, gaining real-time technical experience under expert supervision.',
                icon: '💻',
                image: '/images/mca/facultyguide.jpeg'
            },
            {
                title: 'Practical Learning in Computer Lab',
                description: 'Students actively engaged in hands-on computer lab sessions, applying theoretical knowledge through real-time practical work.',
                icon: '💻',
                image: '/images/mca/praticallearning.jpeg'
            },
            {
                title: 'Classroom Teaching and Interactive Learning.',
                description: 'A faculty-led classroom session where students attentively participate in concept-based learning using digital presentation tools.',
                icon: '💻',
                image: '/images/mca/classroominteractive .jpeg'
            },
            {
                title: 'Coding Club Activity',
                description: 'The Coding Club activity provides a platform for students to enhance coding proficiency, logical thinking, and teamwork through regular practice sessions, challenges, and project-based learning.',
                icon: '💻',
                image: '/images/mca/077.jpeg'
            },
        ]
    },
    contact: {
        hod: "Dr.D.Swamydoss",
        designation: "Professor and Head",
        location: "2nd Floor, MCA Block, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur-635130.Krishnagiri (Dt),Tamilnadu",
        email: "hod_mca@adhiyamaan.ac.in",
        phone: "+919487819140"
    }
};

export default mca;
