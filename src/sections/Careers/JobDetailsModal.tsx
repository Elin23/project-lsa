import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarClock,
  CheckCircle,
  Clock,
  LoaderCircle,
  MapPin,
  RefreshCw,
  Upload,
  X,
} from "lucide-react";

import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import type {
  Job,
} from "../../services/jobsApi";

import {
  useCreateJobRequest,
} from "../../hooks/mutations/useCreateJobRequest";

import useSubmissionNetwork from "../../hooks/useSubmissionNetwork";

import SubmissionNotice from "../../components/feedback/SubmissionNotice";

// ======================================================
// Props
// ======================================================

interface JobDetailsModalProps {
  job: Job | null;
  onClose: () => void;
}

// ======================================================
// Form Errors
// ======================================================

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  cv?: string;
}

// ======================================================
// Form Input Props
// ======================================================

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  placeholder?: string;
  type?: "text" | "email" | "tel";
  error?: string;
  disabled?: boolean;
  autoComplete?: string;
  onChange: (
    value: string,
  ) => void;
}

// ======================================================
// Validation Constants
// ======================================================

const EMAIL_PATTERN =
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE_PATTERN =
  /^[+]?[\d\s\-().]{7,20}$/;

const ALLOWED_CV_TYPES = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const MAX_CV_SIZE =
  10 * 1024 * 1024;

// ======================================================
// Component
// ======================================================

export default function JobDetailsModal({
  job,
  onClose,
}: JobDetailsModalProps) {
  const [
    step,
    setStep,
  ] =
    useState<1 | 2>(1);

  const [
    firstName,
    setFirstName,
  ] = useState("");

  const [
    lastName,
    setLastName,
  ] = useState("");

  const [
    email,
    setEmail,
  ] = useState("");

  const [
    phone,
    setPhone,
  ] = useState("");

  const [
    cv,
    setCv,
  ] =
    useState<File | null>(
      null,
    );

  const [
    formErrors,
    setFormErrors,
  ] =
    useState<FormErrors>(
      {},
    );

  const [
    submissionCompleted,
    setSubmissionCompleted,
  ] = useState(false);

  const fileInputRef =
    useRef<HTMLInputElement | null>(
      null,
    );

  // ====================================================
  // Shared Submission State
  // ====================================================

  const {
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
  } =
    useSubmissionNetwork();

  // ====================================================
  // React Query Mutation
  // ====================================================

  const {
    mutateAsync:
      createJobRequest,
    isPending,
    reset:
      resetMutation,
  } =
    useCreateJobRequest();

  // ====================================================
  // Reset
  // ====================================================

  const resetForm = () => {
    setStep(1);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");

    setCv(null);

    setFormErrors({});

    setSubmissionCompleted(
      false,
    );

    if (
      fileInputRef.current
    ) {
      fileInputRef.current.value =
        "";
    }

    resetMutation();

    resetSubmissionState();
  };

  // ====================================================
  // Close
  // ====================================================

  const handleClose = () => {
    if (isPending) {
      return;
    }

    /*
     * Preserve the current clientRequestId while the
     * submission status is uncertain so a later retry
     * can safely reuse the same request identity.
     */
    if (
      isSubmissionUncertain
    ) {
      return;
    }

    resetForm();

    onClose();
  };

  // ====================================================
  // Close With Escape
  // ====================================================

  useEffect(() => {
    const handleKeyDown = (
      event: KeyboardEvent,
    ) => {
      if (
        event.key ===
          "Escape" &&
        !isPending &&
        !isSubmissionUncertain
      ) {
        handleClose();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown,
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );
    };
  }, [
    isPending,
    isSubmissionUncertain,
  ]);

  // ====================================================
  // Guard
  // ====================================================

  if (!job) {
    return null;
  }

  // ====================================================
  // Job State
  // ====================================================

  const isOpen =
    job.status ===
      "published" &&
    new Date(
      job.deadline,
    ) >= new Date();

  const formattedDeadline =
    new Date(
      job.deadline,
    ).toLocaleDateString(
      "en-US",
      {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    );

  // ====================================================
  // Validation
  // ====================================================

  const validateForm =
    (): FormErrors => {
      const errors: FormErrors =
        {};

      const trimmedFirstName =
        firstName.trim();

      const trimmedLastName =
        lastName.trim();

      const trimmedEmail =
        email.trim();

      const trimmedPhone =
        phone.trim();

      if (
        !trimmedFirstName
      ) {
        errors.firstName =
          "First name is required.";
      } else if (
        trimmedFirstName.length <
        2
      ) {
        errors.firstName =
          "First name must contain at least 2 characters.";
      }

      if (
        !trimmedLastName
      ) {
        errors.lastName =
          "Last name is required.";
      } else if (
        trimmedLastName.length <
        2
      ) {
        errors.lastName =
          "Last name must contain at least 2 characters.";
      }

      if (!trimmedEmail) {
        errors.email =
          "Email address is required.";
      } else if (
        !EMAIL_PATTERN.test(
          trimmedEmail,
        )
      ) {
        errors.email =
          "Please enter a valid email address.";
      }

      if (!trimmedPhone) {
        errors.phone =
          "Phone number is required.";
      } else if (
        !PHONE_PATTERN.test(
          trimmedPhone,
        )
      ) {
        errors.phone =
          "Please enter a valid phone number.";
      }

      if (!cv) {
        errors.cv =
          "CV file is required.";
      }

      return errors;
    };

  // ====================================================
  // File Change
  // ====================================================

  const handleFileChange = (
    event:
      ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      event.target.files?.[0];

    if (
      notice &&
      notice.type !==
        "interrupted"
    ) {
      clearNotice();
    }

    if (!file) {
      setCv(null);

      setFormErrors(
        (previous) => ({
          ...previous,
          cv:
            "CV file is required.",
        }),
      );

      return;
    }

    if (
      !ALLOWED_CV_TYPES.includes(
        file.type,
      )
    ) {
      setCv(null);

      setFormErrors(
        (previous) => ({
          ...previous,
          cv:
            "Only PDF, DOC, and DOCX files are allowed.",
        }),
      );

      event.target.value =
        "";

      return;
    }

    if (
      file.size >
      MAX_CV_SIZE
    ) {
      setCv(null);

      setFormErrors(
        (previous) => ({
          ...previous,
          cv:
            "CV file size cannot exceed 10 MB.",
        }),
      );

      event.target.value =
        "";

      return;
    }

    setCv(file);

    setFormErrors(
      (previous) => ({
        ...previous,
        cv: undefined,
      }),
    );
  };

  // ====================================================
  // Submit
  // ====================================================

  const handleSubmit =
    async (
      event:
        FormEvent<HTMLFormElement>,
    ) => {
      event.preventDefault();

      const validationErrors =
        validateForm();

      setFormErrors(
        validationErrors,
      );

      if (
        Object.keys(
          validationErrors,
        ).length > 0
      ) {
        return;
      }

      if (!canSubmit()) {
        return;
      }

      if (!cv) {
        return;
      }

      /*
       * The same ID is reused if the previous request
       * reached the backend but its response was lost.
       */
      const clientRequestId =
        getOrCreateRequestId();

      try {
        markSubmissionStarted();

        const response =
          await createJobRequest(
            {
              clientRequestId,

              job:
                job._id,

              firstName:
                firstName.trim(),

              lastName:
                lastName.trim(),

              email:
                email.trim(),

              phone:
                phone.trim(),

              cv,
            },
          );

        markSubmissionSuccess(
          response.message ||
            "Your job application has been submitted successfully.",
        );

        setSubmissionCompleted(
          true,
        );

        setFormErrors({});
      } catch (
        error: unknown
      ) {
        handleSubmissionError(
          error,
        );
      }
    };

  // ====================================================
  // Submitted
  // ====================================================

  const isSubmitted =
    submissionCompleted &&
    notice?.type ===
      "success";

  // ====================================================
  // Render
  // ====================================================

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="job-details-title"
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        px-4
      "
    >
      <div
        className="
          relative
          max-h-[90vh]
          w-full
          max-w-4xl
          overflow-y-auto
          rounded-3xl
          bg-white
          shadow-2xl
        "
      >
        {/* Sticky Close Button */}
        <div className="sticky top-0 z-50 h-0 w-full">
          <button
            type="button"
            onClick={
              handleClose
            }
            disabled={
              isPending ||
              isSubmissionUncertain
            }
            aria-label="Close job details"
            className="
              absolute
              right-5
              top-5
              cursor-pointer
              rounded-full
              bg-slate-100
              p-2
              text-slate-500
              transition
              hover:bg-red-100
              hover:text-red-01
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* =================================================
            Header
        ================================================= */}

        <div className="border-b border-slate-100 p-6 md:p-8">
          <span
            className="
              mb-3
              inline-block
              rounded-full
              bg-blue-01/10
              px-3
              py-1
              text-xs
              font-bold
              uppercase
              text-blue-01
            "
          >
            {isSubmitted
              ? "Application Submitted"
              : step === 1
                ? "Job Details"
                : "Application Form"}
          </span>

          <h3
            id="job-details-title"
            className="
              pr-10
              text-2xl
              font-bold
              text-blue-01
              md:text-3xl
            "
          >
            {job.title}
          </h3>

          <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-blue-01" />

              {job.location}
            </span>

            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-blue-01" />

              {
                job.employmentType
              }
            </span>

            <span className="flex items-center gap-1.5">
              <Briefcase className="h-4 w-4 text-blue-01" />

              {job.department}
            </span>
          </div>

          {isOpen && (
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-amber-700">
              <CalendarClock className="h-4 w-4" />

              Applications close on{" "}
              {
                formattedDeadline
              }
            </div>
          )}

          {!isSubmitted && (
            <div className="mt-6 flex items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-blue-01" />

              <div
                className={`
                  h-2
                  flex-1
                  rounded-full
                  ${
                    step >= 2
                      ? "bg-blue-01"
                      : "bg-slate-200"
                  }
                `}
              />
            </div>
          )}
        </div>

        {/* =================================================
            Success
        ================================================= */}

        {isSubmitted && (
          <div className="p-6 md:p-8">
            <div
              className="
                flex
                flex-col
                items-center
                justify-center
                rounded-2xl
                bg-[#f7f8ff]
                px-6
                py-12
                text-center
              "
            >
              <div
                className="
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-blue-01/10
                "
              >
                <CheckCircle className="h-9 w-9 text-blue-01" />
              </div>

              <h4 className="text-2xl font-bold text-blue-01">
                Application Submitted Successfully
              </h4>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                {
                  notice.message
                }
              </p>

              <button
                type="button"
                onClick={() => {
                  resetForm();

                  onClose();
                }}
                className="
                  mt-8
                  h-12
                  cursor-pointer
                  rounded-xl
                  bg-blue-01
                  px-8
                  text-sm
                  font-bold
                  text-white
                  transition
                  hover:bg-red-01
                "
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* =================================================
            Step 1
        ================================================= */}

        {!isSubmitted &&
          step === 1 && (
            <div className="p-4 sm:p-6 md:p-8">
              <div className="mb-8 min-w-0 rounded-2xl bg-[#f7f8ff] p-4 sm:p-5">
                <h4 className="mb-3 text-xl font-bold text-blue-01">
                  About the Role
                </h4>

                <p className="min-w-0 break-words text-sm leading-7 text-slate-600">
                  {
                    job.description
                  }
                </p>
              </div>

              <div className="grid min-w-0 gap-6 md:grid-cols-2">
                {/* Responsibilities */}
                <div className="min-w-0">
                  <h4 className="mb-4 text-xl font-bold text-blue-01">
                    Responsibilities
                  </h4>

                  <div className="space-y-3">
                    {job.responsibilities.map(
                      (
                        item,
                        index,
                      ) => (
                        <div
                          key={`${job._id}-responsibility-${index}`}
                          className="flex min-w-0 gap-3"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-01" />

                          <p className="min-w-0 break-words text-sm leading-6 text-slate-600">
                            {
                              item
                            }
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Requirements */}
                <div className="min-w-0">
                  <h4 className="mb-4 text-xl font-bold text-blue-01">
                    Requirements
                  </h4>

                  <div className="space-y-3">
                    {job.requirements.map(
                      (
                        item,
                        index,
                      ) => (
                        <div
                          key={`${job._id}-requirement-${index}`}
                          className="flex min-w-0 gap-3"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-01" />

                          <p className="min-w-0 break-words text-sm leading-6 text-slate-600">
                            {
                              item
                            }
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-slate-100
                  pt-6
                  md:flex-row
                  md:justify-end
                "
              >
                <button
                  type="button"
                  onClick={
                    handleClose
                  }
                  className="
                    h-12
                    cursor-pointer
                    rounded-xl
                    border
                    border-slate-200
                    px-8
                    text-sm
                    font-bold
                    text-slate-600
                    transition
                    hover:bg-slate-100
                  "
                >
                  Cancel
                </button>

                <button
                  type="button"
                  disabled={
                    !isOpen
                  }
                  onClick={() => {
                    if (isOpen) {
                      setStep(2);
                    }
                  }}
                  className="
                    inline-flex
                    h-12
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    bg-blue-01
                    px-8
                    text-sm
                    font-bold
                    text-white
                    transition
                    hover:bg-red-01
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  {isOpen
                    ? "Next"
                    : "Applications Closed"}

                  {isOpen && (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
          )}

        {/* =================================================
            Step 2
        ================================================= */}

        {!isSubmitted &&
          step === 2 && (
            <form
              noValidate
              onSubmit={
                handleSubmit
              }
              className="p-6 md:p-8"
            >
              <p className="mb-6 text-sm leading-6 text-slate-500">
                Please fill in your information and upload your CV to apply for
                this position.
              </p>

              {/* Submission Notice */}
              {notice && (
                <div className="mb-6">
                  <SubmissionNotice
                    notice={
                      notice
                    }
                    onDismiss={
                      notice.type ===
                      "interrupted"
                        ? undefined
                        : clearNotice
                    }
                  />
                </div>
              )}

              <div className="grid gap-x-4 gap-y-5 md:grid-cols-2">
                {/* First Name */}
                <FormInput
                  id="firstName"
                  label="First Name"
                  value={
                    firstName
                  }
                  error={
                    formErrors.firstName
                  }
                  placeholder="Enter first name"
                  disabled={
                    isPending
                  }
                  autoComplete="given-name"
                  onChange={(
                    value,
                  ) => {
                    setFirstName(
                      value,
                    );

                    if (
                      notice &&
                      notice.type !==
                        "interrupted"
                    ) {
                      clearNotice();
                    }

                    if (
                      formErrors.firstName
                    ) {
                      setFormErrors(
                        (
                          previous,
                        ) => ({
                          ...previous,
                          firstName:
                            undefined,
                        }),
                      );
                    }
                  }}
                />

                {/* Last Name */}
                <FormInput
                  id="lastName"
                  label="Last Name"
                  value={
                    lastName
                  }
                  error={
                    formErrors.lastName
                  }
                  placeholder="Enter last name"
                  disabled={
                    isPending
                  }
                  autoComplete="family-name"
                  onChange={(
                    value,
                  ) => {
                    setLastName(
                      value,
                    );

                    if (
                      notice &&
                      notice.type !==
                        "interrupted"
                    ) {
                      clearNotice();
                    }

                    if (
                      formErrors.lastName
                    ) {
                      setFormErrors(
                        (
                          previous,
                        ) => ({
                          ...previous,
                          lastName:
                            undefined,
                        }),
                      );
                    }
                  }}
                />

                {/* Email */}
                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={
                    email
                  }
                  error={
                    formErrors.email
                  }
                  placeholder="Enter email address"
                  disabled={
                    isPending
                  }
                  autoComplete="email"
                  onChange={(
                    value,
                  ) => {
                    setEmail(
                      value,
                    );

                    if (
                      notice &&
                      notice.type !==
                        "interrupted"
                    ) {
                      clearNotice();
                    }

                    if (
                      formErrors.email
                    ) {
                      setFormErrors(
                        (
                          previous,
                        ) => ({
                          ...previous,
                          email:
                            undefined,
                        }),
                      );
                    }
                  }}
                />

                {/* Phone */}
                <FormInput
                  id="phone"
                  label="Mobile Number"
                  type="tel"
                  value={
                    phone
                  }
                  error={
                    formErrors.phone
                  }
                  placeholder="Enter mobile number"
                  disabled={
                    isPending
                  }
                  autoComplete="tel"
                  onChange={(
                    value,
                  ) => {
                    setPhone(
                      value,
                    );

                    if (
                      notice &&
                      notice.type !==
                        "interrupted"
                    ) {
                      clearNotice();
                    }

                    if (
                      formErrors.phone
                    ) {
                      setFormErrors(
                        (
                          previous,
                        ) => ({
                          ...previous,
                          phone:
                            undefined,
                        }),
                      );
                    }
                  }}
                />

                {/* CV */}
                <div className="md:col-span-2">
                  <span className="mb-2 block text-sm font-semibold text-blue-01">
                    Upload CV

                    <span className="ml-1 text-red-01">
                      *
                    </span>
                  </span>

                  <label
                    htmlFor="cv"
                    className={`
                      flex
                      cursor-pointer
                      flex-col
                      items-center
                      justify-center
                      rounded-2xl
                      border-2
                      border-dashed
                      p-6
                      text-center
                      transition
                      ${
                        formErrors.cv
                          ? "border-red-300 bg-red-50/40"
                          : "border-slate-300 bg-slate-50 hover:border-blue-01"
                      }
                      ${
                        isPending
                          ? "cursor-not-allowed opacity-60"
                          : ""
                      }
                    `}
                  >
                    <Upload
                      className={`
                        mb-3
                        h-8
                        w-8
                        ${
                          formErrors.cv
                            ? "text-red-01"
                            : "text-blue-01"
                        }
                      `}
                    />

                    <span className="text-sm font-semibold text-blue-01">
                      {cv
                        ? cv.name
                        : "Click to upload your CV"}
                    </span>

                    <span className="mt-1 text-xs text-slate-500">
                      PDF, DOC, DOCX — Maximum 10 MB
                    </span>

                    <input
                      ref={
                        fileInputRef
                      }
                      id="cv"
                      type="file"
                      className="hidden"
                      accept=".pdf,.doc,.docx"
                      onChange={
                        handleFileChange
                      }
                      disabled={
                        isPending
                      }
                    />
                  </label>

                  <div className="mt-1.5 min-h-5">
                    {formErrors.cv && (
                      <p
                        role="alert"
                        className="
                          text-xs
                          font-semibold
                          leading-5
                          text-red-600
                        "
                      >
                        {
                          formErrors.cv
                        }
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  gap-3
                  border-t
                  border-slate-100
                  pt-6
                  md:flex-row
                  md:justify-between
                "
              >
                <button
                  type="button"
                  onClick={() => {
                    if (
                      isSubmissionUncertain
                    ) {
                      return;
                    }

                    clearNotice();

                    setFormErrors(
                      {},
                    );

                    setStep(1);
                  }}
                  disabled={
                    isPending ||
                    isSubmissionUncertain
                  }
                  className="
                    inline-flex
                    h-12
                    cursor-pointer
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-slate-200
                    px-8
                    text-sm
                    font-bold
                    text-slate-600
                    transition
                    hover:bg-slate-100
                    disabled:cursor-not-allowed
                    disabled:opacity-50
                  "
                >
                  <ArrowLeft className="h-4 w-4" />

                  Back
                </button>

                <div className="flex flex-col gap-3 md:flex-row">
                  <button
                    type="button"
                    onClick={
                      handleClose
                    }
                    disabled={
                      isPending ||
                      isSubmissionUncertain
                    }
                    className="
                      h-12
                      cursor-pointer
                      rounded-xl
                      border
                      border-slate-200
                      px-8
                      text-sm
                      font-bold
                      text-slate-600
                      transition
                      hover:bg-slate-100
                      disabled:cursor-not-allowed
                      disabled:opacity-50
                    "
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={
                      isPending ||
                      !isOnline
                    }
                    className="
                      inline-flex
                      h-12
                      cursor-pointer
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      bg-blue-01
                      px-8
                      text-sm
                      font-bold
                      text-white
                      transition
                      hover:bg-red-01
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isPending ? (
                      <>
                        <LoaderCircle className="h-4 w-4 animate-spin" />

                        Submitting...
                      </>
                    ) : !isOnline ? (
                      "No Internet Connection"
                    ) : isSubmissionUncertain ? (
                      <>
                        <RefreshCw className="h-4 w-4" />

                        Retry Application Safely
                      </>
                    ) : (
                      "Submit Application"
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
      </div>
    </div>
  );
}

// ======================================================
// Form Input
// ======================================================

function FormInput({
  id,
  label,
  value,
  placeholder,
  type = "text",
  error,
  disabled = false,
  autoComplete,
  onChange,
}: FormInputProps) {
  const errorId =
    `${id}-error`;

  return (
    <div>
      <label
        htmlFor={id}
        className="
          mb-2
          block
          text-sm
          font-semibold
          text-blue-01
        "
      >
        {label}

        <span className="ml-1 text-red-01">
          *
        </span>
      </label>

      <input
        id={id}
        type={type}
        value={value}
        placeholder={
          placeholder
        }
        disabled={
          disabled
        }
        autoComplete={
          autoComplete
        }
        aria-invalid={Boolean(
          error,
        )}
        aria-describedby={
          error
            ? errorId
            : undefined
        }
        onChange={(
          event,
        ) =>
          onChange(
            event.target.value,
          )
        }
        className={`
          h-12
          w-full
          rounded-xl
          border
          px-4
          text-sm
          text-slate-800
          outline-none
          transition
          placeholder:text-slate-400
          disabled:cursor-not-allowed
          disabled:opacity-60
          ${
            error
              ? "border-red-300 bg-red-50/20 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              : "border-slate-200 bg-slate-50 focus:border-blue-01 focus:bg-white focus:ring-4 focus:ring-blue-01/10"
          }
        `}
      />

      <div className="mt-1.5 min-h-5">
        {error && (
          <p
            id={
              errorId
            }
            role="alert"
            className="
              text-xs
              font-semibold
              leading-5
              text-red-600
            "
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}