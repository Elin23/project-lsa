import {
  useCallback,
  useRef,
  useState,
} from "react";

import useOnlineStatus from "./useOnlineStatus";

import {
  isNetworkError,
  parseSubmissionError,
} from "../utils/submissionError";

import type {
  SubmissionNoticeState,
} from "../Types/submission";

// ======================================================
// Submission Network Hook
// ======================================================

export default function useSubmissionNetwork() {
  const isOnline =
    useOnlineStatus();

  const [
    notice,
    setNotice,
  ] =
    useState<SubmissionNoticeState | null>(
      null,
    );

  const [
    isSubmissionUncertain,
    setIsSubmissionUncertain,
  ] = useState(false);

  /*
   * Tracks whether a request is currently in-flight.
   */
  const requestStartedRef =
    useRef(false);

  /*
   * The same ID is reused when an interrupted submission
   * is retried.
   *
   * The backend must enforce uniqueness for this ID.
   */
  const requestIdRef =
    useRef<string | null>(
      null,
    );

  // ====================================================
  // Request ID
  // ====================================================

  const getOrCreateRequestId =
    useCallback(() => {
      if (
        requestIdRef.current
      ) {
        return requestIdRef.current;
      }

      const requestId =
        crypto.randomUUID();

      requestIdRef.current =
        requestId;

      return requestId;
    }, []);

  // ====================================================
  // Notice
  // ====================================================

  const clearNotice =
    useCallback(() => {
      setNotice(null);
    }, []);

  // ====================================================
  // Check Before Submission
  // ====================================================

  const canSubmit =
    useCallback(() => {
      if (!isOnline) {
        setNotice({
          type: "offline",
          title:
            "No internet connection",
          message:
            "You're currently offline. Reconnect to the internet before submitting this form.",
        });

        return false;
      }

      return true;
    }, [isOnline]);

  // ====================================================
  // Submission Started
  // ====================================================

  const markSubmissionStarted =
    useCallback(() => {
      requestStartedRef.current =
        true;

      clearNotice();
    }, [clearNotice]);

  // ====================================================
  // Submission Success
  // ====================================================

  const markSubmissionSuccess =
    useCallback(
      (
        message =
          "Your request has been submitted successfully.",
      ) => {
        requestStartedRef.current =
          false;

        requestIdRef.current =
          null;

        setIsSubmissionUncertain(
          false,
        );

        setNotice({
          type: "success",
          title:
            "Request submitted",
          message,
        });
      },
      [],
    );

  // ====================================================
  // Submission Error
  // ====================================================

  const handleSubmissionError =
    useCallback(
      (error: unknown) => {
        const parsedError =
          parseSubmissionError(
            error,
          );

        const requestWasStarted =
          requestStartedRef.current;

        requestStartedRef.current =
          false;

        const connectionInterrupted =
          requestWasStarted &&
          (
            isNetworkError(
              error,
            ) ||
            parsedError.kind ===
              "timeout"
          );

        if (
          connectionInterrupted
        ) {
          /*
           * Keep requestIdRef intact.
           *
           * A later retry must use the same clientRequestId
           * so the backend can recognize the request and
           * avoid creating a duplicate.
           */
          setIsSubmissionUncertain(
            true,
          );

          setNotice({
            type: "interrupted",
            title:
              "Connection interrupted",
            message:
              "We couldn't confirm whether your request was received. It may already be in our system. Once your connection is restored, you can safely retry this submission.",
          });

          return;
        }

        /*
         * Keep the same request ID even after an HTTP error.
         * If the user retries the same form submission, the
         * backend remains responsible for idempotency.
         */
        setIsSubmissionUncertain(
          false,
        );

        setNotice({
          type: "error",
          title:
            "Submission failed",
          message:
            parsedError.message,
        });
      },
      [],
    );

  // ====================================================
  // Reset
  // ====================================================

  const resetSubmissionState =
    useCallback(() => {
      requestStartedRef.current =
        false;

      requestIdRef.current =
        null;

      setIsSubmissionUncertain(
        false,
      );

      clearNotice();
    }, [clearNotice]);

  return {
    isOnline,

    notice,

    isSubmissionUncertain,

    canSubmit,

    clearNotice,

    getOrCreateRequestId,

    markSubmissionStarted,

    markSubmissionSuccess,

    handleSubmissionError,

    resetSubmissionState,
  };
}