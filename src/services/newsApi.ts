// src/services/newsApi.ts

import apiClient from "../lib/apiClient";

export interface NewsImage {
    url: string;
    alt: string;
    publicId?: string;
}

export interface NewsItem {
    _id: string;
    category: string;
    title: string;
    shortDescription: string;
    content?: string;
    publishedAt: string;
    image: NewsImage;
    isFeatured?: boolean;
    displayOrder?: number;
}

interface PublicNewsResponse {
    success: boolean;
    count: number;
    data: NewsItem[];
}

interface PublicNewsByIdResponse {
    success: boolean;
    data: NewsItem;
}

export const getPublicNews = async (
    limit = 3,
): Promise<NewsItem[]> => {
    const response = await apiClient.get<PublicNewsResponse>(
        "/news/public",
        {
            params: { limit },
        },
    );

    return response.data.data;
};

export const getPublicNewsById = async (
    id: string,
): Promise<NewsItem> => {
    const response = await apiClient.get<PublicNewsByIdResponse>(
        `/news/public/${id}`,
    );

    return response.data.data;
};