import apiClient from "../lib/apiClient";

import type {
  EquipmentCategoriesResponse,
  EquipmentCategory,
  EquipmentDetails,
  EquipmentDetailsResponse,
  EquipmentResponse,
  PublicEquipment,
} from "../Types/equipment";

export const getPublicEquipmentCategories = async (): Promise<
  EquipmentCategory[]
> => {
  const response =
    await apiClient.get<EquipmentCategoriesResponse>(
      "/equipments/categories/public",
    );

  return response.data.data;
};

export const getPublicEquipment = async (): Promise<
  PublicEquipment[]
> => {
  const response =
    await apiClient.get<EquipmentResponse>(
      "/equipments/public",
    );

  return response.data.data;
};

export const getPublicEquipmentBySlug = async (
  slug: string,
): Promise<EquipmentDetails> => {
  const response =
    await apiClient.get<EquipmentDetailsResponse>(
      `/equipments/public/${encodeURIComponent(slug)}`,
    );

  return response.data.data;
};