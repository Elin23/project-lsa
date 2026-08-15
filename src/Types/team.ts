export interface TeamMember {
    _id: string;
    fullName: string;
    position: string;
    experience: string;
    image: {
        url: string;
        publicId: string;
    };
    displayOrder: number;
}

export interface TeamMembersResponse {
    success: boolean;
    count: number;
    data: TeamMember[];
}