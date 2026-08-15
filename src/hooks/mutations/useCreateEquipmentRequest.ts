import {
  useMutation,
} from "@tanstack/react-query";

import {
  createEquipmentRequest,
  type CreateEquipmentRequestPayload,
} from "../../services/equipmentRequestService";

export const useCreateEquipmentRequest =
  () => {
    return useMutation({
      mutationFn: (
        payload: CreateEquipmentRequestPayload,
      ) =>
        createEquipmentRequest(
          payload,
        ),
    });
  };