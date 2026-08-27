export type SubmissionNoticeType =
  | "offline"
  | "interrupted"
  | "error"
  | "success";

export interface SubmissionNoticeState {
  type: SubmissionNoticeType;
  title: string;
  message: string;
}

export interface SubmissionNetworkState {
  isOnline: boolean;
  notice: SubmissionNoticeState | null;
}