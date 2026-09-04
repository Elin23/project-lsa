// src/hooks/queries/useNews.ts

import { useQuery } from "@tanstack/react-query";

import { getPublicNews } from "../../services/newsApi";

export const useNews = () => {
    return useQuery({
        queryKey: ["news", "public"],
        queryFn: () => getPublicNews(20),
    });
};