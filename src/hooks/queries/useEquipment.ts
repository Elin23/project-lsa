import {
  useQuery,
} from "@tanstack/react-query";

import {
  getPublicEquipment,
  getPublicEquipmentBySlug,
  getPublicEquipmentCategories,
} from "../../services/equipmentService";

export const usePublicEquipment =
  () => {
    return useQuery({
      queryKey: [
        "equipment",
        "public",
      ],
      queryFn:
        getPublicEquipment,
    });
  };

export const usePublicEquipmentCategories =
  () => {
    return useQuery({
      queryKey: [
        "equipment",
        "categories",
        "public",
      ],
      queryFn:
        getPublicEquipmentCategories,
    });
  };

export const usePublicEquipmentBySlug =
  (
    slug?: string,
  ) => {
    return useQuery({
      queryKey: [
        "equipment",
        "public",
        slug,
      ],
      queryFn: () =>
        getPublicEquipmentBySlug(
          slug as string,
        ),
      enabled:
        Boolean(slug),
    });
  };