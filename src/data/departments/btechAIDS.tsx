import type { DepartmentContent } from './types';

const btechAIDS: DepartmentContent = {
    about: (
        <>
            <p>Data Science and Artificial Intelligence are the pillars of the modern tech landscape.</p>
            <p>This B.Tech program focuses on data engineering, predictive modeling, and AI-driven decision systems.</p>
        </>
    ),
    career: {
        description: "Professionals with AIDS expertise are critical for data-driven organizations.",
        roles: ["Data Engineer", "BI Analyst", "AI Consultant", "Machine Learning Specialist", "Data Architect"]
    },
    infrastructure: {
        items: [
            {
                title: 'Big Data Lab',
                description: 'Advanced clusters for processing large-scale datasets.',
                icon: '📊',
                image: '/images/btech/AIDS_BG.jpg'
            }
        ]
    },
    contact: {
        location: "IT Block, ACE",
        email: "hod.it@adhiyamaan.ac.in",
        phone: "+91 4344 261101"
    }
};

export default btechAIDS;
