import { useMutation } from "@tanstack/react-query";
import {
    createJobRequest,
    type CreateJobRequestPayload,
} from "../../services/jobRequestsApi";

export const useCreateJobRequest = () => {
    return useMutation({
        mutationFn: (
            payload: CreateJobRequestPayload,
        ) => createJobRequest(payload),
    });
};