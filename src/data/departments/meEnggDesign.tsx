import type { DepartmentContent } from './types';

const meEnggDesign: DepartmentContent = {
    about: (
        <>
            <p>
                The Post Graduate Programme (M.E.) in Engineering Design was started in the academic year 2005–2006. M.E. Engineering Design focuses on the design, analysis, development, and optimization of mechanical systems and products.
                The programme is committed to developing highly skilled design professionals equipped to meet the evolving demands of the mechanical engineering industry.
                The Department maintains a high standard of teaching and learning through well-qualified and experienced faculty members with proven academic excellence and strong research expertise.
            </p>
        </>
    ),
    career: {
        description: "Leaders in product innovation and mechanical research.",
        roles: ["Design Engineer ₹3 – 6 LPA",
            "Product Development Engineer ₹4 – 7 LPA",
            "CAE Analyst ₹4 – 8 LPA",
            "R&D Engineer ₹4 – 9 LPA",
            "Structural Analyst ₹4 – 8 LPA",
            "Simulation Engineer ₹4 – 8 LPA",
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Vibration Lab:',
                description: 'The laboratory provides practical exposure to the behavior of mechanical systems under dynamic loading conditions and helps students understand vibration measurement, analysis, and control techniques.',
                icon: '📐',
                image: '/images/me/engineeringdesign/vibration lab.jpg'
            },
            {
                title: 'CAD Lab:',
                description: 'The Computer Aided Design (CAD) Laboratory is established to provide practical knowledge and hands-on training in modern engineering design tools used in mechanical engineering industries.',
                icon: '📐',
                image: '/images/me/engineeringdesign/CAD Lab.jpeg'
            },
        ]
    },
    contact: {
        hod: "Dr. J. ARIVUDAINAMBI",
        designation: "Professor and Head",
        location: "Department of Mechanical Engineering,Adhiyamaan College of Engineering,Dr. M. G. R Nagar,Hosur – 635 130",
        email: "hod_mech@adhiyamaan.ac.in",
        phone: "9894445988"
    }
};

export default meEnggDesign;
