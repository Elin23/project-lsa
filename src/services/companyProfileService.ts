import apiClient from "../lib/apiClient";

interface CompanyProfileUnavailableResponse {
  success: false;
  message: string;
}

export const downloadCompanyProfile = async (): Promise<Blob> => {
  try {
    const response = await apiClient.get(
      "/company-profile/download",
      {
        responseType: "blob",
      },
    );

    return response.data;
  } catch (error) {
    if (
      error &&
      typeof error === "object" &&
      "response" in error
    ) {
      const axiosError = error as {
        response?: {
          data?: Blob;
        };
      };

      const errorBlob =
        axiosError.response?.data;

      if (errorBlob instanceof Blob) {
        try {
          const text =
            await errorBlob.text();

          const parsed =
            JSON.parse(
              text,
            ) as CompanyProfileUnavailableResponse;

          throw new Error(
            parsed.message ||
              "Company profile is not available.",
          );
        } catch (parseError) {
          if (
            parseError instanceof Error &&
            parseError.message !==
              "Unexpected end of JSON input"
          ) {
            throw parseError;
          }
        }
      }
    }

    throw new Error(
      "Unable to download the company profile right now.",
    );
  }
};