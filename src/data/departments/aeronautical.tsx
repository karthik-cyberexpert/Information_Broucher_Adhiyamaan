import type { DepartmentContent } from './types';

const aero: DepartmentContent = {
    about: (
        <>
            <p>
                The youngest department of Aeronautical Engineering, Adhiyamaan College of engineering was established in the year 2009. The department prepares engineers for success and leadership in the conception, design, implementation and operation of aerospace and related engineering systems. Aeronautical engineering is an exciting, intellectually challenging and economically important field that offers unique opportunities for students and researchers to contribute to the future of aerospace, communications, explorations and national integration.
            </p>
            <p>
                Since its inception, the department has been progressing towards successful achievements. The department has been conducting technical and non-technical events in associations with several professional bodies. The students are provided with immense practical knowledge to enrich themselves and are being trained to excel in all fields.
            </p>
        </>
    ),
    career: {
        description: "Aerospace professionals are in high demand across defense, space research, and commercial aviation.",
        roles: [
            "Aerospace & Aviation Sector (3-30 LPA) ",
            "Government & Defence Organizations (7-25 LPA) ",
            "Private Aerospace & Manufacturing Industries (7-15LPA) ",
            "Aerospace Engineer (₹4–8 LPA)",
            "Aircraft Maintenance Engineer (₹3–7 LPA)",
            "Design Engineer (₹4–9 LPA)",
            "Flight Test Engineer (₹5–10 LPA)",
            "Avionics Engineer (₹4–8 LPA)",
            "Space Research Engineer (₹6–12 LPA)",
            "Airline Operations Manager (₹5–10 LPA)",
            "Drone/UAV Engineer (₹4–9 LPA)",
            "Quality Assurance Engineer (₹3–7 LPA)",
            "Project Manager (₹10–20+ LPA)",
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'AIRCRAFT STRUCTURES LABORATORY',
                description: 'Provides practical exposure to aircraft structural behavior, strength analysis, and stability testing under various loading conditions.',
                icon: '🌬️',
                image: '/images/be/aeronatical/1.jpeg'
            },
            {
                title: 'Aerodynamics Laboratory',
                description: 'Facilitates experimental learning of airflow characteristics, lift–drag forces, and wind tunnel-based aerodynamic analysis.',
                icon: '🚀',
                image: '/images/be/aeronatical/2.jpg.jpeg'
            },
            {
                title: 'Aircraft Component Drawing Laboratory',
                description: 'Enables students to design and draft detailed aircraft components and assemblies using modern CAD tools.',
                icon: '🌬️',
                image: '/images/be/aeronatical/3.jpg.jpeg'
            },
            {
                title: 'Propulsion Laboratory',
                description: 'Offers hands-on understanding of aircraft propulsion systems through engine testing and performance evaluation.',
                icon: '🚀',
                image: '/images/be/aeronatical/4.jpg.jpeg'
            },
            {
                title: 'Flight Simulation Laboratory',
                description: 'Supports learning of flight dynamics, stability, and control concepts through advanced aircraft simulation systems.',
                icon: '🌬️',
                image: '/images/be/aeronatical/5.jpg.jpeg'
            },
            {
                title: 'Aircraft Design Laboratory',
                description: 'Promotes conceptual and detailed aircraft design using advanced aerodynamic and structural simulation software.',
                icon: '🌬️',
                image: '/images/be/aeronatical/6.jpg.jpeg'
            },
            {
                title: 'Avionics Laboratory',
                description: 'Focuses on aircraft navigation, communication, radar, and electronic control systems through practical avionics training.',
                icon: '🌬️',
                image: '/images/be/aeronatical/7.jpg.jpeg'
            }
        ]
    },
    contact: {
        hod: "Dr.K.Senthil Kumar M.Tech., Ph.D",
        designation: "Professor and Head",
        location: "Department of Aeronautical Engineering, Adhiyamaan College of Engineering, Dr. M.G.R Nagar, Hosur-635130.Krishnagiri (Dt),Tamilnadu",
        email: "hod_aero@adhiyamaan.ac.in",
        phone: "9894333716"
    }
};

export default aero;
