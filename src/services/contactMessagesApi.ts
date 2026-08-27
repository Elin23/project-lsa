import apiClient from "../lib/apiClient";

// ======================================================
// Types
// ======================================================

export interface CreateContactMessagePayload {
  clientRequestId: string;

  fullName: string;
  email: string;
  phone: string;

  service?: string;

  projectDescription: string;
}

export interface ContactMessageResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// ======================================================
// Create Contact Message
// ======================================================

export const createContactMessage = async (
  payload: CreateContactMessagePayload,
): Promise<ContactMessageResponse> => {
  const response =
    await apiClient.post<ContactMessageResponse>(
      "/contact-messages/",
      payload,
    );

  return response.data;
};