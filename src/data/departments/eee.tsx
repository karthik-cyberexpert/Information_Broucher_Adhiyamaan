import type { DepartmentContent } from './types';

const eee: DepartmentContent = {
    about: (
        <>
            <p>
                The Electrical & Electronics Engineering department focuses on energy, power systems,
                and automation.
            </p>
            <p>
                We prepare students for careers in renewable energy, smart grids, and industrial control.
            </p>
        </>
    ),
    career: {
        description: "EEE engineers are essential for the global transition to sustainable energy.",
        roles: [
            "Power Systems Engineer",
            "Control Engineer",
            "Renewable Energy Specialist",
            "Electrical Designer",
            "Automation Engineer"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Electric Motors Lab',
                description: 'Testing and analysis of various electrical machines.',
                icon: '⚡',
                image: '/media/eee.jpg'
            },
            {
                title: 'Power Systems Lab',
                description: 'Simulation and protection of power grid infrastructure.',
                icon: '🔌',
                image: '/media/eee.jpg'
            }
        ]
    },
    contact: {
        location: "EEE Block, ACE",
        email: "hod.eee@adhiyamaan.ac.in",
        phone: "+91 4344 261081"
    }
};

export default eee;
