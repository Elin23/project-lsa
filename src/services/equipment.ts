export interface EquipmentImage {
  url: string;
  alt: string;
}

export interface EquipmentCategory {
  _id: string;
  name: string;
  slug: string;
  displayOrder: number;
}

export interface EquipmentPrimarySpecification {
  label: string;
  value: string;
}

export interface EquipmentSafetyCertificate {
  isAvailable: boolean;
  message: string;
}

// GET /api/v1/equipments/public
export interface PublicEquipment {
  _id: string;
  title: string;
  slug: string;

  category: EquipmentCategory;

  shortDescription: string;

  image: EquipmentImage;

  primarySpecification: EquipmentPrimarySpecification;

  location: string;
  availableUnits: number;

  safetyCertificate: EquipmentSafetyCertificate;

  displayOrder: number;
}

// GET /api/v1/equipments/public/:slug
export interface EquipmentDetails extends PublicEquipment {
  description: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface EquipmentCategoriesResponse {
  success: boolean;
  count: number;
  data: EquipmentCategory[];
}

export interface EquipmentResponse {
  success: boolean;
  count: number;
  data: PublicEquipment[];
}

export interface EquipmentDetailsResponse {
  success: boolean;
  data: EquipmentDetails;
}