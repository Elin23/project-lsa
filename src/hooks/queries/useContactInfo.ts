import { useQuery } from "@tanstack/react-query";
import { getContactInfo } from "../../services/contactService";

export const useContactInfo = () => {
    return useQuery({
        queryKey: ["contact-info"],
        queryFn: getContactInfo,
    });
};