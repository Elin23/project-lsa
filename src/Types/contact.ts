export interface ContactInfo {
  title: string;
  description: string;

  primaryPhone: string;
  phones: string[];

  email: string;

  workingHours: string;
  emergencyHours: string;

  location: {
    address: string;
    googleMapsEmbedUrl: string;
  };

  socialLinks: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
}