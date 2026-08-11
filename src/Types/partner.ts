// ======================================================
// Partner
// ======================================================

export interface PartnerLogo {
  url: string;
  publicId: string;
}

// ======================================================
// Public Partner
// Returned by:
// GET /api/v1/partners/public
// ======================================================

export interface PublicPartner {
  _id: string;

  logo: PartnerLogo;

  website: string | null;
}

// ======================================================
// API Response
// ======================================================

export interface PublicPartnersResponse {
  success: boolean;
  count: number;
  data: PublicPartner[];
}