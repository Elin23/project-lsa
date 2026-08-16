import { useQuery } from "@tanstack/react-query";
import { getJourneyItems } from "../../services/journeyApi";

export const useJourney = () => {
  return useQuery({
    queryKey: ["journeysع"],
    queryFn: getJourneyItems,
  });
};