import type { DepartmentContent } from './types';

const cseAiMl: DepartmentContent = {
    about: (
        <>
            <p>
                Artificial Intelligence and Machine Learning are revolutionizing industries.
            </p>
            <p>
                This program covers deep learning, neural networks, natural language processing,
                and computer vision.
            </p>
        </>
    ),
    career: {
        description: "AI/ML engineering is one of the fastest-growing job segments globally.",
        roles: [
            "ML Engineer",
            "AI Researcher",
            "Data Engineer",
            "Automation specialist",
            "NLP Scientist"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'AI Lab',
                description: 'GPU-accelerated systems for training complex deep learning models.',
                icon: '🤖',
                image: '/images/be/AIML-bg.jpg.jpeg'
            }
        ]
    },
    contact: {
        location: "Computer Science Block, ACE",
        email: "hod.cse@adhiyamaan.ac.in",
        phone: "+91 4344 261063"
    }
};

export default cseAiMl;
