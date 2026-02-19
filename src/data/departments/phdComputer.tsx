import type { DepartmentContent } from './types';

const phdComputer: DepartmentContent = {
    about: (
        <>
            <p>The Department of Computer Science and Engineering offers a full-time and part-time Ph.D. programme aimed at fostering advanced research and innovation in emerging areas of computing. The programme is designed to develop scholars with strong analytical skills, technical expertise, and research capabilities to address real-world challenges. The department is equipped with state-of-the-art laboratories and advanced computing facilities that support high-quality research. It provides a vibrant research environment with experienced faculty members guiding scholars in diverse domains. With a strong focus on innovation, interdisciplinary research, and technological advancement, the department strives to produce competent researchers, academicians, and industry experts contributing to global technological growth.</p>
            <p>We provide a collaborative environment for scholars to innovate and contribute to the global technology landscape.</p>
        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    contact: {
        hod : "Dr.G.Fathima", 
        designation : "Professor and Head",
        location: "Department of computer science and Engineering , Adhiyamman College Of Engineering, Dr.M.G.R Nagar,Hosur – 635109,Krishnagiri District,TamilNadu",
        email: "hod_cse@adhiyamaan.ac.in",
        phone: "+91 9487819132"
    },
    phd: {
        supervisor: '/images/phd/computer secondary.jpeg',
        approval: '/images/phd/computer approval.jpeg'
    }
};

export default phdComputer;
