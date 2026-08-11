import type { Project, ProjectResponse, ProjectsResponse } from "../Types/project";


const API_BASE_URL = "/api/v1/projects";

export const getPublicProjects = async (): Promise<
    ProjectsResponse
> => {
    const response = await fetch(`${API_BASE_URL}/public`);

    if (!response.ok) {
        throw new Error("Failed to fetch projects");
    }

    const data: ProjectsResponse = await response.json();

    return data;
};

export const getPublicProjectBySlug = async (
    slug: string,
): Promise<Project> => {
    const response = await fetch(
        `${API_BASE_URL}/public/${encodeURIComponent(slug)}`,
    );

    if (!response.ok) {
        if (response.status === 404) {
            throw new Error("Project not found");
        }

        throw new Error("Failed to fetch project");
    }

    const data: ProjectResponse = await response.json();

    return data.data;
};