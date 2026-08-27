import {
  AlertCircle,
  CheckCircle2,
  CloudOff,
  TriangleAlert,
  X,
} from "lucide-react";

import type {
  LucideIcon,
} from "lucide-react";

import type {
  SubmissionNoticeState,
  SubmissionNoticeType,
} from "../../Types/submission"

// ======================================================
// Props
// ======================================================

interface SubmissionNoticeProps {
  notice:
    | SubmissionNoticeState
    | null;

  onDismiss?: () => void;

  compact?: boolean;
}

// ======================================================
// Appearance
// ======================================================

interface NoticeAppearance {
  icon: LucideIcon;
  containerClassName: string;
  iconContainerClassName: string;
  titleClassName: string;
  messageClassName: string;
}

const getAppearance = (
  type: SubmissionNoticeType,
): NoticeAppearance => {
  switch (type) {
    case "success":
      return {
        icon:
          CheckCircle2,

        containerClassName:
          "border-emerald-200 bg-emerald-50/80",

        iconContainerClassName:
          "bg-emerald-100 text-emerald-700",

        titleClassName:
          "text-emerald-800",

        messageClassName:
          "text-emerald-700",
      };

    case "offline":
      return {
        icon:
          CloudOff,

        containerClassName:
          "border-amber-200 bg-amber-50/85",

        iconContainerClassName:
          "bg-amber-100 text-amber-700",

        titleClassName:
          "text-amber-900",

        messageClassName:
          "text-amber-800",
      };

    case "interrupted":
      return {
        icon:
          TriangleAlert,

        containerClassName:
          "border-orange-200 bg-orange-50/85",

        iconContainerClassName:
          "bg-orange-100 text-orange-700",

        titleClassName:
          "text-orange-900",

        messageClassName:
          "text-orange-800",
      };

    case "error":
    default:
      return {
        icon:
          AlertCircle,

        containerClassName:
          "border-red-200 bg-red-50/85",

        iconContainerClassName:
          "bg-red-100 text-red-700",

        titleClassName:
          "text-red-800",

        messageClassName:
          "text-red-700",
      };
  }
};

// ======================================================
// Component
// ======================================================

export default function SubmissionNotice({
  notice,
  onDismiss,
  compact = false,
}: SubmissionNoticeProps) {
  if (!notice) {
    return null;
  }

  const appearance =
    getAppearance(
      notice.type,
    );

  const Icon =
    appearance.icon;

  return (
    <div
      role={
        notice.type ===
        "success"
          ? "status"
          : "alert"
      }
      aria-live="polite"
      className={`
        relative
        flex
        w-full
        items-start
        gap-3
        rounded-xl
        border
        backdrop-blur-sm
        ${appearance.containerClassName}
        ${
          compact
            ? "p-3.5"
            : "p-4"
        }
      `}
    >
      {/* Icon */}
      <div
        className={`
          flex
          shrink-0
          items-center
          justify-center
          rounded-full
          ${
            compact
              ? "h-8 w-8"
              : "h-9 w-9"
          }
          ${appearance.iconContainerClassName}
        `}
      >
        <Icon
          size={
            compact
              ? 16
              : 18
          }
          strokeWidth={2.2}
        />
      </div>

      {/* Content */}
      <div className="min-w-0 flex-1">
        <h3
          className={`
            font-bold
            ${
              compact
                ? "text-sm"
                : "text-[15px]"
            }
            ${appearance.titleClassName}
          `}
        >
          {notice.title}
        </h3>

        <p
          className={`
            mt-1
            text-sm
            leading-6
            ${appearance.messageClassName}
          `}
        >
          {notice.message}
        </p>
      </div>

      {/* Dismiss */}
      {onDismiss && (
        <button
          type="button"
          onClick={
            onDismiss
          }
          aria-label="Dismiss notification"
          className="
            flex
            h-8
            w-8
            shrink-0
            cursor-pointer
            items-center
            justify-center
            rounded-full
            text-current
            opacity-50
            transition
            hover:bg-black/5
            hover:opacity-100
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-current/20
          "
        >
          <X
            size={16}
          />
        </button>
      )}
    </div>
  );
}