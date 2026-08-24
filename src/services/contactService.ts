import apiClient from "../lib/apiClient";

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

interface ContactInfoResponse {
  success: boolean;
  data: ContactInfo;
}

export const getPublicContactInfo =
  async (): Promise<ContactInfo> => {
    const response =
      await apiClient.get<ContactInfoResponse>(
        "/contacts/public",
      );

    return response.data.data;
  };