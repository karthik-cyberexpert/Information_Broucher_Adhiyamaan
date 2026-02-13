import type { DepartmentContent } from './types';

const phdECE: DepartmentContent = {
    about: (
        <>
            <p>
                The department offers B.E. in Electronics and Communication Engineering (Intake: 180) and M.E. in Communication Systems (Intake: 12). It has been led by Dr. Sumathi since 2012 and is recognized as a Research Centre by Anna University, Chennai.
            </p>
            <p>
                The department is equipped with state-of-the-art laboratories that promote strong practical knowledge alongside academic excellence. It has a consistent placement record, with most eligible students placed in reputed organizations.
            </p>
            <p>
                ECE actively engages in teaching and research across diverse domains including Electronics, Semiconductor Chip Design, RF & Space Technologies, Telecommunications, Signal Processing, Embedded Systems, IoT, Artificial Intelligence, Machine Learning, and Blockchain. Faculty members contribute significantly through research publications, funded projects, and patents.
            </p>
            <p>
                With a focus on innovation, research, and industry collaboration, the department continuously strives to empower students with technical expertise, professional skills, and lifelong learning abilities.
            </p>
        </>
    ),
    career: {
        description: "Doctoral research in ECE leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    contact: {
        hod: "Dr.S.Sumathi",
        designation: "Professor and Head",
        location: "Department of Electronics and Communication Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod.ece@adhiyamaan.ac.in",
        phone: "Mobile: 9487819151, Office No: 04344261005"
    },
    phd: {
        supervisor: '/images/phd/ece supervisor.jpeg',
        approval: '/images/phd/ece approval.jpg'
    }
};

export default phdECE;
