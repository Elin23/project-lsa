import apiClient from "../lib/apiClient";

import type {
  Project,
  ProjectListItem,
  ProjectResponse,
  ProjectsResponse,
} from "../Types/project";

// ======================================================
// Public Projects
// ======================================================

export const getPublicProjects = async (): Promise<
  ProjectListItem[]
> => {
  const response =
    await apiClient.get<ProjectsResponse>(
      "/projects/public",
    );

  return response.data.data;
};

// ======================================================
// Public Project Details
// ======================================================

export const getPublicProjectBySlug = async (
  slug: string,
): Promise<Project> => {
  const response =
    await apiClient.get<ProjectResponse>(
      `/projects/public/${encodeURIComponent(slug)}`,
    );

  return response.data.data;
};