import type { DepartmentContent } from './types';

const btechCSBS: DepartmentContent = {
    about: (
        <>
            <p>
                The Department of Computer Science and Business Systems, established in 2025, is committed to shaping future leaders who bridge the gap between Technology and Business.
            </p>
            <p>
                With a focus on integrating computer science principles with business strategies, the department prepares students to navigate and innovate in the fast-paced digital economy.
            </p>
            <p>
                At CSBS, we emphasize the synergy of technology and business acumen, fostering interdisciplinary learning, innovation, and ethical decision-making.
            </p>
            <p>
                Our mission is to cultivate professionals capable of leveraging technology to drive business transformation and create sustainable value in a global marketplace.
            </p>
        </>
    ),
    career: {
        description: "Graduates are uniquely positioned for roles requiring both tech and business insight.",
        roles: [
            "Software Developer (₹5 – 6 LPA)",
            "Business Intelligence Analyst (₹4 – 5 LPA)",
            "Data Scientist (₹5 – 10 LPA)",
            "Business Analyst (₹4 – 6 LPA)",
            "Operations Analyst (₹5 – 8 LPA)",
            "Tech Startups (₹4 – 8 LPA)",
            "FinTech Analyst (₹5– 9 LPA)"
        ]
    },
    infrastructure: {
        items: [
            {
                title: 'Well-equipped Labs',
                description: 'Fully equipped and operational computer laboratory setup',
                icon: '🖥️',
                image: '/images/btech/csbs/image1new.jpeg'
            },
            {
                title: 'Induction programme ',
                description: 'The Induction Programme is organized for first-year students to orient them towards academic and campus life',
                icon: '🖥️',
                image: '/images/btech/csbs/image2new.jpg'
            }
        ]
    },
    contact: {
        "HoD In-Charge": "Prof. V. Kalai Vani",
        designation: "Assistant professor",
        location: "Department of Computer Science and Business Systems, Adhiyamaan College of Engineering, Dr.M G. R Nagar, Hosur – 635 130 Krishnagiri District, Tamil Nadu, India.",
        email: "hod_csbs@adhiyamaan.ac.in",
        phone: "9043417021"
    }
};

export default btechCSBS;
