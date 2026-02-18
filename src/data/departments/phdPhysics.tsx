import type { DepartmentContent } from './types';

const phdPhysics: DepartmentContent = {
    about: (
        <>
            <p>
                A Ph.D. in Physics is an advanced research program focused on developing new scientific knowledge. It builds deep expertise in areas like condensed matter, quantum physics, materials science, or optics.
            </p>
            <p>
                Scholars conduct independent research, publish papers, and present findings at conferences. The program strengthens analytical thinking, problem-solving, and experimental or theoretical skills.
            </p>
            <p>
                Graduates pursue careers in academia, research labs, industry, and advanced technology sectors.
            </p>
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
        hod:"Dr.R.N. Jayaprakash",
        designation:"Professor and  Head",
        location: "Department of Physics,Ground floor,Adhiyamaan College of Engineering and Technology,Hosur",
        email: "hod_physics@adhiyamaan.in",
        phone: "9442369968"
    },
    phd: {
        supervisor: (
            <div className="custom-phd-content" style={{ overflowY: 'hidden', overflowX: 'auto', maxWidth: '100%' }}>
                <table className="phd-table" style={{ minWidth: '600px' }}>
                    <thead>
                        <tr>
                            <th>Sr.No.</th>
                            <th>Name of the Supervisor</th>
                            <th>Designation</th>
                            <th>Specialization</th>
                            <th>Supervisor ID</th>
                            <th>Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><strong>Dr.R.N. Jayaprakash</strong></td>
                            <td>Professor</td>
                            <td>Thin films & Crystal Growth</td>
                            <td>2440075</td>
                            <td>
                                Email: hod_physics@adhiyamaan.in<br />
                                Mobile: 9442369968
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><strong>Dr.R.Mariappan</strong></td>
                            <td>Professor</td>
                            <td>Thin films & Nanotechnology</td>
                            <td>2570028</td>
                            <td>
                                Email: mariappan_physics@adhiyamaan.in<br />
                                Mobile: 9841396779
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        approval: '/images/phd/physics/approvalcopy.jpg'
    }
};

export default phdPhysics;
