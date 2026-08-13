import apiClient from "../lib/apiClient";
import type { TeamMember, TeamMembersResponse } from "../Types/team";


export const getTeamMembers =
    async (): Promise<TeamMember[]> => {
        const response =
            await apiClient.get<TeamMembersResponse>(
                "/team-members/public",
            );

        return response.data.data;
    };