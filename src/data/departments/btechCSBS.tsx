import type { DepartmentContent } from './types';

const btechCSBS: DepartmentContent = {
    about: (
        <>
            <p>Computer Science and Business Systems is a unique program blending tech skills with business acumen.</p>
            <p>The program focuses on digital technologies and their application in business environments.</p>
        </>
    ),
    career: {
        description: "Graduates are uniquely positioned for roles requiring both tech and business insight.",
        roles: ["Business Analyst", "IT Consultant", "Product Manager", "Enterprise Architect", "Tech Strategist"]
    },
    infrastructure: {
        items: [
            {
                title: 'Innovation Lab',
                description: 'Collaborative space for business and tech integration projects.',
                icon: '🖥️',
                image: '/images/btech/csbsbg.jpg'
            }
        ]
    },
    contact: {
        location: "CSBS Block, ACE",
        email: "hod.csbs@adhiyamaan.ac.in",
        phone: "+91 4344 261131"
    }
};

export default btechCSBS;
