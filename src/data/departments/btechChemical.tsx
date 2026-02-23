import type { DepartmentContent } from './types';

const btechChemical: DepartmentContent = {
    about: (
        <>
            <p>Established in 1993, the Department of Chemical Engineering offers a B.Tech. programme aimed at developing competent and industry-ready chemical engineers. The department is equipped with well-established and modernized laboratories that provide strong practical exposure to complement theoretical learning.

                With a team of qualified and dedicated faculty members engaged in teaching and research, the department emphasizes academic excellence, innovation, and industry relevance. The curriculum is periodically updated to align with emerging trends in chemical engineering and allied fields.

                Graduates of the department pursue successful careers in core chemical industries, energy and oil sectors, biotechnology, pharmaceuticals, environmental engineering, and multinational corporations.</p>
            <p>Many students also continue higher education in India and abroad or establish themselves as entrepreneurs.The department actively promotes holistic development through seminars, workshops, industrial visits, internships, and conferences conducted in association with many professional bodies. With over three decades of academic contribution, the department continues to evolve in response to advancements in the chemical engineering profession and industry demands.</p>
        </>
    ),
    career: {
        description: "Chemical engineers are essential in oil & gas, pharmaceuticals, and manufacturing.",
        roles: ["Petrochemicals & Refineries – 4–10 LPA",
            "Fertilizers & Specialty Chemicals – 3–8 LPA",
            "Polymers & Plastics – 3–7 LPA",
            "Cement & Process Manufacturing – 3–6 LPA",
            "Paints, Dyes & Coatings – 3–7 LPA",
            "Oil & Gas Exploration & Production – 5–10 LPA",
            "Water & Wastewater Treatment – 3–6 LPA",
            "Pollution Control & Waste Management – 3–6 LPA",
            "Sustainable Process Design – 4–8 LPA",
            "Carbon Capture & Climate Technology – 5–10 LPA",
            "Petroleum Refineries – 4–10 LPA",
            "Renewable Energy (Biofuels, Hydrogen, Solar Materials) – 4–9 LPA",
            "Energy Storage & Battery Technology – 5–10 LPA"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Chemical Process lab',
                description: 'Equipment for studying reaction engineering and heat transfer.',
                icon: '🧪',
                image: '/images/btech/CE_bg.jpg'
            }
        ]
    },
    contact: {
        hod: "Dr. K Nagarajan",
        designation: "Professor and Head",
        location: "Department of Chemical Engineering,Adhiyamaan College of Engineering,Hosur.",
        email: "hod_chem@adhiyamaan.ac.in",
        phone: "+91 04344261014. "
    }
};

export default btechChemical;
