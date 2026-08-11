import apiClient from "../lib/apiClient";

export interface CreateJobRequestPayload {
    job: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cv: File;
}

export interface JobRequestResponse {
    success: boolean;
    message: string;
    data?: {
        _id: string;
        job: {
            _id: string;
            title: string;
            location: string;
            employmentType: string;
            department: string;
            status: string;
            deadline: string;
        };
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        status: string;
        createdAt: string;
    };
}

export const createJobRequest = async (
    payload: CreateJobRequestPayload,
): Promise<JobRequestResponse> => {
    const formData = new FormData();

    formData.append("job", payload.job);
    formData.append("firstName", payload.firstName);
    formData.append("lastName", payload.lastName);
    formData.append("email", payload.email);
    formData.append("phone", payload.phone);
    formData.append("cv", payload.cv);

    const response = await apiClient.post<JobRequestResponse>(
        "/job-requests/",
        formData,
        {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        },
    );

    return response.data;
};