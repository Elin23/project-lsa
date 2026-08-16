import {
  AlertTriangle,
  Inbox,
  RefreshCw,
  Sparkles,
} from "lucide-react";

type SectionStateVariant =
  | "error"
  | "empty";

interface SectionStateProps {
  variant: SectionStateVariant;

  title: string;
  message: string;

  onRetry?: () => void;
  isRetrying?: boolean;

  compact?: boolean;
}

export default function SectionState({
  variant,
  title,
  message,
  onRetry,
  isRetrying = false,
  compact = false,
}: SectionStateProps) {
  const isError =
    variant === "error";

  return (
    <div
      role={
        isError
          ? "alert"
          : "status"
      }
      className={`
        group
        relative
        isolate
        flex
        w-full
        items-center
        justify-center
        overflow-hidden
        rounded-2xl
        border
        border-slate-200/80
        bg-white
        shadow-[0_8px_30px_rgba(15,35,70,0.045)]
        transition-all
        duration-300
        ease-out
        hover:border-blue-01/15
        hover:shadow-[0_14px_40px_rgba(15,35,70,0.07)]
        ${
          compact
            ? "min-h-40 px-5 py-8"
            : "min-h-60 px-6 py-12"
        }
      `}
    >
      {/* Soft Background Glow */}
      <div
        aria-hidden="true"
        className={`
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          -z-10
          h-52
          w-52
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          blur-3xl
          transition-opacity
          duration-500
          ${
            isError
              ? "bg-red-01/5"
              : "bg-blue-01/6"
          }
        `}
      />

      {/* Decorative Accent */}
      <div
        aria-hidden="true"
        className={`
          absolute
          left-0
          top-1/2
          h-16
          w-0.75
          -translate-y-1/2
          rounded-r-full
          ${
            isError
              ? "bg-red-01/65"
              : "bg-blue-01/45"
          }
        `}
      />

      <div
        className="
          flex
          max-w-xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Icon Area */}
        <div className="relative">
          <div
            aria-hidden="true"
            className={`
              absolute
              inset-0
              scale-150
              rounded-full
              blur-xl
              ${
                isError
                  ? "bg-red-01/5"
                  : "bg-blue-01/7"
              }
            `}
          />

          <div
            className={`
              relative
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-2xl
              border
              shadow-sm
              ${
                isError
                  ? "border-red-01/10 bg-red-01/5 text-red-01"
                  : "border-blue-01/10 bg-blue-01/5 text-blue-01"
              }
            `}
          >
            {isError ? (
              <AlertTriangle
                size={23}
                strokeWidth={2}
              />
            ) : (
              <Inbox
                size={23}
                strokeWidth={2}
              />
            )}
          </div>

          {!isError && (
            <div
              aria-hidden="true"
              className="
                absolute
                -right-2
                -top-2
                flex
                h-6
                w-6
                items-center
                justify-center
                rounded-full
                border
                border-white
                bg-white
                text-blue-01
                shadow-sm
              "
            >
              <Sparkles
                size={12}
                strokeWidth={2}
              />
            </div>
          )}
        </div>

        {/* Title */}
        <h3
          className="
            mt-5
            text-lg
            font-extrabold
            tracking-tight
            text-blue-01
            md:text-xl
          "
        >
          {title}
        </h3>

        {/* Message */}
        <p
          className="
            mt-2.5
            max-w-lg
            text-sm
            leading-6.5
            text-muted-blue
            md:text-[15px]
          "
        >
          {message}
        </p>

        {/* Retry Button */}
        {isError &&
          onRetry && (
            <button
              type="button"
              onClick={
                onRetry
              }
              disabled={
                isRetrying
              }
              className="
                group/button
                mt-6
                inline-flex
                min-h-10
                cursor-pointer
                items-center
                justify-center
                gap-2
                rounded-lg
                border
                border-blue-01/15
                bg-blue-01
                px-5
                py-2.5
                text-sm
                font-semibold
                text-white
                shadow-[0_6px_18px_rgba(31,63,147,0.12)]
                transition-all
                duration-300
                ease-out
                hover:-translate-y-0.5
                hover:border-red-01
                hover:bg-red-01
                hover:shadow-[0_10px_24px_rgba(200,16,46,0.14)]
                disabled:cursor-not-allowed
                disabled:opacity-60
                disabled:hover:translate-y-0
              "
            >
              <RefreshCw
                size={15}
                strokeWidth={2.2}
                className={`
                  transition-transform
                  duration-300
                  group-hover/button:rotate-45
                  ${
                    isRetrying
                      ? "animate-spin"
                      : ""
                  }
                `}
              />

              {isRetrying
                ? "Trying again..."
                : "Try Again"}
            </button>
          )}
      </div>
    </div>
  );
}