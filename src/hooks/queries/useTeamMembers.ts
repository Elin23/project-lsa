import { useQuery } from "@tanstack/react-query";

import { getTeamMembers } from "../../services/teamService";

export const useTeamMembers = () => {
    return useQuery({
        queryKey: ["team-members"],
        queryFn: getTeamMembers,
    });
};