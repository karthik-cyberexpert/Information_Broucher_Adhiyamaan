import type { DepartmentContent } from './types';

const phd: DepartmentContent = {
    about: (
        <>
            <p>The department has been recognized as a Research Centre by Anna University, Chennai, for conducting the Ph.D. programme. Several Ph.D. degrees have been awarded and many research scholars are currently pursuing their doctoral studies. The Research Centre is well equipped with facilities to conduct research in organic, inorganic and electrochemistry</p>
        </>
    ),
    career: {
        description: "Doctoral research leads to high-level academic and industrial research positions.",
        roles: ["Principal Scientist", "Post-Doctoral Fellow", "University Professor", "Innovation Head", "Research Lead"]
    },
    infrastructure: {
        items: [
            {
                title: 'Central Research Center',
                description: 'Dedicated PhD workstations and advanced publication access.',
                icon: '🔬',
                image: '/images/phd.jpg'
            }
        ]
    },
    contact: {
        hod: "Dr. S Anthuvan Babu M.Sc., M.Phil., Ph.D.",
        designation: "Associate Professor & Head",
        location: "Admin Block, Adhiyamaan College of Engineering, Dr. M.G.R. Nagar, Hosur- 635130, Krishnagiri district,Tamil Nadu, India  .",
        email: ": hod_Che@adhiyamaan.ac.in",
        phone: "+91 9003667688"
    },
    phd: {
        supervisor: (
            <div className="custom-phd-content" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
                <img
                    src="/images/phd/chemistry/supervisor.png"
                    alt="PhD Supervisors"
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
                    }}
                />
            </div>
        ),
        approval: '/images/phd/chemistry/approval copy.jpg'
    }
};

export default phd;
