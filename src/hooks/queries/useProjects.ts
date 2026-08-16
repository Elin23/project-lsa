import { useQuery } from "@tanstack/react-query";

import {
  getPublicProjects,
} from "../../services/projectService";

export const usePublicProjects = () => {
  return useQuery({
    queryKey: [
      "projects",
      "public",
    ],
    queryFn: getPublicProjects,
  });
};