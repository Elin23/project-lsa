import { useMutation } from "@tanstack/react-query";
import {
    createContactMessage,
    type CreateContactMessagePayload,
} from "../../services/contactMessagesApi";

export const useCreateContactMessage = () => {
    return useMutation({
        mutationFn: (payload: CreateContactMessagePayload) =>
            createContactMessage(payload),
    });
};