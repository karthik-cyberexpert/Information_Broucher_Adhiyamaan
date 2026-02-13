import type { DepartmentContent } from './types';

const mba: DepartmentContent = {
    about: (
        <>
            <p>The Master of Business Administration program prepares students for leadership in a globalized economy.</p>
            <p>We offer specializations in Marketing, Finance, HR, and Operations.</p>
        </>
    ),
    career: {
        description: "MBA graduates lead the corporate world through strategic insight and management skills.",
        roles: ["Operations Manager", "Financial Analyst", "Marketing Director", "Human Resources Head", "Entrepreneur"]
    },
    infrastructure: {
        items: [
            {
                title: 'Management Center',
                description: 'Equipped with case-study rooms and collaborative seminar halls.',
                icon: '📊',
                image: '/images/mba.jpg'
            }
        ]
    },
    contact: {
        location: "MBA Block, ACE",
        email: "hod.mba@adhiyamaan.ac.in",
        phone: "+91 4344 261161"
    }
};

export default mba;
