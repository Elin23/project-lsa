import { useQuery } from "@tanstack/react-query";

import { getPublicPartners } from "../../services/partnerService";

export const usePublicPartners = () => {
  return useQuery({
    queryKey: ["partners", "public"],
    queryFn: getPublicPartners,
  });
};