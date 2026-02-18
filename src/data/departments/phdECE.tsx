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
        supervisor: (
            <div className="custom-phd-content">
                <img
                    src="/images/phd/ece supervisor.jpeg"
                    alt="ECE PhD Supervisor"
                    style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', marginBottom: '20px' }}
                />
                <table className="phd-table">
                    <thead>
                        <tr>
                            <th>Supervisor Name & Designation</th>
                            <th>No.</th>
                            <th>Research Area</th>
                            <th>Contact Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <strong>Dr. R. Radhakrishnan</strong><br />
                                Principal
                            </td>
                            <td>2740011</td>
                            <td>Wireless Networks, Image Processing, Data Mining, Adhoc Networks</td>
                            <td>
                                Ph. No.: 8883562627<br />
                                E-mail: Principal@adhiyamaan.ac.in
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Dr. S. Sumathi</strong><br />
                                Professor and Head of the Department
                            </td>
                            <td>2640091</td>
                            <td>Computing, Signal Processing, VLSI, Communication.</td>
                            <td>
                                Ph. No.: 9487819151<br />
                                E-mail: hod_ece@adhiyamaan.ac.in
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Dr. Menakadevi T</strong><br />
                                Professor
                            </td>
                            <td>2440192</td>
                            <td>VLSI System, SDR, Wireless Communication, Embedded Systems.</td>
                            <td>
                                Ph. No.: 9629350444<br />
                                E-mail: menaka_sar@rediffmail.com
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <strong>Dr. S. Xavier Arockiaraj</strong><br />
                                Professor
                            </td>
                            <td>4390012</td>
                            <td>Signal/Image Processing, Machine Learning, Deep Learning</td>
                            <td>
                                Ph. No.: 9791372049<br />
                                E-mail: arockiarajxavier@gmail.com
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ),
        approval: '/images/phd/ece approval.jpg'
    }
};

export default phdECE;
