import apiClient from "../lib/apiClient";

import type {
  PublicHomeCapabilitiesResponse,
  PublicHomeCapability,
  PublicService,
  PublicServiceDetailsResponse,
  PublicServicesResponse,
} from "../Types/service";

// ======================================================
// Public Services
// ======================================================

export const getPublicServices = async (): Promise<
  PublicService[]
> => {
  const response =
    await apiClient.get<PublicServicesResponse>(
      "/services/public",
    );

  return response.data.data;
};

// ======================================================
// Public Service Details
// ======================================================

export const getPublicServiceBySlug = async (
  slug: string,
): Promise<
  PublicServiceDetailsResponse["data"]
> => {
  const response =
    await apiClient.get<PublicServiceDetailsResponse>(
      `/services/public/${encodeURIComponent(slug)}`,
    );

  return response.data.data;
};

// ======================================================
// Home Capabilities
// ======================================================

export const getPublicHomeCapabilities =
  async (): Promise<
    PublicHomeCapability[]
  > => {
    const response =
      await apiClient.get<PublicHomeCapabilitiesResponse>(
        "/services/public/home-capabilities",
      );

    return response.data.data;
  };