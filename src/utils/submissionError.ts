import axios from "axios";

export type SubmissionErrorKind =
  | "network"
  | "timeout"
  | "server"
  | "validation"
  | "unknown";

export interface ParsedSubmissionError {
  kind: SubmissionErrorKind;
  message: string;
  status?: number;
}

// ======================================================
// Detect Network Error
// ======================================================

export const isNetworkError = (
  error: unknown,
): boolean => {
  if (
    !axios.isAxiosError(error)
  ) {
    return false;
  }

  /*
   * Axios usually has no response when the request
   * could not receive an HTTP response from the server.
   */
  return (
    error.code ===
      "ERR_NETWORK" ||
    !error.response
  );
};

// ======================================================
// Parse Submission Error
// ======================================================

export const parseSubmissionError = (
  error: unknown,
): ParsedSubmissionError => {
  if (
    !axios.isAxiosError(error)
  ) {
    return {
      kind: "unknown",
      message:
        "Something went wrong while submitting your request. Please try again.",
    };
  }

  // ====================================================
  // Timeout
  // ====================================================

  if (
    error.code ===
      "ECONNABORTED" ||
    error.code ===
      "ETIMEDOUT"
  ) {
    return {
      kind: "timeout",
      message:
        "The request took too long to complete. We couldn't confirm whether it was received.",
    };
  }

  // ====================================================
  // Network Failure
  // ====================================================

  if (
    error.code ===
      "ERR_NETWORK" ||
    !error.response
  ) {
    return {
      kind: "network",
      message:
        "The connection was interrupted. We couldn't confirm whether your request was received.",
    };
  }

  const status =
    error.response.status;

  // ====================================================
  // Validation
  // ====================================================

  if (
    status === 400 ||
    status === 422
  ) {
    return {
      kind: "validation",
      status,
      message:
        getSafeBackendMessage(
          error.response.data,
        ) ||
        "Some of the submitted information is invalid. Please review the form and try again.",
    };
  }

  // ====================================================
  // Rate Limit
  // ====================================================

  if (status === 429) {
    return {
      kind: "server",
      status,
      message:
        "Too many requests were submitted in a short period. Please wait a moment and try again.",
    };
  }

  // ====================================================
  // Server Error
  // ====================================================

  if (status >= 500) {
    return {
      kind: "server",
      status,
      message:
        "The server encountered a problem while processing your request. Please try again later.",
    };
  }

  return {
    kind: "server",
    status,
    message:
      getSafeBackendMessage(
        error.response.data,
      ) ||
      "We couldn't complete your request. Please try again.",
  };
};

// ======================================================
// Safe Backend Message
// ======================================================

const getSafeBackendMessage = (
  data: unknown,
): string | null => {
  if (
    !data ||
    typeof data !==
      "object"
  ) {
    return null;
  }

  const responseData =
    data as {
      message?: unknown;
      errors?: Array<{
        message?: unknown;
      }>;
    };

  const validationMessage =
    responseData.errors?.[0]
      ?.message;

  if (
    typeof validationMessage ===
      "string" &&
    !isTechnicalMessage(
      validationMessage,
    )
  ) {
    return validationMessage;
  }

  if (
    typeof responseData.message ===
      "string" &&
    !isTechnicalMessage(
      responseData.message,
    )
  ) {
    return responseData.message;
  }

  return null;
};

// ======================================================
// Prevent Internal Backend Errors From Reaching Users
// ======================================================

const isTechnicalMessage = (
  message: string,
): boolean => {
  const value =
    message.toLowerCase();

  return (
    value.includes(
      "route /api",
    ) ||
    value.includes(
      "stack trace",
    ) ||
    value.includes(
      "internal server error",
    ) ||
    value.includes(
      "cannot read properties",
    ) ||
    value.includes(
      "mongoose",
    ) ||
    value.includes(
      "mongodb",
    )
  );
};