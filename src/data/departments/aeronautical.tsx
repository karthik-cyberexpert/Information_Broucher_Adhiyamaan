import type { DepartmentContent } from './types';

const aero: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Aeronautical Engineering at Adhiyamaan College of Engineering
                is dedicated to preparing students for a career in the aerospace industry.
            </p>
            <p>
                Our curriculum covers aerodynamics, propulsion, structures, and flight mechanics,
                combining theoretical knowledge with hands-on labs and projects.
            </p>
        </>
    ),
    career: {
        description: "Aerospace professionals are in high demand across defense, space research, and commercial aviation.",
        roles: [
            "Aerospace Engineer",
            "Maintenance Engineer",
            "Design Consultant",
            "Research Associate",
            "Quality Assurance Specialist"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Aerodynamics Lab',
                description: 'Equipped with wind tunnels for flow analysis.',
                icon: '🌬️',
                image: '/images/aeroback.jpg'
            },
            {
                title: 'Propulsion Lab',
                description: 'Study of jet engines and flight structures.',
                icon: '🚀',
                image: '/images/aeroback.jpg'
            }
        ]
    },
    contact: {
        location: "Aeronautical Block, ACE",
        email: "hod.aero@adhiyamaan.ac.in",
        phone: "+91 4344 261031"
    }
};

export default aero;
