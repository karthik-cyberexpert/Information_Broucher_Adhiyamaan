import type { DepartmentContent } from './types';

const civil: DepartmentContent = {
    about: (
        <>
            <p>
               The Department of Civil Engineering was established in the academic year 1993–1994 . The department has demonstrated strong capabilities through ongoing sponsored and curiosity driven research projects, consultancy services, and patented innovations.
The strength of the department lies in its learning oriented pedagogical practices, delivered by experienced and dedicated faculty members with expertise across diverse domains of Civil Engineering. State of the art laboratory facilities and advanced software tools including GIS, structural engineering, and image processing applications are extensively utilized to enhance students’ professional and technical competencies.
The department’s core competence is reflected in research programs sponsored by prestigious organizations such as the Department of Science and Technology, Department of Space, Ministry of Human Resource Development, and Ministry of Earth Sciences, Government of India

            </p>
        </>
    ),
    career: {
        description: "Civil engineers play a vital role in building and maintaining the modern world.",
        roles: [
            "Central Public Works Department (CPWD)7 – 12 LPA",
            "Indian Railways8 – 14 LPA",
            "National Highways Authority of India (NHAI)10 – 18 LPA",
            "State PWD6 – 10 LPA",
            "PSUs (BHEL, SAIL, etc.)10 – 18 LPA",
            "Structural Engineer3 – 6 LPA",
            "Geotechnical Engineer3 – 5 LPA",
            "Environmental Engineer3 – 5 LPA"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Surveying Practical Session',
                description: 'Students are learning land surveying techniques using modern instruments for accurate field measurements.',
                icon: '🏗️',
                image: '/images/be/civil/DSC_1576.jpg'
            },
            {
                title: 'Structural Testing Demonstration',
                description: 'Faculty guiding students in conducting advanced structural load and material testing experiments in the lab.',
                icon: '🏗️',
                image: '/images/be/civil/DSC_1627.jpg'
            },
            {
                title: 'Strength of Materials Laboratory',
                description: 'Well-equipped lab with testing machines to study the mechanical properties and behavior of construction materials.',
                icon: '🏗️',
                image: '/images/be/civil/DSC_3167.jpg'
            },
            {
                title: 'Environmental Engineering Laboratory',
                description: 'Laboratory setup with spectrophotometer and equipment for chemical testing and material characterization',
                icon: '🏗️',
                image: '/images/be/civil/DSC_3625.jpg'
            },
            {
                title: 'Geotechnical Engineering Laboratory',
                description: 'Facilities for soil testing and foundation analysis to understand the engineering properties of soil.',
                icon: '🏗️',
                image: '/images/be/civil/DSC_3628.jpg'
            }
        ]
    },
    contact: {
        hod : "Dr.K.Srinivasa", 
        designation : "Professor and Head",
        location: "Department of Civil Engineering, Civil Block, Adhiyamaan College of Engineering, Dr.M.G.R Nagar, Hosur-635130, Krishnagiri District, Tamil Nadu, India.",
        email: "hod_civil@adhiyamaan.ac.in",
        phone: "+91 8072125325"
    }
};

export default civil;
