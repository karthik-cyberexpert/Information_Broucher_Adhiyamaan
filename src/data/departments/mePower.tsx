import type { DepartmentContent } from './types';

const mePower: DepartmentContent = {
    about: (
        <>
            <p>M.E. in Power Engineering focuses on advanced electrical systems and sustainable energy.</p>
            <p>The program covers high voltage engineering, power electronic converters, and smart grid tech.</p>
        </>
    ),
    career: {
        description: "Specialized roles in the energy sector and power grid management.",
        roles: ["Power Grid Manager", "Energy Consultant", "Substation Designer", "Renewable Energy Researcher", "Electrical Systems Lead"]
    },
    infrastructure: {
        items: [
            {
                title: 'High Voltage Lab',
                description: 'Specialized testing for power systems and electrical devices.',
                icon: '⚡',
                image: '/images/me_power.jpg'
            }
        ]
    },
    contact: {
        location: "EEE Block, ACE",
        email: "hod.eee@adhiyamaan.ac.in",
        phone: "+91 4344 261082"
    }
};

export default mePower;
