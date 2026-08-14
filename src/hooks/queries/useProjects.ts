import { useQuery } from "@tanstack/react-query";
import { getPublicProjectBySlug, getPublicProjects } from "../../services/projectService";

export const usePublicProjects = () => {
    return useQuery({
        queryKey: ["projects"],
        queryFn: getPublicProjects,
    });
};

export const usePublicProjectBySlug = (slug: string) => {
    return useQuery({
        queryKey: ["project", slug],
        queryFn: () => getPublicProjectBySlug(slug),
        enabled: Boolean(slug), 
    });
};