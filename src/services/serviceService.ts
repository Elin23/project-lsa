import apiClient from "../lib/apiClient";

import type {
  PublicService,
  PublicServiceDetailsResponse,
  PublicServicesResponse,
} from "../Types/service";

export const getPublicServices = async (): Promise<PublicService[]> => {
  const response =
    await apiClient.get<PublicServicesResponse>("/services/public");

  return response.data.data;
};

export const getPublicServiceBySlug = async (
  slug: string,
): Promise<PublicServiceDetailsResponse["data"]> => {
  const response =
    await apiClient.get<PublicServiceDetailsResponse>(
      `/services/public/${encodeURIComponent(slug)}`,
    );

  return response.data.data;
};