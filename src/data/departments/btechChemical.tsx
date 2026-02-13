import type { DepartmentContent } from './types';

const btechChemical: DepartmentContent = {
    about: (
        <>
            <p>Chemical Engineering focuses on the process of transforming raw materials into useful products.</p>
            <p>The curriculum covers thermodynamics, mass transfer, and process control.</p>
        </>
    ),
    career: {
        description: "Chemical engineers are essential in oil & gas, pharmaceuticals, and manufacturing.",
        roles: ["Process Engineer", "Plant Manager", "Safety Engineer", "R&D Scientist", "Quality Control Engineer"]
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
        location: "Chemical Engineering Block, ACE",
        email: "hod.chem@adhiyamaan.ac.in",
        phone: "+91 4344 261121"
    }
};

export default btechChemical;
