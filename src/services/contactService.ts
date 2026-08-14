import apiClient from "../lib/apiClient";
import type { ContactInfo } from "../Types/contact";

interface ContactResponse {
    success: boolean;
    data: ContactInfo;
}

export const getContactInfo = async (): Promise<ContactInfo> => {
    const response = await apiClient.get<ContactResponse>("/contacts/public");
    return response.data.data;
};