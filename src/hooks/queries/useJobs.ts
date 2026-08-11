import { useQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/jobsApi";

export const useJobs = () => {
    return useQuery({
        queryKey: ["jobs"],
        queryFn: getJobs,
    });
};