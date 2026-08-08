import apiClient from "../lib/apiClient";

export interface JourneyItem {
  _id: string;
  period: string;
  title: string;
  description: string;
  badge?: string;
  icon: string;
  side: "left" | "right";

  image?: {
    url: string;
    publicId?: string;
  };

  order?: number;
}

interface JourneyResponse {
  success: boolean;
  data: JourneyItem[];
}

export const getJourneyItems = async (): Promise<JourneyItem[]> => {
  const response =
    await apiClient.get<JourneyResponse>("/journeys/public");

  return response.data.data;
};