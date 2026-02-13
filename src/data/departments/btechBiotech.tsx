import type { DepartmentContent } from './types';

const btechBiotech: DepartmentContent = {
    about: (
        <>
            <p>Biotechnology merges biology with engineering to create innovative solutions in medicine and agriculture.</p>
            <p>This program emphasizes genetic engineering, bioprocess technology, and bioinformatics.</p>
        </>
    ),
    career: {
        description: "Biotechnologists are at the forefront of medical and ecological innovation.",
        roles: ["Bioprocess Engineer", "Research Scientist", "Biotech Lab Analyst", "QC Specialist", "Environmental Consultant"]
    },
    infrastructure: {
        items: [
            {
                title: 'Genetics Lab',
                description: 'Advanced facilities for DNA sequencing and genetic research.',
                icon: '🧬',
                image: '/images/btech/biobg.jpg'
            }
        ]
    },
    contact: {
        location: "Biotech Block, ACE",
        email: "hod.biotech@adhiyamaan.ac.in",
        phone: "+91 4344 261111"
    }
};

export default btechBiotech;
