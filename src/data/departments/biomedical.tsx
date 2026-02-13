import type { DepartmentContent } from './types';

const biomedical: DepartmentContent = {
    about: (
        <>
            <p>
                Biomedical Engineering represents the intersection of engineering principles and medical sciences.
            </p>
            <p>
                The department focuses on medical instrumentation, signal processing, and biomaterials
                to improve healthcare delivery and patient outcomes.
            </p>
        </>
    ),
    career: {
        description: "Graduates find opportunities in medical device manufacturing, hospitals, and clinical research.",
        roles: [
            "Biomedical Engineer",
            "Clinical Scientist",
            "Medical Device Specialist",
            "Healthcare Consultant",
            "Service Engineer"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Biomedical Instrumentation Lab',
                description: 'Advanced sensors and medical monitoring systems.',
                icon: '🩺',
                image: '/images/bioback.jpg'
            }
        ]
    },
    contact: {
        location: "Biomedical Engineering Block, ACE",
        email: "hod.bme@adhiyamaan.ac.in",
        phone: "+91 4344 261041"
    }
};

export default biomedical;
