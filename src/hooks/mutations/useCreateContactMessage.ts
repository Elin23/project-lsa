import {
  useMutation,
} from "@tanstack/react-query";

import {
  createContactMessage,
  type CreateContactMessagePayload,
} from "../../services/contactMessagesApi";

import {
  SUBMISSION_MUTATION_CONFIG,
} from "../../config/submissionMutationConfig";

export const useCreateContactMessage =
  () => {
    return useMutation({
      mutationFn: (
        payload: CreateContactMessagePayload,
      ) =>
        createContactMessage(
          payload,
        ),

      ...SUBMISSION_MUTATION_CONFIG,
    });
  };