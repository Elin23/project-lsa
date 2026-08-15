import {
  useQuery,
} from "@tanstack/react-query";

import {
  getPublicHomeCapabilities,
  getPublicServiceBySlug,
  getPublicServices,
} from "../../services/serviceService";

// ======================================================
// Public Services
// ======================================================

export const usePublicServices = () => {
  return useQuery({
    queryKey: [
      "services",
      "public",
    ],
    queryFn:
      getPublicServices,
  });
};

// ======================================================
// Public Service Details
// ======================================================

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

    enabled:
      Boolean(slug),
  });
};

// ======================================================
// Home Capabilities
// ======================================================

export const usePublicHomeCapabilities =
  () => {
    return useQuery({
      queryKey: [
        "services",
        "home-capabilities",
        "public",
      ],

      queryFn:
        getPublicHomeCapabilities,
    });
  };