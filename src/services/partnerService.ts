import apiClient from "../lib/apiClient";

import type {
  PublicPartner,
  PublicPartnersResponse,
} from "../Types/partner";

export const getPublicPartners = async (): Promise<
  PublicPartner[]
> => {
  const response =
    await apiClient.get<PublicPartnersResponse>(
      "/partners/public",
    );

  return response.data.data;
};