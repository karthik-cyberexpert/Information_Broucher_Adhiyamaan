import type { DepartmentContent } from './types';

const phdMechanical: DepartmentContent = {
    about: (
        <>
            <p>Ph.D. programs in Mechanical Engineering at ACE focus on core and interdisciplinary research areas including Manufacturing, Thermal Sciences, Material Science, and Robotics.</p>
            <p>Our research scholars work on industry-relevant problems with access to advanced computation and testing facilities.</p>
        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    contact: {
        location: "Mechanical Engineering Block, ACE",
        email: "hod.mech@adhiyamaan.ac.in",
        phone: "+91 4344 261091"
    },
    phd: {
        supervisor: '/images/phd/mechinical supervisor .jpeg',
        approval: '/images/phd/mechanical approval copy.jpeg'
    }
};

export default phdMechanical;
