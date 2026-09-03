import apiClient from "../lib/apiClient";

// ======================================================
// Types
// ======================================================

export interface CreateJobRequestPayload {
  clientRequestId: string;

  job: string;

  firstName: string;
  lastName: string;

  email: string;
  phone: string;

  cv: File;
}

export interface JobRequestResponse {
  success: boolean;
  message: string;
  data?: unknown;
}

// ======================================================
// Create Job Request
// ======================================================

export const createJobRequest =
  async (
    payload: CreateJobRequestPayload,
  ): Promise<JobRequestResponse> => {
    const formData =
      new FormData();

    formData.append(
      "clientRequestId",
      payload.clientRequestId,
    );

    formData.append(
      "job",
      payload.job,
    );

    formData.append(
      "firstName",
      payload.firstName,
    );

    formData.append(
      "lastName",
      payload.lastName,
    );

    formData.append(
      "email",
      payload.email,
    );

    formData.append(
      "phone",
      payload.phone,
    );

    formData.append(
      "cv",
      payload.cv,
    );

    const response =
      await apiClient.post<JobRequestResponse>(
        "/job-requests",
        formData,
      );

    /*
     * Do not manually set Content-Type here.
     *
     * Axios/browser must generate the correct multipart
     * boundary automatically for FormData requests.
     */

    return response.data;
  };