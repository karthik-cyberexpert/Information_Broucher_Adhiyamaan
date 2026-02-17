import type { DepartmentContent } from './types';

const biomedical: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Biomedical Engineering, established in the academic year 2003–2004, is dedicated to providing quality education and research opportunities in the interdisciplinary domain that integrates engineering principles with medical and biological sciences. The department has been consistently accredited by the National Board of Accreditation (NBA), reflecting its commitment to academic excellence and continuous quality improvement.
            </p>
            <p>
                Our faculty, staff, and students form an integral team that creates distinctive opportunities for innovative solutions in biomedical research and design. The department is supported by well-equipped laboratories developed with funding assistance from the AICTE under the MODROB scheme. In addition, the department has signed MoUs with renowned industries and hospitals to promote practical-oriented teaching and learning.
            </p>
            <p>
                We strive for excellence in undergraduate education, meaningful and innovative research, and dedicated service toward advancing the field of Biomedical Engineering. The department also maintains a consistent placement record of above 90%, reflecting strong academic preparation and industry relevance.
            </p>
        </>
    ),
    career: {
        description: "Graduates find opportunities in medical device manufacturing, hospitals, and clinical research.",
        roles: [
            "•	Hospitals & Healthcare Institutions (6-12 LPA)",
            "•	Medical Device & Equipment Manufacturing	(4-8 LPA)",
            "•	Pharmaceutical & Biotechnology Companies(6-8 LPA)",
            "•	Healthcare IT & Software Industry(4-10 LPA)",
            "•	Sales, Marketing & Training (Medical Devices) (6-10 LPA)"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Integrated Circuits Laboratory',
                description: 'The laboratory enables skill development in circuit design, simulation, and implementation using standard integrated circuit components.',
                icon: '🔬',
                image: '/images/be/biomedical/Integrated Circuits Laboratory.jpg'
            },
            {
                title: 'Biomedical Instrumentation Laboratory',
                description: 'The laboratory offers practical exposure to biomedical measurement techniques and real-time healthcare instrumentation for skill-oriented learning',
                icon: '🩺',
                image: '/images/be/biomedical/Biomedical Instumentation Laboratory.jpg'
            },
            {
                title: 'Human Anatomy and Physiology Laboratory',
                description: 'The laboratory bridges biological science concepts with engineering applications through interactive demonstrations and experiments.',
                icon: '🧬',
                image: '/images/be/biomedical/Human Anatomy and Physiology Laboratory.jpg'
            },
            {
                title: 'Diagnostic and Therapeutic Equipment Laboratory',
                description: 'The laboratory offers hands-on learning in diagnostic evaluation and therapeutic treatment technologies used in modern clinical practice.',
                icon: '💉',
                image: '/images/be/biomedical/Diagnostic and Therapeutic Equipment Laboratory.jpg'
            },
            {
                title: 'Smart Class Rooms',
                description: 'The Department of Biomedical Engineering features a modern, fully equipped smart classroom for enhanced learning.',
                icon: '🏫',
                image: '/images/be/biomedical/smart classrooms.jpeg'
            },
            {
                title: 'Mental Well-Being Club Activity',
                description: 'The Department of Biomedical Engineering, in association with the Mental Well-Being Club, regularly organizes programs that nurture emotional resilience to maintain balance, achieve personal growth, and excel academically and socially.',
                icon: '🧘',
                image: '/images/be/biomedical/mental well being.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr. T. S. Udhaya Suriya",
        designation: "Professor and Head",
        location: "3rd floor, Department of Biomedical Engineering, Adhiyamaan College of Engineering, Dr.M.G.R. Nagar, Hosur, Krishnagiri -635130.",
        email: "hod_bme@adhiyamaan.ac.in",
        phone: "9894171294"
    }
};

export default biomedical;
