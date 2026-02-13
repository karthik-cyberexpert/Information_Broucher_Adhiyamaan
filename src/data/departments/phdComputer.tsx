import type { DepartmentContent } from './types';

const phdComputer: DepartmentContent = {
    about: (
        <>
            <p>Ph.D. in Computer Science & Engineering at ACE promotes advanced research in Artificial Intelligence, Cybersecurity, Cloud Computing, and Software Engineering.</p>
            <p>We provide a collaborative environment for scholars to innovate and contribute to the global technology landscape.</p>
        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    contact: {
        location: "CSE Block, ACE",
        email: "hod.cse@adhiyamaan.ac.in",
        phone: "+91 4344 261061"
    },
    phd: {
        supervisor: '/images/phd/computer secondary.jpeg',
        approval: '/images/phd/computer approval.jpeg'
    }
};

export default phdComputer;
