import { Bed, Utensils, type LucideIcon } from 'lucide-react';

export interface HostelItem {
    id: string;
    name: string;
    desc: string;
    img: string;
    menu?: string[];
}

export interface HostelCategory {
    id: string;
    label: string;
    icon: LucideIcon;
    items: HostelItem[];
    features?: string[];
}

export const hostelData: Record<string, HostelCategory> = {
    boys: {
        id: 'boys',
        label: 'Boys Hostel',
        icon: Bed,
        features: ['24/7 RO Water', 'Wi-Fi Campus', 'Hygienic Mess', 'Power Backup'],
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
        features: ['Premium Safety', 'Solar Water', 'Indoor Games', 'Study Lounge'],
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
        features: ['Balanced Diet', 'Clean Kitchen', 'Fresh Veggies', 'Steam Cooking'],
        items: [
            {
                id: 'breakfast',
                name: 'Breakfast Menu',
                desc: 'Nutritious morning meals served fresh daily.',
                img: '/images/hostel/BOYS.jpeg',
                menu: ['Idli / Dosa', 'Poori Masala', 'Bread & Jam', 'Pongal / Vada', 'Tea & Coffee']
            },
            {
                id: 'lunch',
                name: 'Lunch Spread',
                desc: 'Healthy and hygienic balanced diet.',
                img: '/images/hostel/GIRLS.jpeg',
                menu: ['Steamed Rice', 'Sambar / Rasam', 'Kootu / Poriyal', 'Curd', 'Appalam']
            },
            {
                id: 'dinner',
                name: 'Dinner Menu',
                desc: 'Wholesome evening meals with a variety of veg and non-veg options.',
                img: '/images/hostel/B1.jpeg',
                menu: ['Chapathi / Kurma', 'Fried Rice', 'Parotta', 'Dosa Variety', 'Healthy Soups']
            },
            { id: 'canteen', name: 'Campus Canteen', desc: 'Variety of snacks and refreshers available throughout the day.', img: '/images/hostel/B3.jpeg' }
        ]
    }
};
