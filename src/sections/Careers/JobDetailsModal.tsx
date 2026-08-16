import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  CalendarClock,
  CheckCircle,
  Clock,
  LoaderCircle,
  MapPin,
  Upload,
  X,
} from "lucide-react";

import {
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from "react";

import axios from "axios";

import type { Job } from "../../services/jobsApi";

import {
  useCreateJobRequest,
} from "../../hooks/mutations/useCreateJobRequest";

interface JobDetailsModalProps {
  job: Job | null;
  onClose: () => void;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  cv?: string;
}

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

const DEFAULT_SUBMIT_ERROR =
  "We couldn't submit your application. Please try again.";

const getJobRequestErrorMessage = (
  error: unknown,
): string => {
  if (!axios.isAxiosError(error)) {
    return DEFAULT_SUBMIT_ERROR;
  }

  const status =
    error.response?.status;

  const backendMessage =
    error.response?.data?.message;

  // Network / connection error
  if (
    error.code === "ERR_NETWORK" ||
    !error.response
  ) {
    return "We couldn't connect to the server. Please check your internet connection and try again.";
  }

  // Bad request / validation
  if (status === 400) {
    if (
      typeof backendMessage === "string"
    ) {
      const normalizedMessage =
        backendMessage.toLowerCase();

      const looksTechnical =
        normalizedMessage.includes(
          "route",
        ) ||
        normalizedMessage.includes(
          "/api/",
        ) ||
        normalizedMessage.includes(
          "not found",
        );

      if (!looksTechnical) {
        return backendMessage;
      }
    }

    return "Some of the submitted information is invalid. Please review your details and try again.";
  }

  // Unauthorized / forbidden
  if (
    status === 401 ||
    status === 403
  ) {
    return "Your application could not be submitted at this time. Please try again later.";
  }

  // Route / resource not found
  if (status === 404) {
    return "We couldn't submit your application because the application service is currently unavailable. Please try again later.";
  }

  // Conflict
  if (status === 409) {
    if (
      typeof backendMessage === "string" &&
      !backendMessage
        .toLowerCase()
        .includes("route")
    ) {
      return backendMessage;
    }

    return "This application could not be submitted because of a conflicting request. Please review your information and try again.";
  }

  // File too large
  if (status === 413) {
    return "Your CV file is too large. Please upload a smaller file and try again.";
  }

  // Unsupported file / media type
  if (status === 415) {
    return "The uploaded CV format is not supported. Please upload a PDF, DOC, or DOCX file.";
  }

  // Rate limit
  if (status === 429) {
    return "Too many submission attempts were made. Please wait a moment and try again.";
  }

  // Backend/server error
  if (
    status &&
    status >= 500
  ) {
    return "The server encountered a problem while submitting your application. Please try again in a moment.";
  }

  return DEFAULT_SUBMIT_ERROR;
};

export default function JobDetailsModal({
  job,
  onClose,
}: JobDetailsModalProps) {
  const [step, setStep] =
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

  const [cv, setCv] =
    useState<File | null>(
      null,
    );

  const [
    formErrors,
    setFormErrors,
  ] = useState<FormErrors>(
    {},
  );

  const [
    apiError,
    setApiError,
  ] = useState("");

  const fileInputRef =
    useRef<HTMLInputElement | null>(
      null,
    );

  const createJobRequest =
    useCreateJobRequest();

  if (!job) {
    return null;
  }

  const isOpen =
    job.status === "published" &&
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

      if (!trimmedFirstName) {
        errors.firstName =
          "First name is required.";
      } else if (
        trimmedFirstName.length <
        2
      ) {
        errors.firstName =
          "First name must contain at least 2 characters.";
      }

      if (!trimmedLastName) {
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

  const resetForm = () => {
    setStep(1);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setCv(null);

    setFormErrors({});
    setApiError("");

    if (
      fileInputRef.current
    ) {
      fileInputRef.current.value =
        "";
    }

    createJobRequest.reset();
  };

  const handleClose = () => {
    if (
      createJobRequest.isPending
    ) {
      return;
    }

    resetForm();
    onClose();
  };

  const handleFileChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const file =
      event.target.files?.[0];

    setApiError("");

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

  const handleSubmit =
    async (
      event: FormEvent<HTMLFormElement>,
    ) => {
      event.preventDefault();

      setApiError("");

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

      try {
        await createJobRequest.mutateAsync(
          {
            job: job._id,
            firstName:
              firstName.trim(),
            lastName:
              lastName.trim(),
            email:
              email.trim(),
            phone:
              phone.trim(),
            cv: cv as File,
          },
        );
      } catch (error: unknown) {
        console.error(
          "Failed to submit job application:",
          error,
        );

        setApiError(
          getJobRequestErrorMessage(
            error,
          ),
        );
      }
    };

  const isSubmitted =
    createJobRequest.isSuccess &&
    createJobRequest.data
      ?.success === true;

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
        <button
          type="button"
          onClick={handleClose}
          disabled={
            createJobRequest.isPending
          }
          aria-label="Close job details"
          className="
            absolute
            right-5
            top-5
            z-10
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

        {/* Header */}
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
            className="pr-10 text-2xl font-bold text-blue-01 md:text-3xl"
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
              {job.employmentType}
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
              {formattedDeadline}
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

        {/* Success */}
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
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-01/10">
                <CheckCircle className="h-9 w-9 text-blue-01" />
              </div>

              <h4 className="text-2xl font-bold text-blue-01">
                Application Submitted Successfully
              </h4>

              <p className="mt-3 max-w-lg text-sm leading-7 text-slate-500">
                {createJobRequest
                  .data?.message ||
                  "Your job application has been submitted successfully."}
              </p>

              <button
                type="button"
                onClick={
                  handleClose
                }
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

        {/* Step 1 */}
        {!isSubmitted &&
          step === 1 && (
            <div className="p-6 md:p-8">
              <div className="mb-8 rounded-2xl bg-[#f7f8ff] p-5">
                <h4 className="mb-3 text-xl font-bold text-blue-01">
                  About the Role
                </h4>

                <p className="text-sm leading-7 text-slate-600">
                  {job.description}
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div>
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
                          className="flex gap-3"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-blue-01" />

                          <p className="text-sm leading-6 text-slate-600">
                            {item}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                <div>
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
                          className="flex gap-3"
                        >
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-01" />

                          <p className="text-sm leading-6 text-slate-600">
                            {item}
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
                  disabled={!isOpen}
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

        {/* Step 2 */}
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

              {/* API Error */}
              {apiError && (
                <div
                  role="alert"
                  className="
                    mb-6
                    rounded-xl
                    border
                    border-red-200
                    bg-red-50
                    px-4
                    py-3
                    text-sm
                    font-medium
                    leading-6
                    text-red-700
                  "
                >
                  {apiError}
                </div>
              )}

              <div className="grid gap-x-4 gap-y-5 md:grid-cols-2">
                <FormInput
                  id="firstName"
                  label="First Name"
                  value={firstName}
                  error={
                    formErrors.firstName
                  }
                  placeholder="Enter first name"
                  disabled={
                    createJobRequest.isPending
                  }
                  autoComplete="given-name"
                  onChange={(
                    value,
                  ) => {
                    setFirstName(
                      value,
                    );
                    setApiError("");

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

                <FormInput
                  id="lastName"
                  label="Last Name"
                  value={lastName}
                  error={
                    formErrors.lastName
                  }
                  placeholder="Enter last name"
                  disabled={
                    createJobRequest.isPending
                  }
                  autoComplete="family-name"
                  onChange={(
                    value,
                  ) => {
                    setLastName(
                      value,
                    );
                    setApiError("");

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

                <FormInput
                  id="email"
                  label="Email Address"
                  type="email"
                  value={email}
                  error={
                    formErrors.email
                  }
                  placeholder="Enter email address"
                  disabled={
                    createJobRequest.isPending
                  }
                  autoComplete="email"
                  onChange={(
                    value,
                  ) => {
                    setEmail(
                      value,
                    );
                    setApiError("");

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

                <FormInput
                  id="phone"
                  label="Mobile Number"
                  type="tel"
                  value={phone}
                  error={
                    formErrors.phone
                  }
                  placeholder="Enter mobile number"
                  disabled={
                    createJobRequest.isPending
                  }
                  autoComplete="tel"
                  onChange={(
                    value,
                  ) => {
                    setPhone(
                      value,
                    );
                    setApiError("");

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
                  <label
                    htmlFor="cv"
                    className="mb-2 block text-sm font-semibold text-blue-01"
                  >
                    Upload CV

                    <span className="ml-1 text-red-01">
                      *
                    </span>
                  </label>

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
                        createJobRequest.isPending
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
                        createJobRequest.isPending
                      }
                    />
                  </label>

                  <div className="mt-1.5 min-h-5">
                    {formErrors.cv && (
                      <p
                        role="alert"
                        className="text-xs font-semibold leading-5 text-red-600"
                      >
                        {formErrors.cv}
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
                    setApiError("");
                    setFormErrors(
                      {},
                    );
                    setStep(1);
                  }}
                  disabled={
                    createJobRequest.isPending
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

                <button
                  type="submit"
                  disabled={
                    createJobRequest.isPending
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
                  {createJobRequest.isPending ? (
                    <>
                      <LoaderCircle className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          )}
      </div>
    </div>
  );
}

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  placeholder: string;
  error?: string;
  type?: "text" | "email" | "tel";
  disabled?: boolean;
  autoComplete?: string;
  onChange: (
    value: string,
  ) => void;
}

function FormInput({
  id,
  label,
  value,
  placeholder,
  error,
  type = "text",
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
        className="mb-2 block text-sm font-semibold text-blue-01"
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
        autoComplete={
          autoComplete
        }
        placeholder={
          placeholder
        }
        disabled={disabled}
        aria-invalid={Boolean(
          error,
        )}
        aria-describedby={
          error
            ? errorId
            : undefined
        }
        onChange={(event) =>
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
          outline-none
          transition
          disabled:cursor-not-allowed
          disabled:bg-slate-100
          ${
            error
              ? "border-red-400 bg-red-50/30 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              : "border-slate-200 focus:border-blue-01 focus:ring-4 focus:ring-blue-01/10"
          }
        `}
      />

      <div className="mt-1.5 min-h-5">
        {error && (
          <p
            id={errorId}
            role="alert"
            className="text-xs font-semibold leading-5 text-red-600"
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}