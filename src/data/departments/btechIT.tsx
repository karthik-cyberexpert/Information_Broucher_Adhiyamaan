import type { DepartmentContent } from './types';

const btechIT: DepartmentContent = {
    about: (
        <>
            <p>The Department of Information Technology was established in the year 2001 with a Vision to impart quality technical education and foster innovation in the field of IT. Accredited by NBA, the department emphasizes excellence in teaching, research, and industry collaboration. The department offers a strong foundation in programming, Software development, Networking, Cloud computing, and Emerging technologies such as AI & ML, Data Analytics, Cyber Security and IoT. The department aims to develop competent IT professionals by delivering quality education, encouraging ethical practices, fostering research and innovation, and engaging with industry for enhanced learning outcomes. The department provides well-equipped computer laboratories. Modern infrastructure supports effective teaching and learning. Qualified and experienced faculty members guide the students. Smart classrooms enhance interactive learning experiences. The department maintains good industry interaction.
                The department strives for continuous improvement in academic excellence.
            </p>
        </>
    ),
    career: {
        description: "IT graduates are the backbone of digital business operations.",
        roles: ["Software Developer: ₹3 LPA – ₹8 LPA",
            "Full Stack Developer: ₹4 LPA – ₹12 LPA",
            "Data Analyst: ₹4 LPA – ₹10 LPA",
            "Data Scientist: ₹6 LPA – ₹20 LPA",
            "Cloud Engineer: ₹5 LPA – ₹15 LPA",
            "Cybersecurity Analyst: ₹4 LPA – ₹12 LPA",
            "Network Engineer: ₹3 LPA – ₹8 LPA",
            "DevOps Engineer: ₹6 LPA – ₹18 LPA",
            "IT Consultant : ₹5 LPA – ₹15 LPA",
        ],
    },
    infrastructure: {
        items: [
            {
                title: 'Computer Laboratories',
                description: 'Well-equipped labs with updated systems & High-speed internet connectivity',
                icon: '🖥️',
                image: '/images/btech/it/CCVI.jpg'
            },
            {
                title: 'Smart Classrooms',
                description: 'ICT-enabled classrooms. Projectors and digital teaching aids',
                icon: '🖥️',
                image: '/images/btech/it/smart class room.jpg'
            },
            {
                title: 'Innovation & Project Facilities',
                description: 'Dedicated project labs for mini and major projects. Support for hackathons, coding contests, and technical symposiums',
                icon: '🖥️',
                image: '/images/btech/it/Imptex 26.jpg'
            },
            {
                title: 'Workshop',
                description: 'An interactive awareness session conducted by faculty members to guide and motivate students toward academic and career development',
                icon: '🖥️',
                image: '/images/btech/it/Workshop.jpg'
            }
        ]
    },
    contact: {
        hod: "Dr.D.Thilagavathy",
        designation: "Professor and Head",
        location: "Department of Information Technology,Adhiyamaan College of Engineering,Dr. M.G.R. Nagar, Hosur – 635130,Tamil Nadu, India",
        email: "hod_it@adhiyamaan.ac.in",
        phone: "+91 4344 261141"
    }
};

export default btechIT;
