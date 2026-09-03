import {
  useMutation,
} from "@tanstack/react-query";

import {
  createEquipmentRequest,
  type CreateEquipmentRequestPayload,
} from "../../services/equipmentRequestService";

import {
  SUBMISSION_MUTATION_CONFIG,
} from "../../config/submissionMutationConfig";

export const useCreateEquipmentRequest =
  () => {
    return useMutation({
      mutationFn: (
        payload: CreateEquipmentRequestPayload,
      ) =>
        createEquipmentRequest(
          payload,
        ),

      ...SUBMISSION_MUTATION_CONFIG,
    });
  };