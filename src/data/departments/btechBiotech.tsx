import type { DepartmentContent } from './types';

const btechBiotech: DepartmentContent = {
    about: (
        <>
            <p>The programme offers industry-aligned courses delivered by highly qualified faculty which emphasis on skill development, research, and scientific writing. Department is Well-equipped laboratories, funded research projects, industry–academia interaction, and innovative teaching to work effectively in multidisciplinary environments.
                The department offers advanced training and research opportunities across a wide range of biotechnology disciplines
            </p>

        </>
    ),
    career: {
        description: "The Graduates of the BioTechnology are placed with core roles.",
        roles: [
            "Junior Scientist (0 -6 LPA)",
            "Downstream Specialist (0 – 7 LPA)",
            "Bioprocess Specialist (0 -4 LPA)",
            "Research Associate (0 -6 LPA)",
            "Quality Specialist (0 – 8 LPA)",
            "Upstream Associate (0 -6 LPA)",
            "Senior Executive (0 -6 LPA)"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Microbiology Lab',
                description: 'Microbiology Laboratory: Modern Laboratory set-up which helps to enhance students’ practical knowledge in various domains of BioTechnology',
                icon: '🧬',
                image: '/images/btech/biotechnology/micro1.jpeg'
            },
            {
                title: 'Downstream Processing Laboratory',
                description: 'Equipped with industrial needs of Upstream and  Downstream equipment.',
                icon: '🧬',
                image: '/images/btech/biotechnology/downstream.jpeg'
            },
            {
                title: 'Mushroom Cultivation',
                description: 'In house mushroom cultivation helps students to enrich knowledge of  students.',
                icon: '🧬',
                image: '/images/btech/biotechnology/mushroom.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr Manivasagan",
        designation: "Professor and Head",
        location: "3rd floor, Department of biotechnology, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur – 635130, Krishnagiri District, Tamil Nadu, India",
        email: "hod_bt@adhiyamaan.in",
        phone: "+91 9865373358"
    }
};

export default btechBiotech;
