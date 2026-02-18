import type { DepartmentContent } from './types';

const mca: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Computer Applications offers an MCA program affiliated with Anna University, and from this academic year, it has introduced a specialization in Artificial Intelligence and Data Science (AI–DS). Established in 1995–1996, the department provides quality education supported by modern computer laboratories, high-speed internet, and Wi-Fi-enabled smart classrooms. Accredited by the National Board of Accreditation (NBA), the program emphasizes innovative teaching and industry-oriented training in areas such as Machine Learning, Deep Learning, Big Data Analytics, Natural Language Processing, Computer Vision, Cloud Computing, and Cyber Security, integrating theoretical knowledge with practical exposure to meet global industry standards.
            </p>
        </>
    ),
    career: {
        description: "MCA professionals are the architects of enterprise-scale software solutions.",
        roles: [
            "Software Developer (₹3–6 LPA)",
            "Web Developer (₹3–5 LPA)",
            "Mobile App Developer (₹3–6 LPA)",
            "Data Analyst (₹3–6 LPA)",
            "AI/ML Engineer (₹4–8 LPA)",
            "Cloud Engineer (₹4–7 LPA)",
            "Cyber Security Specialist (₹3.5–7 LPA)",
            "Database Administrator (₹3–6 LPA)",
            "System Analyst (₹4–8 LPA)",
            "IT Project Manager (₹8–12+ LPA)"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Computer Lab:',
                description: 'Students engaged in practical computer lab training with faculty guidance, enhancing their technical skills through hands-on learning.',
                icon: '💻',
                image: '/images/mca/infrastructure/1.jpeg'
            },

            {
                title: 'Server Room Demonstration',
                description: 'Students observing a live demonstration of the server rack and learning about IT infrastructure management.',
                icon: '💻',
                image: '/images/mca/infrastructure/2.jpeg'
            },
            {
                title: 'Technical Guidance Session:',
                description: 'Faculty guiding students through a hands-on computer-based activity during a lab session.',
                icon: '💻',
                image: '/images/mca/infrastructure/3.jpeg'
            },
            {
                title: 'Interactive learning in computer laboratory',
                description: 'Modern development environments and databases for application building.',
                icon: '💻',
                image: '/images/mca/infrastructure/4.jpeg'
            },
            {
                title: 'Group Lab Activity',
                description: 'Students participating in a practical computer lab session with step-by-step instructor guidance.',
                icon: '💻',
                image: '/images/mca/infrastructure/6.jpeg'
            },
            {
                title: 'Students attending classroom session.',
                description: 'Modern development environments and databases for application building.',
                icon: '💻',
                image: '/images/mca/infrastructure/7.jpeg'
            },
            {
                title: 'Smart Classroom:',
                description: 'A faculty member delivering an interactive lecture using smart board technology, creating a modern and engaging learning environment.',
                icon: '💻',
                image: '/images/mca/infrastructure/9.jpeg'
            },
            {
                title: 'Student Support',
                description: 'Faculty providing personalized guidance to a student during a laptop-based academic activity, promoting mentorship and focused learning',
                icon: '💻',
                image: '/images/mca/infrastructure/10.jpeg'
            },
        ]
    },
    contact: {
        hod: "Dr.D,Swamydoss",
        designation: "Professor and Head",
        location: "2nd Floor, MCA Block, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur-635130.Krishnagiri (Dt),Tamilnadu",
        email: "hod_mca@adhiyamaan.ac.in",
        phone: "+919487819140"
    }
};

export default mca;
