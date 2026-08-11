// ======================================================
// Project Types
// ======================================================

export interface ProjectImage {
    url: string;
    publicId: string;
    alt: string;
}

export interface ProjectService {
    _id: string;
    title: string;
    slug: string;
    serviceCard?: ProjectImage;
}

// ======================================================
// Project Details
// ======================================================

export interface ProjectDetails {
    client: string | null;
    location: string | null;
    completionDate: string | null;
    duration: string | null;
    status: string | null;
}

// ======================================================
// Detailed Scope
// ======================================================

export interface ProjectScopeItem {
    title: string;
    description: string;
    icon: string;
}

export interface ProjectDetailedScope {
    title: string;
    description: string;
    items: ProjectScopeItem[];
}

// ======================================================
// Gallery
// ======================================================

export interface ProjectGalleryImage extends ProjectImage {
    displayOrder: number;
}

// ======================================================
// Certificates
// ======================================================

export interface ProjectCertificate extends ProjectImage {
    displayOrder: number;
}

// ======================================================
// Project List Item
// Returned by:
// GET /api/v1/projects/public
// ======================================================

export interface ProjectListItem {
    _id: string;
    title: string;
    slug: string;
    categoryLabel: string;
    shortDescription: string;

    services: ProjectService[];

    cardImage: ProjectImage;

    displayOrder: number;
    isFeatured: boolean;
}

// ======================================================
// Full Public Project
// Returned by:
// GET /api/v1/projects/public/:slug
// ======================================================

export interface Project {
    _id: string;

    title: string;
    slug: string;

    categoryLabel: string;

    shortDescription: string;
    description: string;

    services: ProjectService[];

    hero: {
        title: string;
        description: string;
        image: ProjectImage;
    };

    cardImage: ProjectImage;

    projectDetails: ProjectDetails;

    detailedScope: ProjectDetailedScope;

    gallery: ProjectGalleryImage[];

    certificates: ProjectCertificate[];

    displayOrder: number;
    isFeatured: boolean;
    isActive: boolean;

    createdAt: string;
    updatedAt: string;
}

// ======================================================
// API Responses
// ======================================================

export interface ProjectsResponse {
    success: boolean;
    count: number;
    data: ProjectListItem[];
}

export interface ProjectResponse {
    success: boolean;
    data: Project;
}