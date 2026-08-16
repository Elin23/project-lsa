export interface SocialLinks {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
}

export interface ContactLocation {
    address: string;
    mapUrl?: string;
}

export interface ContactInfo {
    _id: string;
    title: string;
    description: string;
    location: ContactLocation;
    phones: string[];
    primaryPhone: string;
    email: string;
    workingHours: string;
    emergencyHours: string;
    socialLinks: SocialLinks;
}

export interface ContactInfoResponse {
    success: boolean;
    data: ContactInfo;
}