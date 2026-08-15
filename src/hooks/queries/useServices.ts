import { useQuery } from "@tanstack/react-query";

import {
  getPublicServiceBySlug,
  getPublicServices,
} from "../../services/serviceService";

export const usePublicServices = () => {
  return useQuery({
    queryKey: ["services", "public"],
    queryFn: getPublicServices,
  });
};

export const usePublicServiceBySlug = (
  slug?: string,
) => {
  return useQuery({
    queryKey: [
      "services",
      "public",
      slug,
    ],
    queryFn: () =>
      getPublicServiceBySlug(
        slug as string,
      ),
    enabled: Boolean(slug),
  });
};