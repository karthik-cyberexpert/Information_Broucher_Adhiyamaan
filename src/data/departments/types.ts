import React from 'react';

export interface CareerRole {
    title: string;
}

export interface InfraItem {
    title: string;
    description: string;
    icon: string;
    image?: string;
}

export interface DepartmentContent {
    about: React.ReactNode;
    career: {
        description?: string;
        roles: string[];
        globalRelevance?: string;
    };
    infrastructure?: {
        description?: string;
        items: InfraItem[];
    };
    contact?: {
        hod?: string;
        "HoD In-Charge"?: string;
        designation?: string;
        location?: string;
        email?: string;
        phone?: string;
    };
    phd?: {
        supervisor?: React.ReactNode;
        approval?: React.ReactNode;
    };
}
