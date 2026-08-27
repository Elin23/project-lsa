import {
  useMutation,
} from "@tanstack/react-query";

import {
  createJobRequest,
  type CreateJobRequestPayload,
} from "../../services/jobRequestsApi";

import {
  SUBMISSION_MUTATION_CONFIG,
} from "../../config/submissionMutationConfig";

export const useCreateJobRequest =
  () => {
    return useMutation({
      mutationFn: (
        payload: CreateJobRequestPayload,
      ) =>
        createJobRequest(
          payload,
        ),

      ...SUBMISSION_MUTATION_CONFIG,
    });
  };