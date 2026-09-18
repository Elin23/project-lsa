import axios from "axios";

import apiClient from "../lib/apiClient";

interface CompanyProfileUnavailableResponse {
  success: false;
  message: string;
}

export const downloadCompanyProfile =
  async (): Promise<Blob> => {
    try {
      const response = await apiClient.get(
        "/company-profile/download",
        {
          responseType: "blob",
          timeout: 60000,
        },
      );

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorBlob = error.response?.data;

        if (errorBlob instanceof Blob) {
          try {
            const text = await errorBlob.text();

            if (text) {
              const parsed =
                JSON.parse(
                  text,
                ) as CompanyProfileUnavailableResponse;

              throw new Error(
                parsed.message ||
                  "Company profile is not available.",
              );
            }
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

        if (error.code === "ECONNABORTED") {
          throw new Error(
            "Company profile download timed out.",
          );
        }

        if (error.code === "ERR_NETWORK") {
          throw new Error(
            "Network error while downloading company profile.",
          );
        }
      }

      throw new Error(
        "Unable to download the company profile right now.",
      );
    }
  };