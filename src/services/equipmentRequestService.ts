import apiClient from "../lib/apiClient";

export interface CreateEquipmentRequestPayload {
  equipment: string;
  fullName: string;
  email: string;
  phone: string;
  company: string;
  workLocation: string;
  estimatedRequiredDays: number;
  workDescription: string;
}

export interface EquipmentRequestResponse {
  success: boolean;
  message: string;

  data?: {
    _id: string;

    equipment: {
      _id: string;
      title: string;
      slug: string;

      image: {
        url: string;
        alt: string;
      };

      primarySpecification: {
        label: string;
        value: string;
      };

      location: string;
      availableUnits: number;
    };

    fullName: string;
    email: string;
    phone: string;
    company: string;
    workLocation: string;
    estimatedRequiredDays: number;
    workDescription: string;
    status: string;
    createdAt: string;
  };
}

export const createEquipmentRequest = async (
  payload: CreateEquipmentRequestPayload,
): Promise<EquipmentRequestResponse> => {
  const response =
    await apiClient.post<EquipmentRequestResponse>(
      "/equipments-request/",
      payload,
    );

  return response.data;
};