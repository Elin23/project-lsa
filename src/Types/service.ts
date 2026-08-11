export interface ServiceImage {
  url: string;
  publicId?: string;
  alt: string;
}

// ======================================================
// Public Service Card
// GET /api/v1/services/public
// ======================================================

export interface ServiceCardData {
  label: string;
  description: string;
  highlights: string[];
  image: ServiceImage;
}

export interface PublicService {
  _id: string;
  title: string;
  slug: string;
  serviceCard: ServiceCardData;
  displayOrder: number;
}

// ======================================================
// Hero Section
// ======================================================

export interface ServiceHeroSection {
  title: string;
  description: string;
  image: ServiceImage;
}

// ======================================================
// Delivery Process
// ======================================================

export interface ServiceDeliveryStep {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceDeliveryProcessSection {
  title: string;
  description: string;
  steps: ServiceDeliveryStep[];
}

// ======================================================
// Capabilities
// ======================================================

export interface ServiceCapabilityTableRow {
  cells: string[];
}

export interface ServiceCapabilitiesSection {
  title: string;
  description: string;
  items: string[];

  table: {
    headers: string[];
    rows: ServiceCapabilityTableRow[];
  };
}

// ======================================================
// Home Capability
// ======================================================

export interface ServiceHomeCapability {
  isVisible: boolean;
  title: string;
  shortDescription: string;
  displayOrder: number;
}

// ======================================================
// Full Service
// GET /api/v1/services/public/:slug
// ======================================================

export interface Service {
  _id: string;
  title: string;
  slug: string;

  serviceCard: ServiceCardData;

  heroSection: ServiceHeroSection;

  deliveryProcessSection: ServiceDeliveryProcessSection;

  capabilitiesSection: ServiceCapabilitiesSection;

  homeCapability: ServiceHomeCapability;

  displayOrder: number;
  isActive: boolean;

  createdAt: string;
  updatedAt: string;
}

// ======================================================
// Related Projects
// ======================================================

export interface ServiceRelatedProject {
  _id: string;
  title: string;
  slug: string;
  shortDescription: string;

  cardImage: ServiceImage;

  displayOrder: number;
}

// ======================================================
// API Responses
// ======================================================

export interface PublicServicesResponse {
  success: boolean;
  count: number;
  data: PublicService[];
}

export interface PublicServiceDetailsResponse {
  success: boolean;

  data: {
    service: Service;
    relatedProjects: ServiceRelatedProject[];
  };
}