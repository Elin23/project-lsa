export const SUBMISSION_MUTATION_CONFIG = {
  /*
   * Form submissions must never retry automatically.
   *
   * The backend may have already processed the request
   * even when the client did not receive the response.
   */
  retry: false,

  /*
   * Do not pause mutations while offline and resume them
   * automatically after the connection returns.
   *
   * Offline behavior is handled explicitly by the form.
   */
  networkMode: "always" as const,
};