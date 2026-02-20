import type { DepartmentContent } from './types';

const phdMechanical: DepartmentContent = {
    about: (
        <>
            <p>Department of Mechanical Engineering is recognized as a research center by Anna University, Chennai. Research scholars are pursuing Ph.D and several got awarded. Department of Mechanical Engineering has well equipped laboratory facilities with state-of-the-art facilities for the undergraduate course and post graduate course along with Research and Development in the institute.</p>
        </>
    ),
    career: {
        description: "Ph.D. in Mechanical Engineering opens doors to advanced research and leadership roles.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Research Lead", "Innovation Head"]
    },
    contact: {
        hod: "Dr.J.Arivudainambi",
        designation: "Professor and Head",
        location: "Mechanical Engineering Block, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod_mech@adhiyamaan.ac.in",
        phone: "+91 9894445988"
    },
    phd: {
        supervisor: '/images/phd/mechanical/supervisor.png',
        approval: '/images/phd/mechanical/approval copy.jpg'
    }
};

export default phdMechanical;
