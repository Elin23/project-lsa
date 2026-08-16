import {
  useQuery,
} from "@tanstack/react-query";

import {
  getPublicProjectBySlug,
  getPublicProjects,
} from "../../services/projectService";

// ======================================================
// Public Projects
// ======================================================

export const usePublicProjects = () => {
  return useQuery({
    queryKey: [
      "projects",
      "public",
    ],
    queryFn: getPublicProjects,
  });
};

// ======================================================
// Public Project Details
// ======================================================

export const usePublicProjectBySlug = (
  slug?: string,
) => {
  return useQuery({
    queryKey: [
      "projects",
      "public",
      slug,
    ],

    queryFn: () =>
      getPublicProjectBySlug(
        slug as string,
      ),

    enabled:
      Boolean(slug),
  });
};