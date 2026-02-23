import type { DepartmentContent } from './types';

const phdComputer: DepartmentContent = {
    about: (
        <>
            <p>Recognized as a Research Department by Anna University, the Department of CSE offers full-time and part-time Ph.D. programmes that foster advanced research and innovation in emerging computing domains. With state-of-the-art laboratories, advanced facilities, and expert mentorship, scholars are nurtured into research leaders, academicians, and industry experts who create meaningful real-world impact.</p>
            <p>We provide a collaborative environment for scholars to innovate and contribute to the global technology landscape.</p>

        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist"]
    },
    contact: {
        hod: "Dr.G.Fathima",
        designation: "Professor and Head",
        location: "Department of computer science and Engineering , Adhiyamman College Of Engineering, Dr.M.G.R Nagar,Hosur – 635109,Krishnagiri District,TamilNadu",
        email: "hod_cse@adhiyamaan.ac.in",
        phone: "+91 9487819132"
    },
    phd: {
        supervisor: '/images/phd/computerscience/supervisor.png',
        approval: '/images/phd/computerscience/approval copy.jpeg'
    }
};

export default phdComputer;
