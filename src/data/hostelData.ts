import { Bed, Utensils, type LucideIcon } from 'lucide-react';

export interface HostelItem {
    id: string;
    name: string;
    desc: string;
    img: string;
}

export interface HostelCategory {
    id: string;
    label: string;
    icon: LucideIcon;
    items: HostelItem[];
}

export const hostelData: Record<string, HostelCategory> = {
    boys: {
        id: 'boys',
        label: 'Boys Hostel',
        icon: Bed,
        items: [
            { id: 'b-main', name: 'Boys Hostel Wing', desc: 'Secure and comfortable living quarters for male students.', img: '/images/hostel/BOYS.jpeg' },
            { id: 'b-room1', name: 'Standard Room', desc: 'Well-ventilated rooms with dedicated study space.', img: '/images/hostel/B1.jpeg' },
            { id: 'b-room2', name: 'Shared Living', desc: 'Clean and organized dormitory environment.', img: '/images/hostel/B2.jpeg' },
            { id: 'b-common', name: 'Common Area', desc: 'Recreational space for student interaction.', img: '/images/hostel/B3.jpeg' },
            { id: 'b-infra', name: 'Infrastructure', desc: 'Modern building with 24/7 security and amenities.', img: '/images/hostel/B4.jpeg' }
        ]
    },
    girls: {
        id: 'girls',
        label: 'Girls Hostel',
        icon: Bed,
        items: [
            { id: 'g-main', name: 'Girls Hostel Wing', desc: 'Safe and supportive housing for female students.', img: '/images/hostel/GIRLS.jpeg' },
            { id: 'g-room1', name: 'Standard Room', desc: 'Private and shared rooms with modern furnishings.', img: '/images/hostel/G1.jpeg' },
            { id: 'g-common', name: 'Lounge Area', desc: 'Comfortable spaces for relaxation and socializing.', img: '/images/hostel/G3.jpeg' },
            { id: 'g-infra', name: 'Hostel Block', desc: 'State-of-the-art facilities with premium safety features.', img: '/images/hostel/G4.jpeg' }
        ]
    },
    dining: {
        id: 'dining',
        label: 'Dining & Mess',
        icon: Utensils,
        items: [
            { id: 'breakfast', name: 'Breakfast Menu', desc: 'Nutritious morning meals served fresh daily.', img: '/images/hostel/BOYS.jpeg' },
            { id: 'lunch', name: 'Lunch Spread', desc: 'Healthy and hygienic balanced diet.', img: '/images/hostel/GIRLS.jpeg' },
            { id: 'canteen', name: 'Campus Canteen', desc: 'Variety of snacks and refreshers available throughout the day.', img: '/images/hostel/B3.jpeg' }
        ]
    }
};
