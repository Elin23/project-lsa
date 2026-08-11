import apiClient from "../lib/apiClient";

export interface Job {
    _id: string;
    title: string;
    shortDescription: string;
    description: string;
    location: string;
    employmentType: string;
    department: string;
    responsibilities: string[];
    requirements: string[];
    status: string;
    deadline: string;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
}

interface JobsResponse {
    success: boolean;
    count: number;
    data: Job[];
}

export const getJobs = async (): Promise<Job[]> => {
    const response = await apiClient.get<JobsResponse>("/jobs/public");

    return response.data.data;
};