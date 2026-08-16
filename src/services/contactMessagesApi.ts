import apiClient from "../lib/apiClient";

export interface CreateContactMessagePayload {
    fullName: string;
    email: string;
    phone: string;
    service?: string;
    projectDescription: string;
}

export interface ContactMessageResponse {
    success: boolean;
    message: string;
    data?: any;
}

export const createContactMessage = async (
    payload: CreateContactMessagePayload
): Promise<ContactMessageResponse> => {
    try {
        const response = await apiClient.post<ContactMessageResponse>(
            "/contact-messages/",
            payload
        );
        return response.data;
    } catch (err: any) {
        const serverMessage =
            err?.response?.data?.errors?.[0]?.message ||
            err?.response?.data?.message ||
            "An unexpected error occurred";

        throw new Error(serverMessage);
    }
};